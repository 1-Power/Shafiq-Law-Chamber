import MainIntro from "../compoents/landingPageCompoents/MainIntro";
import YourLeagueTeam from "../compoents/landingPageCompoents/YourLeagueTeam";
import OurValues from "../compoents/aboutUsPageCompoents/CoreValueSection";
import TestimonialSection from "../compoents/aboutUsPageCompoents/TestimonialSection";
import ServicesSection from "../pages/services";
import ConnectSection from "../compoents/landingPageCompoents/SendUsAMessage";
const LandingPage = () => {
  return (
    <>
      {/* Main Intro Page */}
      <MainIntro />
      {/* Meet your League Team  */}
      <YourLeagueTeam />
      {/* Full Service  */}
      <ServicesSection />
      {/* Our Values */}
      <OurValues />
      {/* Our Testimonials */}
      <TestimonialSection />
      {/* Send Us a Message */}
      <ConnectSection />
    </>
  );
};

export default LandingPage;
