import Clients from "../components/clients";
import Footer from "../components/footer";
import HeroSection from "../components/heroSection";
import MadeFor from "../components/madeFor";
import Navbar from "../components/navbar";
import "../global.css";

const Homepage = () => {
  return (
    <div className="font-family-inter ">
      <Navbar />
      <HeroSection />
      <Clients />
      <MadeFor />
      <Footer />
    </div>
  );
};

export default Homepage;
