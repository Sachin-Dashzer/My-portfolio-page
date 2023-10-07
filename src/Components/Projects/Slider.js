"use client"

import React, { useEffect , useState , useRef } from "react";
import { gsap } from "gsap";

const Slider = ({ content }) => {
  const [currentindex, setCurrentIndex] = useState(0);

  const prevdev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const nextdev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };




  useEffect(() => {
    let slides = document.querySelector(".project-box-container");

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);

      gsap.fromTo(slides, {css : {opacity : 0 , transform : 'translateX(2em)'}} , {css : {opacity : 1 , transform : "translateX(0em)" } ,duration : 1})

    }, 6000);

    return () => clearInterval(interval);
  }, [content.length]);

  
 
  return (
    <div className="project-box">
      <div className="project-box-container">{content[currentindex]};</div>
      <i className="fa-solid fa-angle-left" id="prev" onClick={prevdev}></i>
      <i className="fa-solid fa-angle-right" id="next" onClick={nextdev}></i>
    </div>
  );
};

export default Slider;
