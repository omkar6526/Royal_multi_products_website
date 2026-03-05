import FeaturedProducts from "../component/FeaturedProducts";
import HeroSection from "../component/HeroSection";
import Products from "../component/Products";
import ReadyToOrder from "../component/ReadyToOrder";
import WhyChooseUs from "../component/WhyChooseUs";


function Home() {
  return (
    <>
      <HeroSection />
      <Products/>
      <FeaturedProducts/>
      <WhyChooseUs/>
      <ReadyToOrder/>
    </>
  );
}

export default Home;
