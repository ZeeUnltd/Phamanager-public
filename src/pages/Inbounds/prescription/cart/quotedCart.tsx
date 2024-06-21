import React from "react";
import { Link } from "react-router-dom";
import CounterPrice from "../../../../components/CounterPrice";
import Dispensary from "../../../../components/Dispensary";
import { RiDeleteBin6Line } from "react-icons/ri";
import Container from "../../../../components/container/container";
import PresHeader from "../components/presHeader";
import { useParams } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../../../components/redux/Cart/presCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

interface cartProps {
  presCart: Array<any>;
  id: any;
}

const QuotedCart: React.FC<cartProps> = ({ id }) => {
  const param = useParams();
  const uniqueID = param.id;

  const dispatch = useDispatch();
  const presCart = useSelector((state: any) => state.presCart.presCart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    // Check if cart exists and is an array before using forEach
    if (presCart && Array.isArray(presCart)) {
      presCart.forEach((item) => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
        if (item.quantity === 0) {
          dispatch(removeItem(item.id))
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
  }, [presCart])

  return (
    <>
      <PresHeader
        title={"Dispensary Counter"}
        subtitle={"Checkout"}
        linkTo={`/dashboard/${uniqueID}/inbounds/prescription/create-invoice`}
        presCart={[]}
      />

      <Container type="blue-border">
        <div className="checkout-page">
          {(Array.isArray(presCart) && presCart.length > 0) && getTotal().totalQuantity !== 0 ? (
            presCart.map((item) => (
              <div className="top" key={item.id}>
                <Dispensary
                  drugName={item.drugName || "Unknown"}
                  image={item.image}
                  brandName={item.brandName}
                  tabletSize={item.tabletSize}
                />
                <CounterPrice
                  increaseCounter={() => dispatch(incrementQuantity(item.id))}
                  decreaseCounter={() => dispatch(decrementQuantity(item.id))}
                  price={item.price * item.quantity}
                  quantity={item.quantity}
                />
                <RiDeleteBin6Line
                  onClick={() => dispatch(removeItem(item.id))}
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
            <div className="c-button">
              <Link
                style={{
                  width: "100%",
                }}
                to={`/dashboard/${uniqueID}/inbounds/prescription/quote-pres-cart-checkout`}
              >
                Next Page
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default QuotedCart;
