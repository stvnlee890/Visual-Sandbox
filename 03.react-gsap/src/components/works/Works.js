import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import "./works.css";

import { animateWorks, animateText } from "./works-animation";
const Works = () => {
  const borders = useRef(null);

  // can target children nodes to iterative over each node and apply animation
  useLayoutEffect(() => {
    const refArr = [...borders.current.children];
    // const time = setTimeout(() => {
    //   console.log("IN TIMEOUT")
      refArr.forEach((ele) => {
        if (ele.className.includes("works-border")) animateWorks(ele);
        else if (ele.className.includes("works-text")) animateText(ele)
      })
    // }, 3000)
    // let ctx = gsap.context(() => {
    //   });
    
    /*
    CLEANUP FUNCTION PREVENTS THE SET TIMEOUT FUNCTION FROM RUNNING AFTER COMPONENT UNMOUNTS
    IN OTHER WORDS, ONCE WE SWITCH PAGES BEFORE THE SET TIMEOUT COMPLETES, IT'LL CLEAR THE TIMEOUT
    AND NOT LET IT RUN IN THE BACKGROUND
     */
    return () => {
      console.log("CLEAN UP")
      // clearTimeout(time)
    }
  }, []);

  return (
    <div ref={borders} className="works-container">
      <div className="works-text works-1">
        <h1>Works 1</h1>
      </div>
      <div className="works-links"></div>
      <div className="works-text works-2">
        <h1>Works</h1>
      </div>
      <div className="works-links"></div>

      <div className="works-border one"></div>
      <div className="works-border two"></div>
      <div className="works-border three"></div>
      <div className="works-border four"></div>

      <div className="works-border side"></div>
    </div>
  );
};

export default Works;
