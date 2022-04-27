// react-utils
import React, { useState, useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import { NavHashLink } from "react-router-hash-link";
import me from "../../assets/img/omgitsme.jpg";

// react-icons
import { BiArrowToTop } from "react-icons/bi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiFlask,
} from "react-icons/si";
import {FaHtml5} from "react-icons/fa"

const Portfolio = () => {
  let techIcons = [
    <SiHtml5 style={{ color: "#e34c26" }} />,
    <SiCss3 style={{ color: "#2965f1" }} />,
    <SiJavascript style={{ color: "#F0DB4F" }} />,
    <SiReact style={{ color: "#61DBFB" }} />,
    <SiPython style={{ color: "#FFE873" }} />,
    <SiFlask />,
  ];
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
      <main>
        <section className="about">
          <div id="about" className="container portfolio">
            <div className="about-content py-5">
              <h2 className="text-center mb-5">Hello World</h2>
              <div className="row">
                <div className="col-12 col-md-3">
                  <div className="left text-center mb-5">
                    <img className="img-fluid mb-3" src={me} alt="" />
                    <h3>
                      <span>W</span>ayne <span>B</span>ailey
                    </h3>
                  </div>
                </div>
                <div className="col-12 col-md-9">
                  <div className="right">
                    <p className="mb-5">
                      My name is Wayne and I'm a Full Stack Developer and lover
                      of all things tech. 💻🚀 I'm currently seeking a junior
                      developer role to gain industry experience and learn from
                      the pros! I have a passion for web application development
                      and have experience with:
                    </p>
                    <p className="text-center">
                      <ul>
                        {techIcons.map((icon) => (
                          <li className="techstack-icon scale-up-center">{icon}</li>
                        ))}
                        <li className="techstack-icon scale-up-center">
                          <i class="fab fa-html5"></i>
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="projects">
          <div id="projects" className="container portfolio">
            <h1>hello world :)</h1>
          </div>
        </section>
        <section className="contact">
          <div id="contact" className="container portfolio">
            <h1>hello world :)</h1>
          </div>
        </section>
        <button
          className={`btn to-top ${showPageUp ? "visible" : "invisible"}`}
          onClick={scrollToTop}
        >
          <BiArrowToTop />
        </button>
      </main>
    </>
  );
};

export default Portfolio;
