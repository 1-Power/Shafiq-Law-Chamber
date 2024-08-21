import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function footer() {
  return (
    <div className="text-dracula-foreground">
      <footer className="bg-dracula-current-line py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Shafiq Law Chamber. All rights
            reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dracula-foreground hover:text-dracula-cyan"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dracula-foreground hover:text-dracula-cyan"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dracula-foreground hover:text-dracula-cyan"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dracula-foreground hover:text-dracula-cyan"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
