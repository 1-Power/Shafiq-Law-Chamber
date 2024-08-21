// File: src/App.tsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./../../frontend/pages/landing";
import AboutMePage from "../../frontend/pages/aboutUs";
import servicesPage from "../../frontend/pages/services";
import ContactPage from "../../frontend/pages/contact";
import NavBar from "../../frontend/compoents/header";
import CaseLaw from "../../frontend/pages/caseLaw";

const App = () => {
  return (
    <Router>
      <div className="bg-dracula-bg text-dracula-foreground min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/about" Component={AboutMePage} />
          <Route path="/services" Component={servicesPage} />
          <Route path="/contact" Component={ContactPage} />
          <Route path="/caselaw" Component={CaseLaw} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
