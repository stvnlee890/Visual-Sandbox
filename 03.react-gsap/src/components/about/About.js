import React from "react";
import "./about.css";
import { animateAbout } from "./about-animation";
import { useRef, useLayoutEffect } from "react"

const About = () => {

  const aboutImg = useRef(null)
  const border = useRef(null)
  useLayoutEffect(() => {
    animateAbout(border)
  }, [])
  return (
    <div className="about-container">
      <div className="about-1">
        <div ref={aboutImg} className="about-img"></div>
      </div>
        <div ref={border} className="about-border"></div>
      <div className="about-2">
        <div className="about-desc">
          sdfasd asdfadf adsfa dfasdfaffeferfa awefafaf awefaefawef awefasdf
          asdfawef aefer faerfa rfaerfaerfa erfarfarfaerf sdfasd asdfadf adsfa
          dfasdfaffeferfa awefafaf awefaefawef awefasdf asdfawef aefer faerfa
          rfaerfaerfa erfarfarfaerf sdfasd asdfadf adsfa dfasdfaffeferfa
          awefafaf awefaefawef awefasdf asdfawef aefer faerfa rfaerfaerfa
          erfarfarfaerf sdfasd asdfadf adsfa dfasdfaffeferfa awefafaf
          awefaefawef awefasdf asdfawef aefer faerfa rfaerfaerfa erfarfarfaerf
          sdfasd asdfadf adsfa dfasdfaffeferfa awefafaf awefaefawef awefasdf
          asdfawef aefer faerfa rfaerfaerfa erfarfarfaerf sdfasd asdfadf adsfa
          dfasdfaffeferfa awefafaf awefaefawef awefasdf asdfawef aefer faerfa
          rfaerfaerfa erfarfarfaerf
        </div>
      </div>
    </div>
  );
};

export default About;
