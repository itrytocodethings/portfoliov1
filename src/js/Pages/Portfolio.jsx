// react-utils
import React, { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import me from "../../assets/img/me.jpg";

// components
import { Navbar } from "../Components/Navbar";
import ProjectCard from "../Components/ProjectCard";
import ContactForm from "../Components/ContactForm";

// react-icons
import { BiArrowToTop } from "react-icons/bi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiFlask,
  SiDocker,
  SiAmazonaws,
  SiKubernetes,
  SiCsharp,
} from "react-icons/si";

// project-images
import ChefUp from "../../assets/img/chefup.png";
import Nana from "../../assets/img/nana.png";

const Portfolio = () => {
  let techIcons = [
    {
      name: "HTML",
      color: "#e34c26",
      icon: <SiHtml5 style={{ color: "#e34c26" }} />,
    },
    {
      name: "CSS",
      color: "#2965f1",
      icon: <SiCss3 style={{ color: "#2965f1" }} />,
    },
    {
      name: "Javascript",
      color: "#f0db4f",
      icon: <SiJavascript style={{ color: "#F0DB4F" }} />,
    },
    {
      name: "React",
      color: "#61dbfb",
      icon: <SiReact style={{ color: "#61DBFB" }} />,
    },
    {
      name: "Python",
      color: "#ffe873",
      icon: <SiPython style={{ color: "#FFE873" }} />,
    },
    { name: "Flask", color: "inherit", icon: <SiFlask /> },
    {
      name: "Docker",
      color: "#0db7ed",
      icon: <SiDocker style={{ color: "#0db7ed" }} />,
    },
    {
      name: "AWS",
      color: "#ff9900",
      icon: <SiAmazonaws style={{ color: "#ff9900" }} />,
    },
    {
      name: "C#",
      color: "#684D95",
      icon: <SiCsharp style={{ color: "#684D95" }} />,
    },
  ];

  const [showPageUp, setShowPageUp] = useState(false);
  window.onscroll = () => {
    window.scrollY > 50 ? setShowPageUp(true) : setShowPageUp(false);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  let projects = [
    {
      name: "ChefUp",
      desc: "ChefUp is a full stack web application that I designed/developed with two of my teammates for our cohort’s final project. Check out more info on github!",
      img: ChefUp,
      url: "https://github.com/itrytocodethings/ChefUp",
    },
    {
      name: "Not Another Note App",
      desc: "Not another Note App is a simple note editor inspired by SimpleNote. Users can create notes, format them with markdown, and preview their formatted notes.",
      img: Nana,
      url: "https://github.com/itrytocodethings/not-another-note-app",
    },
  ];
  return (
    <>
      <Navbar />
      <main>
        <section className="about">
          <div id="about" className="container portfolio">
            <div className="about-content py-5">
              <h2 className="text-center mb-5">
                <span className="wave">👋</span> Hello!
              </h2>
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
                  <div className="right px-3">
                    <p className="mb-5">
                      I'm Wayne, a passionate Full Stack Developer with a love
                      for technology. 💻🚀 Currently a junior developer, working
                      with JavaScript, React, and Node. Alongside my technical
                      skills, I love problem solving and continuously seek
                      to learn cutting-edge technologies. Web application
                      development is my true passion, and I have valuable
                      experience working on diverse projects. Some tech I've worked with:
                    </p>
                    <div className="text-center">
                      <ul>
                        {techIcons.map((tech) => (
                          <li className="techstack-icon">
                            <div className="tech" style={{ color: tech.color }}>
                              {tech.name}
                            </div>
                            {tech.icon}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="projects">
          <div id="projects" className="container portfolio">
            <div className="projects-content py-5">
              <h2 className="text-center mb-5">
                <span className="pulse">✨</span>Projects
              </h2>
              <div className="row gx-3 gy-3 align-center justify-content-center">
                {projects.map((proj) => {
                  return <ProjectCard project={proj} />;
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="contact">
          <ContactForm />
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
