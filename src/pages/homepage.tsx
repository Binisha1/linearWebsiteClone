import HeroSection from "../components/heroSection";
import Navbar from "../components/navbar";

const Homepage = () => {
  return (
    <div className="  bg-background text-primary ">
      <div className=" mx-auto">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default Homepage;
