import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs"
import Footer from "./components/Footer";
import ComingSoon from "./pages/ComingSoon";

function App() {
  const [navBarOpen, setNavBarOpen] = useState(false)

  // toggle navBar 
  const toggleNav = () => {
    setNavBarOpen(!navBarOpen)
  }


    return (

      <Router>
        <div className="w-full relative">
          
          <Header navBarOpen={navBarOpen} toggleNav={toggleNav} />
          
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/coming" element={<ComingSoon />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    );
}

export default App;
