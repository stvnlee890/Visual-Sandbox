import React from "react";
import "./main-background.css";

import About from "../about/About";
import Works from "../works/Works";

import { useRef, useLayoutEffect } from "react";
import { animateFrontPage } from "../../animations/animation";

const MainBackground = ({ link }) => {
    console.log(link)
  const bgContainer = useRef(null);

  useLayoutEffect(() => {
    animateFrontPage(bgContainer);
  }, []);
  return (
    <div ref={bgContainer} className="bg-container">
        {link === "About" &&  <About />}
        {link === "Works" &&  <Works/>}
    </div>
  );
};

export default MainBackground;
