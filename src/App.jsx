import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Factsheet from "./pages/Factsheet";
import CompanyInfo from "./pages/CompanyInfo";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Company from "./pages/Company";
import Director from "./pages/Director";
import ContactUs from "./pages/ContactUs";
// import Faq from "./pages/Faq;"
function App() {
  return (
    <Router>
      <Navbar />

      <div className="p-6">
        <Routes>
          {/* Home route will include all main sections */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Products />
                <Company />
                <Director />
                <Contact />
                <ContactUs />
                {/* <Faq /> */}
              </>
            }
          />
          <Route
            path="/companyinfo"
            element={
              <>
                <CompanyInfo />
                <ContactUs />
              </>
            }
          />
          <Route
            path="/director"
            element={
              <>
                <Director />
                <Contact />
              </>
            }
          />


          {/* Separate routes */}
          <Route path="/factsheet" element={<Factsheet />} />
          {/* <Route path="/companyinfo" element={<CompanyInfo />} /> */}
          <Route path="/director" element={<Director />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
