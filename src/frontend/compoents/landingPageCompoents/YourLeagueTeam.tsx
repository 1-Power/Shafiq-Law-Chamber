import { useInView } from "react-intersection-observer";
import CEOImage from "../../../assets/images/expert.jpg";

export default function YourLeagueTeam() {
  const { ref: titleRef, inView: isTitleInView } = useInView();
  const { ref: contentRef, inView: isContentInView } = useInView();

  return (
    <div className="bg-dracula-current-line min-h-auto flex flex-col items-center text-dracula-foreground px-4 sm:px-6 lg:px-8 py-12">
      {/* Title */}
      <h1
        ref={titleRef}
        className={`text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center transition-transform duration-700 ${
          isTitleInView ? "animate-fade-in-up" : "opacity-0 translate-y-4"
        }`}
      >
        Your Expert Legal Team
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between max-w-7.5xl w-full">
        <div
          ref={contentRef}
          className={`relative sm:w-1/2 p-4 flex justify-center sm:justify-end transition-transform duration-700 ${
            isContentInView ? "animate-fade-in-up" : "opacity-0 translate-y-4"
          }`}
        >
          <img
            src={CEOImage}
            alt="Founder & CEO"
            className="rounded-lg shadow-md max-w-full"
          />
        </div>

        {/* Text Container */}
        <div
          ref={contentRef}
          className={`sm:w-1/2 p-4 flex flex-col justify-center sm:justify-start mt-8 sm:mt-0 transition-transform duration-700 ${
            isContentInView ? "animate-fade-in-up" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Text */}
          <p className="text-xl sm:text-2xl text-justify">
            At <span className="font-bold">Shafiq Law Chamber</span>, our
            dedicated professionals offer exceptional legal services across
            various disciplines. With extensive experience and a client-focused
            approach, we handle complex legal matters, including corporate
            transactions, family law issues, and litigation, providing tailored
            solutions to meet your needs.
          </p>
          <p className="mt-4 text-xl sm:text-2xl text-justify">
            We pride ourselves on understanding your unique situation and
            delivering strategic counsel with empathy and precision. Our
            collaborative and excellence-driven approach ensures high-quality
            support and representation throughout your legal journey. Your
            success is our priority, and we're here to guide you every step of
            the way.
          </p>

          {/* Connect Button */}
          <a
            href="/contact"
            className="mt-8 bg-dracula-pink text-dracula-bg hover:bg-dracula-dark hover:text-dracula-light px-6 py-3 rounded-md text-lg font-medium transition-transform transform hover:scale-105 mx-auto"
          >
            Book a consultation
          </a>
        </div>
      </div>
    </div>
  );
}
