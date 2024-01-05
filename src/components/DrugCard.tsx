import { BsCart3 } from "react-icons/bs";
import { TbCurrencyNaira } from "react-icons/tb";
import image2 from "../assets/images/trustedPartners/2.png";

type props = {
  drugName: string;
  pharmacy: string;
  details: string;
  description: string;
  price: number;
  id: number;
};

const DrugCard: React.FC<props> = props => {
  const { drugName, pharmacy, description, price, details, id } = props;

  return (
    <div className="flex border-2 ">
      <div className="w-[350px]">
        <img src={image2} alt="" className="" />
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
          <button className="text-lg flex gap-2 items-center border-2 rounded-full p-3">
            <span>
              <BsCart3 />
            </span>{" "}
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrugCard;
