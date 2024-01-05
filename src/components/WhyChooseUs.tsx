import delivery from "../assets/images/delivery.svg";
import like from "../assets/images/like.svg";
import dollar from "../assets/images/dollar-circle.svg";
import message from "../assets/images/device-message.svg";

const WhyChooseUs = () => {
  return (
    <section className="my-20">
      <div className="px-48 mb-6">
        <div className="border-t-8  border-formBlue rounded-md shadow-lg z-10">
          <div className="flex flex-col gap-3 justify-center items-center my-12">
            <h3 className="font-semibold text-3xl">
              Your Business derserve the Best
            </h3>
            <p className="text-xl">Why so many choose to buy from us.</p>
          </div>
          <div className="flex items-start justify-between p-12 border-t">
            <div className="w-[25%] flex flex-col items-center justify-start gap-4 border-r pr-2">
              <div className="w-[48px]">
                <img src={delivery} alt="" className="w-full" />
              </div>
              <h5 className="font-semibold text-2xl text-center">
                FAST RUSH DELIVERY
              </h5>
              <p className="w-[80%] text-lg leading-loose text-center">
                Our pharmacy partners deliver inbound requests within 24hrs to
                prioritize your well-being.
              </p>
            </div>
            <div className="w-[25%] flex flex-col items-center justify-start gap-4 border-r pr-2">
              <div className="w-[48px]">
                <img src={dollar} alt="" className="w-full" />
              </div>
              <h5 className="font-semibold text-2xl text-center">
                BETTER PRICING
              </h5>
              <p className="w-[80%] text-lg leading-loose text-center">
                We allow you compare prices across various pharmacies within and
                outside your location to help with decision making.
              </p>
            </div>
            <div className="w-[25%] flex flex-col items-center justify-start gap-4 border-r pr-2">
              <div className="w-[48px]">
                <img src={like} alt="" className="w-full" />
              </div>
              <h5 className="font-semibold text-2xl text-center">
                INDUSTRY LEADING SATISFACTION GUARANTEE
              </h5>
              <p className="w-[80%] text-lg leading-loose text-center">
                Our pharmacy parties follow the best practices from procurement
                to handling and dispatch. Read more on our guarantees to you.
              </p>
            </div>
            <div className="w-[25%] flex flex-col items-center justify-start gap-4">
              <div className="w-[48px]">
                <img src={message} alt="" className="w-full" />
              </div>
              <h5 className="font-semibold text-2xl text-center">
                IN CALL SERVICE
              </h5>
              <p className="w-[80%] text-lg leading-loose text-center">
                We allow pre-sales and post sales advisory and feedback to
                improve value offerings to both pharmacies and drug buyers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
