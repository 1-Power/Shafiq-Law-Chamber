// // File: src/App.tsx

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LandingPage from "./../../frontend/pages/landing";
// import AboutMePage from "../../frontend/pages/aboutUs";
// import servicesPage from "../../frontend/pages/services";
// import ContactPage from "../../frontend/pages/contact";
// import NavBar from "../../frontend/compoents/header";
// import CaseLaw from "../../frontend/pages/caseLaw";
// import AdminPage from "../../frontend/pages/admin/login";

// const Approutes = () => {
//   return (
//     <Router>
//       <div className="bg-dracula-bg text-dracula-foreground min-h-screen">
//         <NavBar />
//         <Routes>
//           <Route path="/" Component={LandingPage} />
//           <Route path="/about" Component={AboutMePage} />
//           <Route path="/services" Component={servicesPage} />
//           <Route path="/contact" Component={ContactPage} />
//           <Route path="/caselaw" Component={CaseLaw} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default Approutes;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./../../frontend/pages/landing";
import AboutMePage from "../../frontend/pages/aboutUs";
import ServicesPage from "../../frontend/pages/services";
import ContactPage from "../../frontend/pages/contact";
import NavBar from "../../frontend/compoents/header";
import CaseLaw from "../../frontend/pages/caseLaw";
import AdminPage from "../../frontend/pages/admin/login";

// Public Routes Layout
const PublicRoutes = () => (
  <div className="bg-dracula-bg text-dracula-foreground min-h-screen">
    <NavBar />
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/about" Component={AboutMePage} />
      <Route path="/services" Component={ServicesPage} />
      <Route path="/contact" Component={ContactPage} />
      <Route path="/caselaw" Component={CaseLaw} />
    </Routes>
  </div>
);

// Admin Routes Layout (Without NavBar)
// const AdminRoutes = () => (
//   <div className="bg-admin-bg text-admin-foreground min-h-screen">
//     <Routes>
//       <Route path="/admin" element={<AdminPage />} />
//     </Routes>
//   </div>
// );

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
