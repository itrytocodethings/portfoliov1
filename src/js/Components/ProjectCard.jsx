//react stuff
import React, { useState } from "react";

//images/css
import "../../assets/css/project-card.css";
import projImg from "../../assets/img/chefup.png";

//icons
import { VscGithubAlt } from "react-icons/vsc";
import { BiWorld } from "react-icons/bi";

//components
import TechBadge from "./TechBadge";

const ProjectCard = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const showProjDetails = () => {
    showDetails ? setShowDetails(false) : setShowDetails(true);
  };
  return (
    <>
      <div className="col-10 col-md-4">
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
                <div className="proj-title">Chefup</div>
              </div>
            </div>
          </div>
          <img src={projImg} alt="..." />
          <div class={`card-body ${showDetails ? "show" : ""}`}>
            <div>
              <div className="tech-badges d-flex justify-content-center">
                <TechBadge techName="Javascript" hexColor="#f0db4f"/>
                <TechBadge techName="React" hexColor="#61dbfb"/>
                <TechBadge techName="Flask" hexColor="#ededee"/>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quas
              labore libero pariatur corrupti accusantium distinctio officiis
              aspernatur eos assumenda.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;