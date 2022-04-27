import React, { useState, useEffect } from "react";
import { Navbar } from "../Components/Navbar";

// react-icons
import { BiArrowToTop } from "react-icons/bi";

const Portfolio = () => {
  const [showPageUp, setShowPageUp] = useState(false);
  window.onscroll = () => {
    window.scrollY > 300 ? setShowPageUp(true) : setShowPageUp(false);
  }
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <Navbar />
      <div>
        <button className={`btn to-top ${showPageUp ? 'visible' : 'invisible'}`} onClick={scrollToTop}>
          <BiArrowToTop />
        </button>
        <div id="one" className="container portfolio">
          <h1>hello world :)</h1>
        </div>
        <div id="two" className="container portfolio">
          <h1>hello world :)</h1>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
