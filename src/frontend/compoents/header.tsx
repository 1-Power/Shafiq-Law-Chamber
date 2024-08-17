import { useState } from "react";
import organizationLogo from "../../assets/images/logo-2.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-dracula-bg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
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
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-dracula-foreground hover:bg-dracula-current-line hover:text-dracula-pink px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-dracula-foreground hover:bg-dracula-current-line hover:text-dracula-pink px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-dracula-foreground hover:bg-dracula-current-line hover:text-dracula-pink px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-dracula-foreground hover:bg-dracula-current-line hover:text-dracula-pink px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img
                className="h-20 w-auto"
                src={organizationLogo}
                alt="Your Organization Logo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="text-dracula-foreground hover:bg-dracula-current-line hover:text-dracula-pink block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-dracula-foreground hover:bg-dracula-current-line hover:text-dracula-pink block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-dracula-foreground hover:bg-dracula-current-line hover:text-dracula-pink block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-dracula-foreground hover:bg-dracula-current-line hover:text-dracula-pink block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
