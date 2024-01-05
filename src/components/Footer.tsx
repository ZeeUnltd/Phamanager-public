import logo from "../assets/images/logo.svg";
import address from "../assets/images/footerIcons/address.png";
import call from "../assets/images/footerIcons/call.png";
import chat from "../assets/images/footerIcons/chat.png";
import mail from "../assets/images/footerIcons/mail.png";
import fb from "../assets/images/footerIcons/fb.png";
import tw from "../assets/images/footerIcons/tw.png";
import ld from "../assets/images/footerIcons/ld.png";
import yt from "../assets/images/footerIcons/yt.png";
import tk from "../assets/images/footerIcons/tk.png";
import ig from "../assets/images/footerIcons/ig.png";
import ChatBox from "./ChatBox";

const Footer = () => {
  return (
    <footer className="px-48 py-8">
      <div className="relative py-12">
        <img
          src={logo}
          alt="logo"
          className="w-[60px] absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]"
        />
        <div className="border" />
      </div>

      <div className="grid grid-cols-5 gap-6 ">
        <div className="flex flex-col gap-6 text-slate-500 uppercase">
          <h4 className="font-semibold text-black ">PRODUCTS</h4>
          <p className="hover:text-black cursor-pointer text-sm">Marketplace</p>
          <p className="hover:text-black cursor-pointer text-sm">
            pharmacy management system
          </p>
          <p className="hover:text-black cursor-pointer text-sm">
            hospital management system
          </p>
          <p className="hover:text-black cursor-pointer text-sm">
            laboratory management system
          </p>
          <p className="hover:text-black cursor-pointer text-sm">
            healthcare partnership marketplace
          </p>
          {/* <p className="hover:text-black cursor-pointer text-sm">all product</p> */}
        </div>
        <div className="flex flex-col gap-6 text-slate-500  uppercase">
          <h4 className="font-semibold text-black ">services</h4>
          <p className="hover:text-black cursor-pointer text-sm">
            product sales
          </p>
          <p className="hover:text-black cursor-pointer text-sm">
            medical help
          </p>
          <p className="hover:text-black cursor-pointer text-sm">
            healthcare financing
          </p>
          <p className="hover:text-black cursor-pointer text-sm">
            outreach services
          </p>
          <p className="hover:text-black cursor-pointer text-sm">
            Public health
          </p>
          <p className="hover:text-black cursor-pointer text-sm">
            all services
          </p>
        </div>
        <div className="flex flex-col gap-6 text-slate-500  uppercase">
          <h4 className="font-semibold text-black ">help</h4>
          <p className="hover:text-black cursor-pointer text-sm">
            contact support
          </p>
          <p className="hover:text-black cursor-pointer text-sm">
            satisfaction guarantee
          </p>
          <p className="hover:text-black cursor-pointer text-sm">
            return policy
          </p>
          <p className="hover:text-black cursor-pointer text-sm">
            shipping options
          </p>
          <p className="hover:text-black cursor-pointer text-sm">pricing</p>
          <p className="hover:text-black cursor-pointer text-sm">view all</p>
        </div>
        <div className="flex flex-col gap-6 text-slate-500 uppercase">
          <h4 className="font-semibold text-black ">about</h4>
          <p className="hover:text-black cursor-pointer text-sm">health tips</p>
          <p className="hover:text-black cursor-pointer text-sm">our story</p>
          <p className="hover:text-black cursor-pointer text-sm">
            testimonials
          </p>
          <p className="hover:text-black cursor-pointer text-sm">blog</p>
          <p className="hover:text-black cursor-pointer text-sm">careers</p>
          <p className="hover:text-black cursor-pointer text-sm">view all</p>
        </div>
        <div className="flex flex-col gap-8 text-slate-500 capitalize">
          <h4 className="font-semibold text-black ">CONTACT</h4>
          <p className=" flex items-center gap-2 hover:text-black cursor-pointer text-sm">
            <span>
              <img src={address} alt="address" className="w-8" />
            </span>
            82, Muritala Muhammad way Lagos, Nigeria.
          </p>
          <p className="flex items-center gap-2 hover:text-black cursor-pointer text-sm">
            <span>
              <img src={call} alt="call" className="w-6" />
            </span>
            Call 08146281622
          </p>
          <p className="flex items-center gap-2 hover:text-black cursor-pointer text-sm">
            <span>
              <img src={chat} alt="chat" className="w-6" />
            </span>
            Chat with an expert
          </p>
          <p className="flex items-center gap-2 hover:text-black cursor-pointer text-sm">
            <span>
              <img src={mail} alt="mail" className="w-6" />
            </span>
            email us
          </p>
        </div>
      </div>
      <div className="flex gap-3 mt-6 mb-3">
        <a href="/">
          {" "}
          <img src={fb} alt="facebook" className="w-8" />
        </a>
        <a href="/">
          {" "}
          <img src={tw} alt="twitter" className="w-8" />
        </a>
        <a href="/">
          {" "}
          <img src={ig} alt="instagram" className="w-8" />
        </a>
        <a href="/">
          {" "}
          <img src={ld} alt="linkedn" className="w-8" />
        </a>
        <a href="/">
          {" "}
          <img src={yt} alt="youtube" className="w-8" />
        </a>
        <a href="/">
          {" "}
          <img src={tk} alt="tiktok" className="w-8" />
        </a>
      </div>
      <div className="border" />
      <div className="flex justify-end py-12 ">
        <p className="text-sm">&copy; Copyright 2023, All Right Reserved.</p>
      </div>
      <ChatBox />
    </footer>
  );
};

export default Footer;
