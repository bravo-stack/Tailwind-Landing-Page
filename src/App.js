import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import About from "./pages/About";

function App() {
  const [navBarOpen, setNavBarOpen] = useState(false)

  // toggle navBar 
  const toggleNav = () => {
    setNavBarOpen(!navBarOpen)
  }


  return (

    <Router>
      <div className>
        <Header navBarOpen={navBarOpen} toggleNav={toggleNav} />
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<About />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
