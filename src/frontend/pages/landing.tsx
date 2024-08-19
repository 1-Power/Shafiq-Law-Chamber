import illustration from "../../assets/images/6770878-Photoroom.png";

const LandingPage = () => {
  return (
    <div className="bg-dracula-bg min-h-screen text-dracula-foreground">
      <div className="py-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center text-center sm:text-left">
          {/* Text Section */}
          <div className="sm:w-1/2 p-4">
            <h1 className="text-3xl sm:text-5xl font-bold">
              Shafiq Law Chamber
            </h1>

            <p className="mt-4 text-lg sm:text-xl">
              Providing expert legal services to our clients with integrity and
              dedication.
            </p>

            <a
              href="#services"
              className="mt-8 inline-block bg-dracula-pink text-dracula-bg hover:bg-dracula-foreground hover:text-dracula-bg px-6 py-3 rounded-md text-lg font-medium"
            >
              Learn More
            </a>
          </div>

          <div className="sm:w-1/2 p-4 mt-8 sm:mt-0">
            <img
              className="w-full h-auto rounded-lg"
              src={illustration}
              alt="Illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
