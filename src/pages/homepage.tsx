import BuiltStrong from "../components/builtStrong";
import Clients from "../components/clients";
import Collaborative from "../components/collaborative";
import Footer from "../components/footer";
import HeroSection from "../components/heroSection";
import IssueTracking from "../components/issueTracking";
import MadeFor from "../components/madeFor";
import Navbar from "../components/navbar";
import SetProduction from "../components/setProduction";
import "../global.css";

const Homepage = () => {
  return (
    <div className="font-family-inter ">
      <Navbar />
      <HeroSection />

      <MadeFor />
      <SetProduction />
      <IssueTracking />
      <Collaborative />
      <BuiltStrong />
      <Footer />
    </div>
  );
};

export default Homepage;
