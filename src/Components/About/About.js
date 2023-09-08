
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";

import "../About/about.css";
import Mineimg from "../../Images/portfolio1 (1).png";

const About = () => {
  let anime = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      anime,
      { css: { opacity: 0, transform: "translateY(4em)" } },
      {
        css: {
          transform: "translateY(0em)",
          opacity: 1,
        },
        duration: 1.5,

        scrollTrigger: {
          trigger: anime,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section id="about" ref={(el) => (anime = el)}>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="about-box">
        <div className="about-box-img">
        <Image
            src={Mineimg}
            alt="my-image"
          />
        </div>
        <div className="about-box-text">
          <h6 style={{ fontSize: "1.5rem" }}>Hey there!</h6>
          <p>
            I&#39;m Sachin kumar, an enthusiastic frontend web developer and current
            undergraduate. As a fresher, I&#39;m excited about crafting beautiful
            and user-friendly websites that bring ideas to life. What truly
            fuels my passion is the ability to blend creativity with technology,
            creating seamless online experiences. Let&#39;s collaborate and make the
            web an engaging and visually appealing space for everyone!
          </p>

          <a href="#footer" className="btn">
            Let&#39;s talk
          </a>

          <div className="about-box-text-container">
            <div>
              <h3>
                <i className="fa-solid fa-award"></i>{" "}
              </h3>

              <h4>Experience</h4>
              <p>Fresher</p>
            </div>
            <div>
              <h3>
                <i className="fa-solid fa-graduation-cap"></i>
              </h3>

              <h4>Education</h4>
              <p>Under-graduate</p>
            </div>
            <div>
              <h3>
                <i className="fa-solid fa-file-circle-check"></i>{" "}
              </h3>
              <h4>Projects</h4>
              <p>15+ completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
