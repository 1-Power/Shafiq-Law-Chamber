import { useRef } from "react";

const Timeline: React.FC = () => {
  // Define the type of timelineRef as an HTMLDivElement
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineData = [
    {
      year: "2000",
      title: "Firm Established",
      description: "A small firm setup with big ambitions.",
    },
    {
      year: "2005",
      title: "Major Case Win",
      description: "Secured a landmark victory in a high-profile case.",
    },
    {
      year: "2010",
      title: "Expansion",
      description: "Opened multiple offices across the country.",
    },
    {
      year: "2020",
      title: "Modernization",
      description: "Implemented cutting-edge legal technologies.",
    },
    // Add more timeline events as needed
  ];

  const scrollNext = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-dracula-current-line py-12">
      <h2 className="text-3xl font-bold text-center text-dracula-foreground">
        Our Journey
      </h2>
      <div className="container mx-auto mt-8">
        <div
          ref={timelineRef}
          className="overflow-x-scroll scrollbar-hide flex space-x-4 "
        >
          {timelineData.map((event, index) => (
            <div
              key={index}
              className="min-w-[250px] text-center bg-dracula-bg p-6 rounded-lg  flex-shrink-0 shadow-lg hover:shadow-3xl transition-shadow duration-300 "
            >
              <span className="bg-dracula-green text-dracula-bg px-4 py-2 rounded-full inline-block mb-4">
                {event.year}
              </span>
              <p className="text-dracula-foreground font-bold">{event.title}</p>
              <p className="text-dracula-comment mt-2">{event.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={scrollPrev}
            className="bg-dracula-green text-dracula-bg px-4 py-2 rounded-lg shadow hover:bg-dracula-red transition-colors duration-300"
          >
            Previous
          </button>
          <button
            onClick={scrollNext}
            className="bg-dracula-green text-dracula-bg px-4 py-2 rounded-lg shadow hover:bg-dracula-red transition-colors duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
