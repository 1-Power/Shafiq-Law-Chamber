import image from "../../assets/images/30490-Photoroom.png";

const LandingPage = () => {
  return (
    <>
      <div className="bg-dracula-bg min-h-screen flex items-center justify-center text-dracula-foreground">
        <div className="max-w-7.5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center text-center sm:text-left">
          <div className="sm:w-1/2 p-4 flex flex-col justify-center items-center sm:items-start">
            <h1 className="text-4xl sm:text-6xl font-bold">
              Deeper Understanding
            </h1>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
              Better Solutions
            </h2>
            <p className="mt-4 text-xl sm:text-2xl">
              Providing expert legal services to our clients with integrity and
              dedication.
            </p>
            <a
              href="#services"
              className="mt-8 inline-block bg-dracula-pink text-dracula-bg hover:bg-dracula-foreground hover:text-dracula-bg px-6 py-3 rounded-md text-lg font-medium"
            >
              Get In Touch
            </a>
          </div>
          <div className="sm:w-1/2 p-4 flex justify-center sm:justify-end mt-8 sm:mt-0">
            <img
              className="w-full h-auto rounded-lg"
              src={image}
              alt="Illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
