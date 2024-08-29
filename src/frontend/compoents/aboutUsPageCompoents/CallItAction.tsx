import { useNavigate } from "react-router-dom";

export default function CallItAction() {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact");
  };
  return (
    <section className="bg-dracula-bg py-12 text-center">
      <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
      <p className="mt-4 text-dracula-comment">
        Contact us for a consultation today.
      </p>
      <button
        onClick={handleContactClick}
        className="mt-6 bg-dracula-green text-dracula-bg py-2 px-6 rounded-full hover:bg-dracula-red"
      >
        Contact Us
      </button>
    </section>
  );
}
