import { useState } from "react";
import { Link } from "react-router-dom";
import organizationLogo from "../../assets/images/shafiqLawchamber.jpeg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-dracula-bg h-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full">
        <div className="relative flex items-center justify-between h-full">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-16 w-auto rounded-full"
              src={organizationLogo}
              alt="Shafiq Law Chamber"
            />
            <span className="text-dracula-foreground text-lg font-bold ml-2">
              Shafiq Law Chamber
            </span>
          </div>
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-dracula-foreground hover:text-dracula-pink hover:bg-dracula-current-line focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dracula-pink"
              aria-expanded="false"
              onClick={handleMobileMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18h12M6 12h12m-9-6h9"
                />
              </svg>
            </button>
          </div>
          {/* Navigation Links */}
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center sm:space-x-4">
            <Link
              to="/"
              className="text-dracula-foreground hover:bg-dracula-current-line hover:text-dracula-pink px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-dracula-foreground hover:bg-dracula-current-line hover:text-dracula-pink px-3 py-2 rounded-md text-lg font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-dracula-foreground hover:bg-dracula-current-line hover:text-dracula-pink px-3 py-2 rounded-md text-lg font-medium"
            >
              Services
            </Link>
            <Link
              to="/caselaw"
              className="text-dracula-foreground hover:bg-dracula-current-line hover:text-dracula-pink px-3 py-2 rounded-md text-lg font-medium"
            >
              Case Law
            </Link>
          </div>
          {/* Appointment Button */}
          <div className="hidden sm:flex">
            <Link
              to="/contact"
              className="bg-dracula-pink text-dracula-bg hover:bg-dracula-foreground hover:text-dracula-bg px-3 py-2 rounded-md text-lg font-medium"
            >
              Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-dracula-bg" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-dracula-foreground hover:bg-dracula-current-line hover:text-dracula-pink block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-dracula-foreground hover:bg-dracula-current-line hover:text-dracula-pink block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-dracula-foreground hover:bg-dracula-current-line hover:text-dracula-pink block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/caselaw"
              className="text-dracula-foreground hover:bg-dracula-current-line hover:text-dracula-pink block px-3 py-2 rounded-md text-base font-medium"
            >
              Case Law
            </Link>
            <Link
              to="/contact"
              className="bg-dracula-pink text-dracula-bg hover:bg-dracula-foreground hover:text-dracula-bg block px-3 py-2 rounded-md text-base font-medium"
            >
              Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
