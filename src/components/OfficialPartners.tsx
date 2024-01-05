import image1 from "../assets/images/trustedPartners/1.png";
import image2 from "../assets/images/trustedPartners/4.png";
import image3 from "../assets/images/trustedPartners/5.png";

const OfficialPartners = () => {
  return (
    <div className="px-48 py-20 flex items-start justify-around">
      <div className="flex flex-col items-center gap-6 w-[33%]">
        <div className="w-[150px] h-[80px]">
          <img src={image1} alt="mopheth" className="w-full h-full" />
        </div>
        <p className="text-center text-lg">Official Partner with us</p>
      </div>
      <div className="flex flex-col items-center gap-6 w-[33%] border-x">
        <div className="w-[150px] h-[80px]">
          <img src={image2} alt="alpha pharmacy" className="w-full h-full" />
        </div>
        <p className="text-center text-lg">
          One of the Fastest Growing Private Companies in Nigeria
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 w-[33%]">
        <div className="w-[150px] h-[80px]">
          <img src={image3} alt="partner" className="w-full h-full" />
        </div>
        <p className="text-center text-lg">
          Featured as one of the best pharma
        </p>
      </div>
    </div>
  );
};

export default OfficialPartners;
