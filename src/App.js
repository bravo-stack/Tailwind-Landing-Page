import { useState } from "react";
import Backdrop from "./components/Backdrop";
import Header from "./components/Header";
import Showcase from "./components/Showcase";

function App() {
  const [navBarOpen, setNavBarOpen] = useState(false)

  // toggle navBar 
  const toggleNav = () => {
    setNavBarOpen(!navBarOpen)
  }


  return (
    <div className>
      <Header navBarOpen={navBarOpen} toggleNav={toggleNav} />
      {navBarOpen&&<Backdrop />}
      <Showcase />
    </div>
  );
}

export default App;
