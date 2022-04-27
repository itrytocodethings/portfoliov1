// react-utils
import React, { useState, useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import { NavHashLink } from "react-router-hash-link";

// react-icons
import { BiArrowToTop } from "react-icons/bi";

const Portfolio = () => {
  const [showPageUp, setShowPageUp] = useState(false);
  window.onscroll = () => {
    window.scrollY > 50 ? setShowPageUp(true) : setShowPageUp(false);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Navbar />
      <div>
        <div id="about" className="container portfolio">
          <h1>hello world :)</h1>
        </div>
        <div id="projects" className="container portfolio">
          <h1>hello world :)</h1>
        </div>
        <div id="contact" className="container portfolio">
          <h1>hello world :)</h1>
        </div>
        <button
          className={`btn to-top ${showPageUp ? "visible" : "invisible"}`}
          onClick={scrollToTop}
        >
          <BiArrowToTop />
        </button>
      </div>
    </>
  );
};

export default Portfolio;
