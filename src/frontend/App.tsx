import BaseHead from "./compoents/baseHead";
import Navbar from "./compoents/header";
import LandingPage from "./pages/landing";
import Footer from "./compoents/footer";

function App() {
  return (
    <>
      {/* All Imports */}
      <BaseHead />
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  );
}

export default App;
