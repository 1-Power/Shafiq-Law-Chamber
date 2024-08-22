// const ContactSection = () => {
//   return (
//     <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start p-6">
//       {/* Google Map */}
//       <div className="w-full sm:w-1/2 h-64 sm:h-auto mb-6 sm:mb-0">
//         <iframe
//           title="Google Map"
//           className="w-full h-full rounded-lg"
//           frameBorder="0"
//           style={{ border: 0 }}
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.2621789003247!2d73.0461689764773!3d33.59850127333117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94845cbcdbc7%3A0x937f5539de027943!2sFashion%20Hub!5e0!3m2!1sen!2s!4v1724187834820!5m2!1sen!2s"
//           allowFullScreen
//         ></iframe>
//       </div>

//       {/* Contact Information */}
//       <div className="w-full sm:w-1/2 flex flex-col space-y-4">
//         <div>
//           <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
//           <p className="text-gray-600">123 Law Street, City, Country</p>
//         </div>
//         <div>
//           <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
//           <p className="text-gray-600">Phone: +123-456-7890</p>
//           <p className="text-gray-600">Email: info@shafiqlawchamber.com</p>
//         </div>
//         <div>
//           <h3 className="text-xl font-semibold text-gray-800">
//             Business Hours
//           </h3>
//           <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
//           <p className="text-gray-600">Sat-Sun: Closed</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;

export default function ContactSection() {
  return (
    <div className="bg-dracula-current-line min-h-auto flex flex-col items-center text-dracula-foreground px-4 sm:px-6 lg:px-8 py-12">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center transition-transform duration-700">
        Connect Us Today
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between max-w-7.5xl w-full">
        <div className="relative sm:w-1/2 p-4 flex justify-center sm:justify-end transition-transform duration-700">
          <div className="w-full h-64 sm:h-[450px]">
            <iframe
              title="Google Map"
              className="w-full h-full rounded-lg"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.2621789003247!2d73.0461689764773!3d33.59850127333117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94845cbcdbc7%3A0x937f5539de027943!2sFashion%20Hub!5e0!3m2!1sen!2s!4v1724187834820!5m2!1sen!2s"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Text Container */}
        <div className="sm:w-1/2 p-4 flex flex-col justify-center sm:justify-start mt-8 sm:mt-0 transition-transform duration-700">
          {/* <p className="text-xl sm:text-2xl text-justify">
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
          </p> */}
          <div className="space-y-8">
            {/* Our Office */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-2xl font-semibold text-dracula-foreground">
                Morning Office
              </h3>
              <p className="text-lg text-dracula-yellow mt-2">
                Office #16, Zamurad Block District Court, Rawalpindi
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-2xl font-semibold text-dracula-foreground">
                Evening Office
              </h3>
              <p className="text-lg text-dracula-yellow mt-2">
                Office #05, 2nd Floor City Center Bank Road Saddar, Rawalpindi
              </p>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-2xl font-semibold text-dracula-foreground">
                Contact Us
              </h3>
              {/* <p className="text-lg text-dracula- mt-2">
                Phone: +92-3009817389
              </p>
              <p className="text-lg text-dracula-yellow">
                Email: slclawfirm@gmail.com
              </p> */}
              <p className="text-lg text-dracula-yellow mt-2">
                <a href="tel:+923009817389" className="hover:underline">
                  Phone: +92-3009817389
                </a>
              </p>
              <p className="text-lg text-dracula-yellow">
                <a
                  href="mailto:slclawfirm@gmail.com"
                  className="hover:underline"
                >
                  Email: slclawfirm@gmail.com
                </a>
              </p>
            </div>

            {/* Business Hours */}
            {/* <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-2xl font-semibold text-dracula-foreground">
                Business Hours
              </h3>
              <p className="text-lg text-dracula-comment mt-2">
                Mon-Fri: 9:00 AM - 6:00 PM
              </p>
              <p className="text-lg text-dracula-comment">Sat-Sun: Closed</p>
            </div> */}
          </div>

          <a
            href="/contact"
            className="mt-8 bg-dracula-pink text-dracula-bg hover:bg-dracula-dark hover:text-dracula-light px-6 py-3 rounded-md text-lg font-medium transition-transform transform hover:scale-105 mx-auto"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
