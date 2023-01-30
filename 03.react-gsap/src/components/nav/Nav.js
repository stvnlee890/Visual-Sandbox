import React from "react";
import { useRef, useLayoutEffect } from "react";
import "./nav.css";

import { animateNavWrapper } from "../../animations/nav-animations";

const Nav = () => {
    const nav = useRef(null)
    const lists = useRef(null)
    useLayoutEffect(() => {
        animateNavWrapper(nav, lists)
    }, [])
  return (
    <div className="nav-container">
      <ul ref={nav} className="nav-wrapper">
        <li ref={lists} className="nav-lists">
          <span className="number-list">01.</span>
          <span className="word-list">About</span>
        </li>
        <li className="nav-lists">
          <span className="number-list">02.</span>
          <span className="word-list">Works</span>
        </li>
        <li className="nav-lists">
          <span className="number-list">03.</span>
          <span className="word-list">Resume</span>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
