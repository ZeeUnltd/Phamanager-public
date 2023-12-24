import { TbGridDots } from "react-icons/tb";
import { BsDot } from "react-icons/bs";
import avatar from "../assets/images/avatar.svg";
import logo from "../assets/images/logo.svg";
import navCallIcon from "../assets/images/navcallimage.png";
import navChatIcon from "../assets/images/navchatimage.png";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";
import { tools } from "../constants";
import { useState } from "react";

// type tools = {
//   id: string;
//   title: string;
//   to: string;
// }[];

const MainNavigation = () => {
  const [toogleToolBox, setToogleToolBox] = useState(false);
  return (
    <div>
      <div className="bg-[#E6F2FB] flex items-center justify-between px-8 py-3 text-text">
        <p className="text-sm">We Guarantee 99.7% Satisfaction</p>
        <div className="flex items-center justify-between w-[160px] relative">
          <div
            className="flex gap-1 items-center cursor-pointer hover:text-formBlue"
            onClick={() => setToogleToolBox(!toogleToolBox)}
          >
            <TbGridDots size={20} />
            <p className="text-base hover:text-formBlue">Tools</p>
          </div>
          <div className="w-10 h-10 rounded-full">
            <img src={avatar} alt="profile-avatar" className="w-full h-full " />
          </div>
          {toogleToolBox && (
            <div
              className="bg-white absolute right-0 top-16 w-full slide-in-right"
              onClick={() => setToogleToolBox(!toogleToolBox)}
            >
              {tools.map(tool => (
                <div
                  key={tool.id}
                  className="flex py-2 gap-2 items-center hover:text-formBlue cursor-pointer"
                  onClick={() => {
                    setToogleToolBox(!toogleToolBox);
                  }}
                >
                  <TbGridDots size={20} />
                  <NavLink to={tool.to} className="text-base">
                    {tool.title}
                  </NavLink>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <nav className="bg-white shadow-md flex items-center justify-between pl-6 pr-12">
        <div className="flex items-center gap-24">
          <div className="w-[80px] h-[70px]">
            <img src={logo} alt="Logo" className="w-full h-full" />
          </div>
          <div className="flex items-center gap-8 shrink-0 font-normal text-text">
            {navLinks.map(link => (
              <span className="relative">
                <NavLink key={link.id} to={link.to} className="nav">
                  {link.title}
                </NavLink>
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-8 shrink-0">
          <div className="flex items-center shrink-0">
            <div className="w-10 h-10">
              <img src={navChatIcon} alt="chat" className="w-full h-full" />
            </div>
            <div>
              <h3 className="ml-2 font-semibold text-formBlue">
                Live Chat Now
              </h3>
              <p className="flex items-center">
                <BsDot size={25} className="text-green-500" />
                Chat with an Expert
              </p>
            </div>
          </div>
          <div className="h-[45px] w-[1.5px] bg-gray-300"></div>
          <div className="flex items-center shrink-0">
            <div className="w-10 h-10">
              <img src={navCallIcon} alt="call" className="w-full h-full" />
            </div>
            <div>
              <h3 className="ml-2 font-semibold text-formBlue"> 09087654321</h3>
              <p className="flex items-center">
                <BsDot size={25} className="text-green-500" /> Talk to an Expert
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
