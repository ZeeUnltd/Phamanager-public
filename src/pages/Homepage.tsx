import Hero from "../components/Hero";
import TopProductsCategory from "../components/TopProductsCategory";
import HappyCustomers from "../components/HappyCustomers";
import Features from "../components/Features";
import HowToUse from "../components/HowToUse";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonies from "../components/Testimonies";
import OfficialPartners from "../components/OfficialPartners";
import Footer from "../components/Footer";

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
        <Testimonies />
        <OfficialPartners />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
