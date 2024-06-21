import { Link, useParams } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
// import { useState } from "react";
import { Icon } from "@iconify/react";
import Profile from "../../../../components/Profile/Profile";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../../../components/redux/store";

interface cartProps {
  cart: Array<any>;
  title: any;
  subtitle: any;
  linkTo: any;
}

const Header: React.FC<cartProps> = ({ title, subtitle, linkTo }) => {
  // const [cartCount, setCartCount] = useState(0);
  const param = useParams();
  const uniqueID = param.id;

  // const cart = useSelector((state: any) => state.cart);
  const cart = useAppSelector((state: any) => state.cart.cart);
  const getTotalQuantity = () => {
    let total = 0;
    // Check if cart exists and is an array before using forEach
    if (cart && Array.isArray(cart)) {
      cart.forEach((item: any) => {
        total += item.quantity;
      });
    }
    // Return 0 as default if cart is empty or not an array
    return total;
  };

  return (
    <>
      <div className="flex justify-between items-start w-full h-[75px] mt-12 mb-6 relative text-[#444857]">
        <div className=" w-[60%] flex flex-col gap-4">
          <h3 className="text-[30px] font-bold">{title}</h3>
          {subtitle && (
            <Link to={linkTo}>
              <div className="flex items-center gap-3 cursor-pointer">
                <Icon
                  className="h-6 w-6 rounded-full bg-[#444857]"
                  color="white"
                  icon="majesticons:arrow-left"
                />

                <b>
                  {" "}
                  <small>{subtitle} </small>
                </b>
              </div>
            </Link>
          )}
        </div>
        <div className="flex justify-evenly items-center w-[40%] gap-3">
          <div className="relative">
            <Link to={`/dashboard/${uniqueID}/inbounds/prescription/cart`}>
              <BsCart3 size={24} />
              <p className="flex justify-center items-center rounded-full w-4 h-4 bg-yellow-400 text-[12px] p-2 text-white absolute -top-3 -right-2">
                {/* {cartCount} */}
                {getTotalQuantity() || 0}
              </p>
            </Link>
          </div>
          <div>
            <Icon
              style={{
                marginRight: "25px",
              }}
              fontSize="20px"
              icon="carbon:notification"
            />
          </div>
          <Profile />
        </div>
        <p className="absolute bottom-0 right-[50px] text-xs ">
          User ID: 1234567
        </p>
      </div>
    </>
  );
}

export default Header;
