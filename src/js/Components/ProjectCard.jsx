import React from "react";
import '../../assets/css/project-card.css'
import {VscGithubAlt} from "react-icons/vsc"
import projImg from "../../assets/img/chefup.png"
const ProjectCard = () => {
  return (
    <>
      <div className="col-8 col-md-4">
        <div class="card project-card">
          <img className="project-img" src={projImg} alt="project image" />
          <div class="card-body">
            <p class="card-text">
             <span className="gh-icon"><VscGithubAlt /></span> ChefUp
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
