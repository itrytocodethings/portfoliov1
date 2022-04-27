// react utils
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


// react-icons
import { VscThreeBars } from "react-icons/vsc";
import { VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = (target) => {
    console.log(target)
    if (target == 'A' || target == 'BUTTON' || target == 'svg' || target == 'path') setNavOpen(false);
  }
  return (
    <>
      <nav id='main-nav' class="main d-flex justify-content-between flex-wrap">
        <div className="nav left">
          <a className="nav-link logo" aria-current="page" href="#">
            <span className="bracket">&#60;</span>
            <span className="initials">WB</span>
            <span className="bracket">&#62;</span>
          </a>
        </div>
        <div className="toggle-link d-none">
          <button
            className="btn nav-link toggle"
            onClick={() => {
              setNavOpen(true);
            }}
          >
            <FaBars />
          </button>
        </div>
        <div className={`nav middle ${navOpen ? "open" : "close"}`} onClick={(e) => {
          closeNav(e.target.nodeName);
        }}>
          <HashLink smooth to="#about" className="nav-link">About</HashLink>
          <HashLink smooth to="#about" className="nav-link">Projects</HashLink>
          <HashLink smooth to="#about" className="nav-link">Contact</HashLink>
          <button
            className="btn close d-none"
          >
            <AiOutlineCloseCircle />
          </button>
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
