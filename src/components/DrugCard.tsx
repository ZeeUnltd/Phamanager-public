import { BsCart3 } from "react-icons/bs";
import { TbCurrencyNaira } from "react-icons/tb";
import image2 from "../assets/images/trustedPartners/2.png";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { addToCart } from "./redux/Cart/userCartSlice"
import { toggleActive } from "./redux/Cart/activeSlice"

type props = {
  drugName: string;
  pharmacy: string;
  details: string;
  description: string;
  price: number;
  id: number;
};

const DrugCard: React.FC<props> = (props) => {
  const { drugName, pharmacy, description, price, details, id } = props;
  const navigate = useNavigate()

  const dispatch = useAppDispatch();

  const InCart = useAppSelector((state: any) => state.active.active);


  return (
    <div className="flex border-2">
      <div className="w-[350px]" onClick={() => navigate("/drug-details")}>
        <img src={"/svg/drugPic.svg"} alt="" className="" />
      </div>
      <div className="flex flex-col gap-5 p-12 py-6 text-lg w-full">
        <h4 className="font-semibold text-2xl">{drugName}</h4>
        <p className="text-lg">{pharmacy}</p>
        <p className="font-semibold">{details}</p>
        <p>
          {description}
          {id}
        </p>
        <div className="flex items-center justify-between  font-semibold relative">
          <p className="flex justify-evenly items-center text-formBlue text-lg">
            <span>
              <TbCurrencyNaira size={25} />
            </span>
            {price}
          </p>
          <button className={InCart[id]? "text-lg text-white flex gap-2 items-center bg-[grey] border-2 rounded-full p-3" : "text-lg flex gap-2 items-center border-2 rounded-full p-3"}
            onClick={(e) => {
              // e.stopPropagation();
              dispatch(
                addToCart({
                  id,
                  drugName,
                  pharmacy,
                  image2,
                  price,
                  details,
                })
              );

              dispatch(
                toggleActive(id)
              );
              console.log(id, drugName, details)
              console.log(InCart)
            }}>
          <span>
            <img src="/svg/emptyCart.svg" alt="" />
          </span>{" "}
          {InCart[id]? "Added to cart" : "Add to Cart"}
        </button>
      </div>
    </div>
    </div >
  );
};

export default DrugCard;
