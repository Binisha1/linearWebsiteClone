import Footer from "../components/footer";
import HeroSection from "../components/heroSection";
import Navbar from "../components/navbar";
import "../global.css";

const Homepage = () => {
  return (
    <div className="font-family-inter ">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Homepage;
