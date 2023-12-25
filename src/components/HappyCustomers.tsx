import image1 from "../assets/images/happyCustomers/image1.png";
import image2 from "../assets/images/happyCustomers/image2.png";
import image3 from "../assets/images/happyCustomers/image3.png";
import image4 from "../assets/images/happyCustomers/image4.png";
import image5 from "../assets/images/happyCustomers/image5.png";
import image6 from "../assets/images/happyCustomers/image6.png";
import image7 from "../assets/images/happyCustomers/image7.png";
import image8 from "../assets/images/happyCustomers/image8.png";
import image9 from "../assets/images/happyCustomers/image9.png";
import image10 from "../assets/images/happyCustomers/image10.png";
import image11 from "../assets/images/happyCustomers/image11.png";
import image12 from "../assets/images/happyCustomers/image12.png";
import image13 from "../assets/images/happyCustomers/image13.png";
import image14 from "../assets/images/happyCustomers/image14.png";

const HappyCustomers = () => {
  return (
    <section className="py-12 px-48 ">
      <div className="flex flex-col gap-3 justify-center items-center">
        <h3 className="font-semibold text-3xl">
          Some of Our Happy 5,000+ Customers
        </h3>
        <p className="text-2xl">
          Get a glimpse of our satisfactory service and product.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-6 my-6">
        <div className="row-span-2 col-span-2">
          <img src={image11} alt="" />
        </div>
        <div>
          <img src={image5} alt="" />
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <img src={image3} alt="" />
        </div>
        <div>
          <img src={image8} alt="" />
        </div>
        <div>
          <img src={image6} alt="" />
        </div>
        <div>
          <img src={image12} alt="" />
        </div>
        <div>
          <img src={image9} alt="" />
        </div>
        <div>
          <img src={image7} alt="" />
        </div>
        <div>
          <img src={image13} alt="" />
        </div>
        <div className="row-span-2 col-span-2">
          <img src={image10} alt="" />
        </div>
        <div>
          <img src={image4} alt="" />
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image14} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;
