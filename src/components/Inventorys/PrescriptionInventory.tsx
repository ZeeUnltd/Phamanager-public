import React from "react";
import { useState } from "react";
import location from "/svg/location.svg";
import prescribed from "/svg/prescribe.svg";
import quantitty from "/svg/quantity.svg";
import weight from "/svg/weight.svg";
import drugImage from "./image.svg";
import "./index.css";
// import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { addToCart } from "../redux/Cart/presCartSlice";

// import Image from '../Image'
// import rightArrow from '../../assets/svg/right-arrow.svg'
// import leftArrow from '../../assets/svg/left-arrow.svg'

interface props {
  price: number;
  id: any;
  image: string;
  drugName: string;
  drugType: string;
  brandName: string;
  tabletSize: string;
  active: boolean;
  className: string;
  //   onClick: Function;
}

const PrescriptionInventory: React.FC<props> = ({
  id,
  image,
  drugName,
  drugType,
  price,
  brandName,
  tabletSize,
  edit,
}) => {
  //   const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);
  // const cart = useAppSelector((state: any) => state.cart.cart);
  // const setActive = () => {
  //   let active;
  //   // Check if cart exists and is an array before using forEach
  //   if (cart && Array.isArray(cart)) {

  //     cart.forEach((item: any, index) => {
  //       activee = item.active;
  //     })
  //   }

  //   return {active};
  // }

  return (
    <div
      className="cards"
      onClick={() => {
        dispatch(
          addToCart({
            id,
            drugName,
            brandName,
            image,
            price,
            tabletSize,
            edit,
          })
        );
        setActive(!active);
      }}
    >
      <div className="image-cards">
        <img alt="img" src={image} height="50%" width="100%" />
      </div>
      <div
        className={active ? "info-wraps-active" : "info-wraps"}
        // className="info-wrap"
      >
        <span className="drug-type">{drugType}</span>
        <div className="card-details">
          <div className={!active ? "locations" : "locations-active"}>
            <p>{drugName}</p>
            {/* <img alt="alt" src={location} height="20px" width="20px" /> */}
            <p>{brandName}</p>
          </div>
          {/* <div className="details">
            <div>
                <img alt="alt" src={prescribed} height="20px" width="20px" />
                <p>As Prescribed</p>
              </div>
            <div>
                <img alt="alt" src={quantitty} height="20px" width="20px" />
                <p>{price}</p>
              </div>
          </div> */}
        </div>
        <div className="card-base">
          {/* <img alt="alt" src={weight} height="20px" width="20px" /> */}
          <p className={!active ? "tablet-size" : "tablet-size-active"}>{tabletSize}</p>
          <p className={!active ? "cardbase-price" : "cardbase-price-active"}>{"₦ " + price}</p>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionInventory;
