import React,{useState} from "react";
import "../../assets/css/project-card.css";
import { VscGithubAlt } from "react-icons/vsc";
import { BiWorld } from "react-icons/bi";
import projImg from "../../assets/img/chefup.png";
const ProjectCard = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const showProjDetails = () => {
    showDetails ? setShowDetails(false) : setShowDetails(true);
  }
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
                  <BiWorld className="me-1"/>
                <div className="proj-title">Chefup</div>
              </div>
            </div>
          </div>
          <img src={projImg} alt="..." />
          <div class={`card-body ${showDetails ? 'show' : ''}`}>
            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quas labore libero pariatur corrupti accusantium distinctio officiis aspernatur eos assumenda.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

{
  /* <>
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
</> */
}
