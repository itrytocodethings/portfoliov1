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

const Portfolio = () => {

  let techIcons = [
    {name: 'HTML', color: '#e34c26', icon: <SiHtml5 style={{ color: "#e34c26" }} />},
    {name: 'CSS', color: '#2965f1' , icon: <SiCss3 style={{ color: "#2965f1" }} />},
    {name: 'Javascript', color: '#f0db4f', icon: <SiJavascript style={{ color: "#F0DB4F" }} />},
    {name: 'React', color: '#61dbfb', icon: <SiReact style={{ color: "#61DBFB" }} />},
    {name: 'Python', color: '#ffe873', icon: <SiPython style={{ color: "#FFE873" }} />},
    {name: 'Flask', color: 'inherit', icon: <SiFlask/>},
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
              <h2 className="text-center mb-5"><span className="wave">👋</span> Hello World</h2>
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
                        {techIcons.map((tech) => (
                          <li className="techstack-icon"><div className="tech" style={{color: tech.color}}>{tech.name}</div>{tech.icon}</li>
                        ))}
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
          <div className="projects-content py-5">
              <h2 className="text-center mb-5"><span className="wave">✨</span>Projects</h2>
              <div className="row">
              </div>
            </div>
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
