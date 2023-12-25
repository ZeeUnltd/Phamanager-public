import buyersPic from "../assets/images/benefits/image1.png";
import pharmacyPic from "../assets/images/benefits/image2.png";

const Features = () => {
  return (
    <section className="my-12 px-48 py-6 flex flex-col gap-20">
      <div className="flex justify-between  bg-primary px-12 py-16  text-white ">
        <div className="w-[45%] gap-8 flex flex-col h-full">
          <p className="w-[40%] rounded-lg bg-[#386A8B] py-3 px-6 text-[18px] text-center ">
            For drug buyers
          </p>
          <h4 className="text-4xl font-semibold">
            Compare prescription prices for free.
          </h4>
          <p className="text-[22px] my-4">
            Make personalized choices on your prescription search and contact
            the pharmacies for free.
          </p>
          <button className="w-[40%] rounded-sm text-[#386A8B] bg-white p-3  text-center text-sm">
            PLACE ORDERS
          </button>
        </div>
        <div className="w-[55%] flex justify-center items-center relative">
          <img src={buyersPic} alt="buyers" className=" z-10 w-[70%] h-full" />
          <div className="w-[70%] h-full rounded-xl bg-[#62909F] absolute top-[9%] right-[10%]" />
          <div className="w-[70%] h-full  rounded-xl bg-[#D2F4FF] absolute top-[5%] right-[12%]" />
        </div>
      </div>
      <div className="flex justify-between gap-2 bg-[#62909F] px-12 pt-16 text-white  ">
        <div className="w-[45%] gap-8 flex flex-col h-full pb-6">
          <p className="w-[45%] text-[18px] rounded-lg bg-[#386A8B] py-3 px-6 text-center">
            For pharmacies
          </p>
          <h4 className="text-4xl font-semibold">
            End-to-end solution for cost efficiency and automation.
          </h4>
          <p className="text-[22px] my-4">
            Digitalize your entire pharmacy operations across dispensary sales
            inbound, pharmacy operations, supply chain, customer relations and
            back-office.
          </p>
          <button className="w-[40%] rounded-sm text-[#386A8B] bg-white p-3  text-center text-sm">
            GET STARTED
          </button>
        </div>
        <div className="w-[55%] flex items-end h-full">
          <img
            src={pharmacyPic}
            alt="woman in the pharmacy"
            className="rounded-t-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
