import heroImage from "../assets/images/heroImage.png";
import image1 from "../assets/images/trustedPartners/1.png";
import image2 from "../assets/images/trustedPartners/2.png";
import image3 from "../assets/images/trustedPartners/3.png";
import image4 from "../assets/images/trustedPartners/4.png";
import image5 from "../assets/images/trustedPartners/5.png";
import { MdLocationPin } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TbCloudUpload } from "react-icons/tb";

const Hero = () => {
  return (
    <div>
      <section className="flex pl-48 py-6 ">
        <div className=" pt-10">
          <h1 className="font-bold text-6xl mb-6 text-text">
            Simplify Your Pharma Experience
          </h1>
          <p className="text-lg text-text">
            Stay ahead of the curve with our comprehensive pharmacy software.
          </p>
          <form
            action=""
            className="w-full flex items-center relative mt-12 text-sm bg-gray-100 bg-opacity-90"
            //   onSubmit={handleSearchSubmit}
          >
            <div className="w-[53%] flex items-center  pl-2 bg-gray-100 bg-opacity-90 border border-formBlue rounded-s-md">
              <CiSearch className="text-slate-500" size={25} />
              <input
                className="w-[95%] bg-inherit py-4 focus:outline-none rounded-l-md text-text"
                type="text"
                name="medication"
                id=""
                placeholder="What medication are you looking to buy?"
                required
              />
            </div>
            <div className="w-[27%] flex items-center bg-gray-100 bg-opacity-90 mr-1">
              <MdLocationPin className="text-slate-400" size={25} />

              <select
                id="area"
                name="area"
                className="w-[90%] bg-inherit py-4 focus:outline-none text-text"
              >
                <option value="">Local area</option>
                <option value="Lagos">Lagos</option>
                <option value="Oyo">Oyo</option>
                <option value="Ogun">Ogun</option>
                <option value="Osun">Osun</option>
              </select>
            </div>
            <input
              className="w-[20%] bg-[#E6F2FB] p-4 focus:outline-none rounded-r-md text-center border border-formBlue rounded-e-md hover:bg-primary"
              type="submit"
              name="submit"
              id=""
              value={"Submit"}
            />
          </form>
          <p className="text-center my-3 text-[24px] text-text">Or</p>
          <form
            action=""
            className="relative w-full bg-slate-100 text-slate-400 text-lg border-2 border-slate-200 border-dashed rounded-md cursor-pointer"
            // onSubmit={handleFileUpload}
          >
            <label
              htmlFor="prescription"
              className="flex w-full h-full justify-center gap-3 p-4"
            >
              <TbCloudUpload size={25} />
              Click here to upload prescription list
              <input
                id="prescription"
                type="file"
                className="hidden"
                // onChange={handleFileUpload}
              />
            </label>
          </form>
          <div className="flex items-center my-12 text-sm text-text">
            <div className="border-r-2 border-formBlue pr-10">
              <h5 className="font-semibold mb-2">Safe Delivery</h5>
              <p className="">As soon as man mar 20</p>
            </div>
            <div className="border-r-2 border-formBlue pr-10 pl-10">
              <h5 className="font-semibold mb-2">Multiple Choices</h5>
              <p className="">Compare various prices</p>
            </div>
            <div className="pl-10">
              <h5 className="font-semibold mb-2">Need online advisory</h5>
              <p className="">
                We allow you to speak the pharmacist from anywhere
              </p>
            </div>
          </div>
        </div>
        <div className="pt-16">
          <img src={heroImage} alt="hero" className="" />
        </div>
      </section>
      <aside className="flex items-center gap-16 pl-48 py-2 bg-[#F9FAFB]">
        <p className="shrink-0">Trusted By</p>
        <div className="w-24 h-[58px]">
          <img src={image1} alt="" className="w-full" />
        </div>
        <div className="w-24 h-[58px]">
          <img src={image2} alt="" className="w-full" />
        </div>
        <div className="w-24 h-[58px]">
          <img src={image3} alt="" className="w-full" />
        </div>
        <div className="w-24 h-[58px]">
          <img src={image4} alt="" className="w-full" />
        </div>
        <div className="w-24 h-[58px]">
          <img src={image5} alt="" className="w-full" />
        </div>
        <div className="w-24 h-[58px]">
          <img src={image1} alt="" className="w-full" />
        </div>
      </aside>
    </div>
  );
};

export default Hero;
