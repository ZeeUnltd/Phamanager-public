import { FormEvent } from "react";

import heroImage from "../assets/images/heroImage.png";
import image1 from "../assets/images/trustedPartners/1.png";
import image2 from "../assets/images/trustedPartners/2.png";
import image3 from "../assets/images/trustedPartners/3.png";
import image4 from "../assets/images/trustedPartners/4.png";
import image5 from "../assets/images/trustedPartners/5.png";
import { MdLocationPin } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TbCloudUpload } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const searchResultsHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/results?id=search");
  };

  const fileUploadHandler = (
    e: React.ChangeEvent<HTMLInputElement> & FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    navigate("/results?id=fileUpload");
  };

  return (
    <div>
      <section className="flex pl-44 py-6 ">
        <div className=" pt-10">
          <h1 className="font-bold text-5xl mb-6 text-text">
            Simplify Your HealthCare Experience
          </h1>
          <p className="text-lg text-text">
            Stay ahead of the curve with our comprehensive health system solutions.
          </p>
          <form
            action=""
            className="w-full flex items-center relative mt-12 text-sm bg-gray-100 bg-opacity-90"
            onSubmit={searchResultsHandler}
          >
            <div className="w-[53%] flex items-center justify-center gap-1  pl-2 bg-gray-100 bg-opacity-90 border border-formBlue rounded-s-md">
              <CiSearch className="text-slate-500" size={25} />
              <input
                className="w-[95%] bg-inherit text-xs py-4 focus:outline-none rounded-l-md"
                type="text"
                name="medication"
                id=""
                placeholder="What are you looking for?"
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
            onSubmit={fileUploadHandler}
          >
            <label
              htmlFor="prescription"
              className="flex w-full h-full justify-center items-center gap-3 p-4"
            >
              <TbCloudUpload size={25} />
              Click here to upload prescription list
              <input
                id="prescription"
                type="file"
                className="hidden"
                onChange={fileUploadHandler}
              />
            </label>
          </form>
          <div className="flex items-center my-12 text-sm text-text">
            <div className="border-r-2 border-formBlue pr-5 text-center">
              <h5 className="font-semibold mb-2">Data Interoperability</h5>
              <p className="">Data sharing among healthcare stakeholders</p>
            </div>
            <div className="border-r-2 border-formBlue pr-5 pl-5 text-center">
              <h5 className="font-semibold mb-2">Multiple Choices</h5>
              <p className="">Wide Selection of partners in the industry</p>
            </div>
            <div className="pl-5 text-center">
              <h5 className="font-semibold mb-2">Digital Access System</h5>
              <p className="">
                We allow you to access providers from anywhere
              </p>
            </div>
          </div>
        </div>
        <div className="pt-16">
          <img src={heroImage} alt="hero" className="" />
        </div>
      </section>
      <aside className="flex items-center gap-16 pl-48 py-4 bg-[#F9FAFB]">
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
