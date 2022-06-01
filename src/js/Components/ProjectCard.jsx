//react stuff
import React, { useState } from "react";

//images/css
import "../../assets/css/project-card.css";
import projImg from "../../assets/img/chefup.png";

//icons
import { VscGithubAlt } from "react-icons/vsc";
import { BiWorld } from "react-icons/bi";
import { SiGithub } from "react-icons/si";

//components
import TechBadge from "./TechBadge";

const ProjectCard = ({ project }) => {
  console.log(project);
  const [showDetails, setShowDetails] = useState(false);
  const showProjDetails = () => {
    showDetails ? setShowDetails(false) : setShowDetails(true);
  };
  return (
    <>
      <div className="col-10 col-md-6">
        <div class="card mb-3 project-card" onClick={showProjDetails}>
          <div className="project-card-header d-flex">
            <div className="d-flex align-self-center me-1">
              <div className="circles"></div>
              <div className="circles"></div>
              <div className="circles"></div>
            </div>
            <div className="tab">
              <div className="d-flex align-items-center">
                <BiWorld className="me-1" />
                <div className="proj-title">{project.name}</div>
              </div>
            </div>
          </div>
          <img  className="proj-img img-fluid" src={project.img} alt="..." />
          <div class={`card-body ${showDetails ? "show" : ""}`}>
            <div>
              <div className="tech-badges d-flex justify-content-center">
                <TechBadge techName="Javascript" hexColor="#f0db4f" />
                <TechBadge techName="React" hexColor="#61dbfb" />
                <TechBadge techName="Flask" hexColor="#ededee" />
              </div>
              <p>{project.desc}</p>
              <div className="card-foot text-center mb-1">
                <a href={project.url} target="_blank">
                  <SiGithub class='gh-icon'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
