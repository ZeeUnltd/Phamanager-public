import React, { useEffect, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../../components/redux/store";

/**
 * Array of Objects
 * @param {array} options
 * {
 *  title,
 *  icon,
 *  to,
 *  onClick,
 * }
 * @param {object} prescription
 * @param {function} setPrescriptions
 * @param {array} prescriptions
 * @returns {jsx}
 */

export default function OptionButton({ options }) {
  const [open, setOpen] = useState(false);
  const params = useParams();
  const uniqueID = params.id;
  const presCart = useAppSelector((state: any) => state.presCart.presCart);

  useEffect(function () {
    function callback(e) {
      if (e.code === "Escape") {
        setOpen(false);
      }
    }

    console.log(presCart)

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
          className="absolute w-max -top-[10px] -left-[70px]  bg-red rounded-md py-3 shadow-md z-10 text-sm bg-white "
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
        >
          <ul>
            {options.map((option, index) => {
              return option.to ? (
                <Link to={presCart.length !== 0? `/dashboard/${uniqueID}/${option.to_alt}` : `/dashboard/${uniqueID}/${option.to}`}>
                  <li
                    key={option.title + index * 2}
                    className={`flex items-center gap-3 py-1 px-3 cursor-pointer hover:bg-gray-200  ${
                      open ? "block" : "hidden"
                    }`}
                  >
                    {React.createElement(option.icon, option.iconProps)} {/* I changed from {option.icon} to using React.createElement because the array mapped through here is plain js and it doesn't have the necessary tooling (like Babel) to understand and transpile JSX code needed to render the React component */}

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
                  {React.createElement(option.icon, option.iconProps)}

                  <span className="font-normal">{option.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
