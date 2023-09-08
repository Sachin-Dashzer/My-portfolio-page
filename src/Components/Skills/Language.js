'use client'

import React,{useState , useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Language = (promps) => {
    return (
      <div className="languages-box">
        <h3>{promps.data}</h3>

        <h4 style={{ color: "var(--text)" }}>{promps.level}%</h4>
      </div>
  );
};

export default Language;
