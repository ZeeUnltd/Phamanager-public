import React from "react";
import location from "/svg/location.svg";
import prescribed from "/svg/prescribe.svg";
import quantitty from "/svg/quantity.svg";
import weight from "/svg/weight.svg";
import drugImage from "./image.svg";
import trash from '/svg/trashbin.svg'
import "./index.css";
// import { useDispatch } from "react-redux";
import { useAppDispatch } from "../redux/store";
import { addToCart } from "../redux/Cart/cartSlice";

// import Image from '../Image'
// import rightArrow from '../../assets/svg/right-arrow.svg'
// import leftArrow from '../../assets/svg/left-arrow.svg'

interface props {
  edit: string;
  id: any;
  image: string;
  drugName: string;
  brandName: string;
  tabletSize: string;
  //   onClick: Function;
}

const InventoryEdit: React.FC<props> = ({
  id,
  image,
  drugName,
  brandName,
  tabletSize,
  edit,
}) => {
  //   const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  return (
    <div
      className="card"
      
    >
      <div className="image-card">
        <img alt="img" src={image} height="50%" width="100%" />
      </div>
      <div className="info-wrap">
        {/* <span className="drug-type">{drugType}</span> */}
        <div className="card-details">
          <div className="location">
            <p>{drugName}</p>
            <img src={trash} alt="" />
          </div>
          <div>
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
          <p className="tablet-size">{tabletSize}</p>
          <p className="edit">{edit}</p>
        </div>
      </div>
    </div>
  );
};

export default InventoryEdit;
