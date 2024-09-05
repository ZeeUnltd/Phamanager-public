import image1 from "../assets/images/topcategory/baby.png";
import image2 from "../assets/images/topcategory/beauty.png";
import image3 from "../assets/images/topcategory/firstAid.png";
import image4 from "../assets/images/topcategory/injection.png";
import image5 from "../assets/images/topcategory/oralDug.png";
import image6 from "../assets/images/topcategory/telehealth.png";
import image7 from "../assets/images/topcategory/vaccines.png";
import image8 from "../assets/images/topcategory/womenhealth.png";

const TopProductsCategory = () => {
  return (
    <section className="py-12 px-48 bg-[#F0F2F5]">
      <div className="flex flex-col gap-3 justify-center items-center">
        <h3 className="font-semibold text-3xl">
          Choose From Our Top Categories
        </h3>
        <p className="text-2xl">
          Our best selling products for Business/Individual.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 my-12">
        <div>
          <img
            className="w-full h-full"
            src={image5}
            alt="Oral drugs and supplements"
          />
        </div>
        <div>
          <img
            className="w-full h-full"
            src={image4}
            alt="intravenous injections and infusions"
          />
        </div>
        <div>
          <img
            className="w-full h-full"
            src={image3}
            alt="First aid and treatments"
          />
        </div>
        <div>
          <img
            className="w-full h-full"
            src={image1}
            alt="Baby and toddler supplies"
          />
        </div>
        <div>
          <img
            className="w-full h-full"
            src={image2}
            alt="Beauty and care products"
          />
        </div>
        <div>
          <img
            className="w-full h-full"
            src={image8}
            alt="Women health and sanitary products"
          />
        </div>
        <div>
          <img
            className="w-full h-full"
            src={image7}
            alt="Vaccines and cures"
          />
        </div>
        <div>
          <img
            className="w-full h-full"
            src={image6}
            alt="Provider-Patient Matching"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-primary text-white text-xl py-4 px-10 rounded-full ">
          SHOW ALL PRODUCTS
        </button>
      </div>
    </section>
  );
};

export default TopProductsCategory;
