import facebook from "../assets/images/footerIcons/fb.png";
import google from "../assets/images/footerIcons/Google.svg";

function ContinueWith() {
  return (
    <div className="w-[550px] flex flex-col gap-12">
      <div className=" relative">
        <p className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-white px-6">
          Or continue with
        </p>
        <div className=" w-full border-b-2" />
      </div>
      <div className="flex justify-between items-center gap-6  ">
        <div className="flex justify-center items-center gap-6 p-3 border-2 rounded-lg w-[50%]">
          <img src={google} alt="" className="w-8" />
          <p className="text-lg">Google</p>
        </div>
        <div className="flex justify-center items-center gap-6 p-3 border-2 rounded-lg w-[50%]">
          <img src={facebook} alt="facebook" className="w-8" />
          <p className="text-lg">Facebook</p>
        </div>
      </div>
    </div>
  );
}

export default ContinueWith;
