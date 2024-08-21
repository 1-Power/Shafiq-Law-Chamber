import TimeLine from "../compoents/aboutUsPageCompoents/TimeLine";
import HeroSection from "../compoents/aboutUsPageCompoents/HeroSection";
import IntrductionSection from "../compoents/aboutUsPageCompoents/IntroductionSection";
import TeamSection from "../compoents/aboutUsPageCompoents/TeamSection";
import CoreValueSection from "../compoents/aboutUsPageCompoents/CoreValueSection";
import TestimonialSection from "../compoents/aboutUsPageCompoents/TestimonialSection";
import CallItAction from "../compoents/aboutUsPageCompoents/CallItAction";

const AboutUs = () => {
  // Handelling with the redirect button

  return (
    <div className="bg-dracula-bg text-dracula-foreground">
      {/* Hero Section */}
      <HeroSection />
      {/* Introduction Section */}
      <IntrductionSection />
      {/* Timeline */}
      <TimeLine />
      {/* Team Section */}
      <TeamSection />
      {/* Core Values Section */}
      <CoreValueSection />
      {/* Testimonials Section */}
      <TestimonialSection />
      {/* Call to Action Section */}
      <CallItAction />
    </div>
  );
};

export default AboutUs;
