import MainIntro from "../compoents/landingPageCompoents/MainIntro";
import YourLeagueTeam from "../compoents/landingPageCompoents/YourLeagueTeam";
import OurValues from "../compoents/aboutUsPageCompoents/CoreValueSection";
import TestimonialSection from "../compoents/aboutUsPageCompoents/TestimonialSection";
const LandingPage = () => {
  return (
    <>
      {/* Main Intro Page */}
      <MainIntro />
      {/* Meet your League Team  */}
      <YourLeagueTeam />
      {/* Full Service  */}

      {/* Our Values */}
      <OurValues />
      {/* Our Testimonials */}
      <TestimonialSection />
      {/* Send Us a Message */}
    </>
  );
};

export default LandingPage;
