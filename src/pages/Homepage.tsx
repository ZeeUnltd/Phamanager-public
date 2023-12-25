import Hero from "../components/Hero";
import TopProductsCategory from "../components/TopProductsCategory";
import HappyCustomers from "../components/HappyCustomers";
import Features from "../components/Features";
import HowToUse from "../components/HowToUse";
import WhyChooseUs from "../components/WhyChooseUs";

const Homepage = () => {
  return (
    <div>
      <div>
        <Hero />
        <TopProductsCategory />
        <HappyCustomers />
        <Features />
        <HowToUse />
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default Homepage;
