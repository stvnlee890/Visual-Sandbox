import React from "react";
import { useRef, useLayoutEffect } from "react";
import "./nav.css";

import { animateNavWrapper } from "../../animations/nav-animations";

const Nav = ({ link, setLink }) => {
    const nav = useRef(null)
    const navContainer = useRef(null)
    const lists = useRef(null)
    useLayoutEffect(() => {
        animateNavWrapper(nav, navContainer)
    }, [])

    const handleClick = (e) => {
      setLink(e.target.innerHTML)
    }
  
    
  return (
    <div ref={navContainer} className="nav-container">
      <ul ref={nav} className="nav-wrapper">
        <li onClick={handleClick} ref={lists} id="about" className="nav-lists">
          <span className="number-list">01.</span>
          <span className="word-list">About</span>
        </li>
        <li onClick={handleClick} id="works" className="nav-lists">
          <span className="number-list">02.</span>
          <span className="word-list">Works</span>
        </li>
        <li onClick={handleClick} id="resume" className="nav-lists">
          <span className="number-list">03.</span>
          <span className="word-list">Resume</span>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
