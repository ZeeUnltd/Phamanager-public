import { useEffect, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from "react-router-dom";
// import imager from "../assets/images/trustedPartners/2.png";

type Options = {
  title: string;
  icon: string;
  onClick?: () => void;
  to?: string | undefined;
};

type OptionButtonProps = {
  options: Options[];
};

const OptionButton = ({ options }: OptionButtonProps) => {
  const [open, setOpen] = useState(false);

  useEffect(function () {
    function callback(e: KeyboardEvent) {
      if (e.code === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", callback);
    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, []);

  return (
    <div>
      <div className="relative ">
        <button className="focus:outline-none" onClick={() => setOpen(!open)}>
          <SlOptionsVertical />
        </button>

        {/* Dropdown */}
        <div
          className="absolute w-max -top-[10px] -left-20 rounded-md py-3 shadow-md z-10 text-sm bg-white "
          onClick={e => {
            e.preventDefault();
            setOpen(!open);
          }}
        >
          <ul>
            {options.map((option, index: number) => {
              return option.to ? (
                <Link key={option.title + index * 2} to={option.to}>
                  <li
                    key={option.title + index * 2}
                    className={`flex items-center gap-3 py-1 px-3 cursor-pointer hover:bg-gray-200  ${
                      open ? "block" : "hidden"
                    }`}
                  >
                    <span className="w-[30px] h-[30px] flex justify-center items-center">
                      <img
                        src={option.icon}
                        alt="icon"
                        // className="w-full h-full"
                      />
                    </span>
                    <span className="font-normal">{option.title}</span>
                  </li>
                </Link>
              ) : (
                <li
                  key={option.title + index}
                  className={`flex items-center gap-3 py-1 px-3 cursor-pointer hover:bg-gray-200  ${
                    open ? "block" : "hidden"
                  }`}
                >
                  <span className="w-[30px] h-[30px]  flex justify-center items-center">
                    <img
                      src={option.icon}
                      alt="icon"
                      // className="w-full h-full"
                    />
                  </span>

                  <span className="font-normal">{option.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OptionButton;
