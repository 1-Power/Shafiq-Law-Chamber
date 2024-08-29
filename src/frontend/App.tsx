import BaseHead from "./compoents/baseHead";
import Footer from "./compoents/footer";
import Router from "../backend/routes/routes";

function App() {
  return (
    <>
      {/* All Imports */}
      <BaseHead />
      <Router />
      <Footer />
    </>
  );
}

export default App;
