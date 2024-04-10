import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

type item = {
  id: number;
  title: string;
  link?: string;
  icon?: React.ReactNode;
  action?:()=>void
};

type props = {
  title: string;
  options: item[];
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

const TopButton = (props: props) => {
  const [dropdown, setDropdown] = useState(false);

  const btnHndler = () => {
    setDropdown(dropdown => !dropdown);
  };

  return (
    <div onClick={btnHndler} className="relative">
      <button className="flex items-center gap-2 bg-formBlue rounded px-4 py-3 text-[18px] text-white">
        {props.title} <IoMdArrowDropdown />
      </button>
      {dropdown && (
        <span className="absolute right-0 border border-slate-300 mt-1 bg-white z-10">
          {props.options.map((option: item, i: number) => (
            <button
              key={i}
              onClick={option.action }
              className="flex items-center justify-center gap-3 p-2 font-medium cursor-pointer text-text hover:opacity-90"
            >
              {option.icon}
              {option.title}
            </button>
          ))}
        </span>
      )}
    </div>
  );
};

export default TopButton;
