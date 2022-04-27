import React, {useState} from "react";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import me from "../../assets/img/omgitsme.jpg";
import { VscGithubInverted } from "react-icons/vsc";
import {BsLinkedin} from "react-icons/bs"
import { FaBars } from "react-icons/fa";
import {AiOutlineCloseCircle} from "react-icons/ai";
export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <nav class="main d-flex justify-content-between flex-wrap">
        <div className="nav left">
          <a className="nav-link logo" aria-current="page" href="#">
            <span className="bracket">&#60;</span><span className="initials">WB</span><span className="bracket">&#62;</span>
          </a>
        </div>
        <div className="toggle-link d-none">
          <button className="btn nav-link toggle" onClick={() => {
            setNavOpen(true);
          }}>
            <FaBars />
          </button>
        </div>
        <div className={`nav middle ${navOpen ? 'open' : ''}`}>
          <a class="nav-link active" aria-current="page" href="#">
            Active
          </a>
          <a class="nav-link" href="#">
            Link
          </a>
          <a class="nav-link" href="#">
            Link
          </a>
          <a class="nav-link disabled">Disabled</a>
          <button className="btn close d-none" onClick={() => {
            setNavOpen(false);
          }}><AiOutlineCloseCircle/></button>
        </div>
        <div className="nav right">
          <a class="nav-link" aria-current="page" href="#">
            <VscGithubInverted />
          </a>
          <a class="nav-link" aria-current="page" href="#">
            <BsLinkedin />
          </a>
        </div>
      </nav>
    </>
  );
};
