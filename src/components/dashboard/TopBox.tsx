import { BiSolidMemoryCard } from "react-icons/bi";

type props = {
  title: string;
  desc: string;
  number: number;
  active?: boolean;
};

const startsWithPlus = (text: string): boolean => {
  return text.trim().charAt(0) === "+";
};

const TopBox = (props: props) => {
  const isPositive = startsWithPlus(props.desc);

  return (
    <div
      className={`relative w-[347px] h-[187px] p-6 flex flex-col justify-between text-[#110C4A] ${
        props.active ? "bg-formBlue" : " border-2 border-[#62909F]"
      }`}
    >
      <p
        className={`text-[14px] font-semibold ${
          props.active ? "text-white" : ""
        }`}
      >
        {props.title}
      </p>
      <p
        className={`text-[36px] font-bold ${props.active ? "text-white" : ""}`}
      >
        {props.number}
      </p>
      <p
        className={`text-[14px] font-semibold ${
          isPositive ? "text-green-500" : "text-red-500"
        } ${props.active ? "text-white" : ""}`}
      >
        {" "}
        {props.desc}
      </p>

      <span className="absolute right-4">
        <BiSolidMemoryCard
          size="1.5rem"
          color={`${props.active ? "#fff" : "#2817E9"}`}
        />
      </span>
    </div>
  );
};

export default TopBox;
