import BuiltStrong from "../components/builtStrong";
import Collaborative from "../components/collaborative";
import Footer from "../components/footer";
import HeroSection from "../components/heroSection";
import IssueTracking from "../components/issueTracking";
import MadeFor from "../components/madeFor";
import Navbar from "../components/navbar";
import PlanPresent from "../components/planPresent";
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
      <PlanPresent />
      <Footer />
    </div>
  );
};

export default Homepage;
