import { useState } from "react";
// import { useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { sidebarNavTop, sidebarNavBottom } from "../../constants/sidebarNav";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  //   const location = useLocation();
  const [activeNav, setActiveNav] = useState<string | null>(null);

  const handleNavClick = (navLink: string) => {
    setActiveNav(activeNav === navLink ? null : navLink);
  };

  return (
    <div className="p-[20px] h-[100%] border-r border-slate-200 font-Euclid text-text">
      <div className="mb-8 h-[80px] w-[80px]">
        <img src={logo} alt="logo"></img>
      </div>
      <nav>
        <ul>
          {sidebarNavTop.map((nav, i) => (
            <li className="mb-2 rounded-lg" key={i}>
              <NavLink
                className={`group flex gap-4 px-2  py-4  rounded-md hover:bg-formBlue hover:text-white ${
                  activeNav === nav.link ? "bg-formBlue text-white" : ""
                }`}
                to={nav.link}
                onClick={() => handleNavClick(nav.link)}
              >
                <span>
                  <img
                    src={nav.icon}
                    alt="icon"
                    className="group-hover:bg-white rounded-sm"
                  />
                </span>
                {nav.text}
              </NavLink>
              {nav.subList && activeNav === nav.link && (
                <ul>
                  {nav.subList.map((subNav, j) => (
                    <li className="ml-6 mt-2" key={j}>
                      {" "}
                      <NavLink
                        className="flex gap-4 py-4  rounded-md hover:bg-formBlue hover:text-white"
                        to={subNav.link}
                      >
                        <span>
                          <img src={subNav.icon} alt="icon" />
                        </span>
                        {subNav.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <div className="w-[100%] h-[0.5px] bg-slate-200"></div>
          {sidebarNavBottom.map((nav, i) => (
            <li className="m-2 rounded-lg" key={i}>
              <NavLink
                className={`group flex gap-4 px-2  py-4  rounded-md hover:bg-formBlue hover:text-white ${
                  activeNav === nav.link ? "bg-formBlue text-white" : ""
                }`}
                to={nav.link}
                onClick={() => handleNavClick(nav.link)}
              >
                <span>
                  <img
                    src={nav.icon}
                    alt="icon"
                    className="group-hover:bg-white rounded-sm"
                  />
                </span>
                {nav.text}
              </NavLink>
              {nav.subList && activeNav === nav.link && (
                <ul>
                  {nav.subList.map((subNav, j) => (
                    <li className="ml-6 mt-2" key={j}>
                      {" "}
                      <NavLink
                        className="flex gap-4 py-4  rounded-md hover:bg-formBlue hover:text-white"
                        to={subNav.link}
                      >
                        <span>
                          <img src={subNav.icon} alt="icon" />
                        </span>
                        {subNav.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
