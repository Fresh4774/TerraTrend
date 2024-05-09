import Navbar from "@/components/navbar/navbar";
import HeroSection from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import SixthSection from "./sixth-section";
import GetStartedFree from "./eighth-section";
import Footer from "@/components/footer";

const LandingPage = () => {
    return ( 
    <div className="">
        <Navbar />
        <HeroSection /> 
        <SecondSection />
        <ThirdSection />
        <SixthSection />
        <GetStartedFree />
        <Footer />

    </div> );
}
 
export default LandingPage;