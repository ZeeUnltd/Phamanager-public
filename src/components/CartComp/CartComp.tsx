import React from "react";
import { Link } from "react-router-dom";
import CounterPrice from "../../components/CounterPrice";
import Dispensary from "../../components/Dispensary";
import { RiDeleteBin6Line } from "react-icons/ri";
import Container from "../../components/container/container";
import Header from "../Header";
import { useParams } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/Cart/userCartSlice";
import { resetActive } from "../../components/redux/Cart/activeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

interface cartProps {
  cart: Array<any>;
  id: any;
  onClick: any;
}

const CartComp: React.FC<cartProps> = ({ id, onClick }) => {
  const param = useParams();
  const uniqueID = param.id;

  const dispatch = useDispatch();
  const cartt = useSelector((state: any) => state.userCart.userCart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    // Check if cart exists and is an array before using forEach
    if (cartt && Array.isArray(cartt)) {
      cartt.forEach((item) => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
        if (item.quantity === 0) {
          dispatch(removeItem(item.id))
          dispatch(resetActive(item.id))
        }
      });

    }
    // Return default values if cart is empty or not an array
    return {
      totalPrice: "₦ " + totalPrice || 0,
      totalQuantity: totalQuantity || 0,
    };
  };

  useEffect(() => {
    getTotal();
  }, [cartt])

  return (
    <>
      <Header
        title={"Dispensary Counter"}
        subtitle={"Checkout"}
        linkTo={`/dashboard/${uniqueID}/inbounds/add-new-purchase`}
        cart={[]}
      />

      <Container type="blue-border">
        <div className="checkout-page">
          {(Array.isArray(cartt) && cartt.length > 0) ? (
            cartt.map((item) => (
              <div className="top" key={item.id}>
                <Dispensary
                  drugName={item.drugName || "Unknown"}
                  image={
                    "/svg/drugPic.svg"
                  }
                  brandName={item.pharmacy}
                  tabletSize={item.details}
                />
                <CounterPrice
                  increaseCounter={() => dispatch(incrementQuantity(item.id))}
                  decreaseCounter={() => dispatch(decrementQuantity(item.id))}
                  price={item.price * item.quantity}
                  quantity={item.quantity}
                />
                <RiDeleteBin6Line
                  onClick={() => {
                    dispatch(removeItem(item.id));
                    dispatch(resetActive(item.id));
                  }}
                  style={{
                    fontSize: "15px",
                    position: "absolute",
                    color: "red",
                    transform: "translate(0, -50%)",
                    top: "50%",
                    right: "-25px",
                  }}
                />
              </div>
            ))
          ) : (
            <div>No items in the cart</div>
          )}
          <div />
          <div className="checkout-items">
            <div>
              <span>Item total</span>
              <span>{getTotal().totalPrice || "₦ 0"}</span>
            </div>
            <div className="c-button w-[100%]" onClick={onClick}>
              {/* <Link
                style={{
                  width: "100%",
                }}
                to={`/dashboard/${uniqueID}/inbounds/prescription/cart-checkout`}
              >
                Checkout
              </Link> */}
              Checkout
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CartComp;
