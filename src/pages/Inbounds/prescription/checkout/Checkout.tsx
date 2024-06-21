import React, { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import CounterPrice from "../../../../components/CounterPrice";
import {
  Grid,
  TextField,
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  InputLabel,
  FormControl,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import Radio, { RadioProps } from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import { Link } from 'react-router-dom';
import Header from "../components/Header";
import QuotedSuccessful from "../QuotedSuccessful";
import Confirmed from "../../Confirmed";
import "./index.css";
import {
  incrementQuantity,
  decrementQuantity,
} from "../../../../components/redux/Cart/cartSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../components/redux/store";
import { Discount } from "@mui/icons-material";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#ffa902" : "#f5f8fa",
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#ffa902",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
});

// Inspired by blueprintjs
function BpRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const CartCheckout: React.FC = () => {
  const param = useParams();
  const uniqueID = param.id;

  const [discount, setDiscount] = useState("");
  const [display, setDisplay] = useState("checkout");
  const [total, setTotal] = useState({
    totalPrice: "0",
    totalQuantity: 0,
    initialPrice: 0,
    VAT: 0,
  });
  const [error, setError] = useState<string>("");
  const [discountValue, setDiscountValue] = useState("");
  //   const discountRef = useRef<HTMLInputElement>(null);
  //   let discountValue = discountRef.current?.value

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: any) => state.cart.cart);

  const handleChange = (event: SelectChangeEvent) => {
    setDiscount(event.target.value as string);
  };

  const getTotall = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    let initialPrice = 0;
    let penultimatePrice;
    let VAT = 0;
    const discountValueNumber: number = discountValue
      ? Number(discountValue)
      : 0;

    // Check if cart exists and is an array before using forEach
    if (cart && Array.isArray(cart)) {
      cart.forEach((item) => {
        totalQuantity += item.quantity;
        initialPrice += item.price * item.quantity;

        if (discount === "Fixed value discount") {
          if (discountValueNumber > initialPrice) {
            setError(
              "Discount value cannot be more than the total price of items to be bought"
            );
          } else {
            penultimatePrice = initialPrice - discountValueNumber;
            VAT = (7.5 * penultimatePrice) / 100;
            totalPrice = penultimatePrice + VAT;
            setError("");
          }
        } else if (discount === "Percentage discount") {
          if (discountValueNumber > 100) {
            setError(
              "Percentage of discount cannot be more than the total price of items to be bought"
            );
          } else {
            penultimatePrice =
              initialPrice - (discountValueNumber / 100) * initialPrice;
            VAT = (7.5 * penultimatePrice) / 100;
            totalPrice = penultimatePrice + VAT;
            setError("");
          }
        } else {
          // penultimatePrice = item.price * item.quantity;
          VAT = (7.5 * initialPrice) / 100;
          totalPrice = initialPrice + VAT;
        }
      });
    }
    // Return default values if cart is empty or not an array
    return { totalPrice, totalQuantity, initialPrice, VAT };
  };

  useEffect(() => {
    const { totalQuantity, initialPrice, VAT } = getTotall();
    const t = JSON.stringify(getTotall().totalPrice);
    setTotal({ totalPrice: t, totalQuantity, initialPrice, VAT });
  }, [discount, discountValue, cart]);
  return (
    <>
      <Header
        title={"Dispensary Counter"}
        subtitle={"Checkout"}
        linkTo={`/dashboard/${uniqueID}/inbounds/add-new-purchase`}
        cart={[]}
      />

      {display === "checkout" && (
        <div className="block-invoice">
          <div className="counter-item-session">
            <div className="subcontainer">
              {Array.isArray(cart) &&
                cart.length > 0 &&
                cart.map((item) => (
                  <CounterPrice
                    increaseCounter={() => {
                      dispatch(incrementQuantity(item.id));
                    }}
                    decreaseCounter={() => {
                      dispatch(decrementQuantity(item.id));
                    }}
                    price={item.price * item.quantity}
                    quantity={item.quantity}
                  />
                ))}
              <div className="counter-total">
                <div className="calculations">
                  <p>Subtotal</p>
                  <p>₦ {total.initialPrice}</p>
                  <p>Discount</p>
                  <p className="discount">
                    {discount === "Fixed value discount"
                      ? `- ₦ ${discountValue || 0}`
                      : discount === "Percentage discount"
                      ? `- ${discountValue || 0} %`
                      : "- ₦ 0"}
                  </p>
                  <p>VAT</p>
                  <p>₦ {total.VAT}</p>
                </div>
                <div className="total">
                  <p>{error === "" ? `Total` : null}</p>
                  <p>{error === "" ? `₦ ${total.totalPrice}` : `  ${error}`}</p>
                </div>

                {/* <Link to=""> */}

                <div
                  onClick={() => setDisplay("successful")}
                  style={{
                    width: "100%",
                    backgroundColor: "#009fe3",
                    color: "white",
                    padding: ".4em",
                    marginTop: "1em",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  Print Invoice
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="delivery-info">
            <div className="subcontainer">
              <h3>Delivery information</h3>
              <form
                action=""
                style={{
                  border: "1px solid #54A4CC",
                  padding: "2em",
                  borderRadius: "1em",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="name"
                      label="Name"
                      type="text"
                      placeholder="Lano Peters"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      id="email"
                      label="Email"
                      type="email"
                      placeholder="lanopeters392@gmail.com"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      id="state"
                      label="State"
                      type="text"
                      placeholder="Anambra State"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="mobile-number"
                      label="Mobile Number"
                      type="tel"
                      placeholder="+2349145782934"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      id="city"
                      label="City"
                      type="text"
                      placeholder="Akwa"
                      fullWidth
                      margin="normal"
                    />
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="zip"
                          label="ZIP"
                          type="text"
                          placeholder="40001"
                          fullWidth
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="local-govt"
                          label="Local Government"
                          type="text"
                          placeholder="Akwa-South"
                          fullWidth
                          margin="normal"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <TextField
                  id="address"
                  label="Address"
                  type="text"
                  placeholder="Amuku Town, Anambra State"
                  fullWidth
                  margin="normal"
                />
                {/* <Button type="submit" variant="contained" color="primary">
					Submit
				</Button> */}
              </form>

              <form action="">
                <h3>Schedule Delivery</h3>
                <Box
                  sx={{
                    border: "1px solid #54A4CC",
                    borderRadius: "1em",
                    padding: "2em",
                  }}
                >
                  <TextField
                    id="Date"
                    type="date"
                    // placeholder="Amuku Town, Anambra State"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    id="Note"
                    label="Note"
                    type="text"
                    placeholder="Type your note"
                    fullWidth
                    margin="normal"
                  />
                </Box>
              </form>
              <form action="">
                <h3>Payment Method</h3>
                <RadioGroup
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    padding: "2em 0",
                    border: "1px solid #54A4CC",
                    borderRadius: "1em",
                  }}
                  defaultValue="bank"
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                >
                  <FormControlLabel
                    value="bank"
                    control={<BpRadio />}
                    label="Bank Transfer"
                  />
                  <FormControlLabel
                    value="cash"
                    control={<BpRadio />}
                    label="Cash"
                  />
                  <FormControlLabel
                    value="pos"
                    control={<BpRadio />}
                    label="POS"
                  />
                </RadioGroup>
              </form>
              <form action="">
                <h3>Discount</h3>
                <Box
                  sx={{
                    padding: "2em",
                    border: "1px solid #54A4CC",
                    borderRadius: "1em",
                  }}
                >
                  {/* <TextField
						id="fixed"
						label="Type"
						type="text"
						placeholder="Fixed value Discount"
						fullWidth
						margin="normal"
						/> */}
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={discount}
                      label="Type"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Fixed value discount"}>
                        Fixed value discount
                      </MenuItem>
                      <MenuItem value={"Percentage discount"}>
                        Percentage discount
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="value"
                    label="Enter Value"
                    type="text"
                    placeholder="Enter NGN Value"
                    fullWidth
                    margin="normal"
                    // inputRef={discountRef}
                    value={discountValue}
                    onChange={(e) => setDiscountValue(e.target.value)}
                  />
                </Box>
              </form>
            </div>
          </div>
        </div>
      )}

      {display === "successful" && <Confirmed />}
    </>
  );
};

export default CartCheckout;
