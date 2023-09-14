"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "../Projects/project.css";
import Giftshop from "../../Images/project1copy.png";
import Woodcraft from "../../Images/project2copy.png";

import Slider from "../Projects/Slider.js";

const Project = () => {
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

  const sliderarr = [
    <div className="project-webpage" key={1}>
      <div className="project-webpage-data">
        <h3>Woodcraft website</h3>
        <p>
          &#34;Explore our woodcraft website for expertly crafted wooden
          furniture, DIY project ideas, and essential woodworking tools.
          Discover step-by-step tutorials, high-quality wood products, and a
          vibrant community of fellow wood enthusiasts. Start your woodworking
          journey with us today!&#34;
        </p>
        <a href="https://sachin-dashzer.github.io/woodcraft/" target="blank">
          Visit site
        </a>{" "}
        <i
          className="fa-solid fa-arrow-right-long"
          style={{
            fontSize: "1em",
            marginLeft: "0.3em",
          }}
        ></i>
      </div>
      <div className="project-webpage-img">
        <a href="https://sachin-dashzer.github.io/woodcraft/">
          <Image src={Woodcraft} alt="woodcraft website" />
        </a>
      </div>
    </div>,
    <div className="project-webpage" key={2}>
      <div className="project-webpage-data">
        <h3>Giftshop website</h3>
        <p>
          &#34;Explore our charming online gift shop! Discover a delightful
          array of unique presents for every occasion. From handcrafted
          treasures to personalized keepsakes, find the perfect gift to bring
          joy to your loved ones. Shop now and share the magic of giving.&#34;
        </p>
        <a
          href="https://sachin-dashzer.github.io/Giftshop_website/"
          target="blank"
        >
          Visit site
        </a>{" "}
        <i
          className="fa-solid fa-arrow-right-long"
          style={{
            fontSize: "1em",
            marginLeft: "0.3em",
          }}
        ></i>
      </div>
      <div className="project-webpage-img">
        <a href="https://sachin-dashzer.github.io/Giftshop_website/">
          <Image src={Giftshop} alt="Giftshop website" />
        </a>
      </div>
    </div>,
    // <div className="project-webpage">
    //   <div className="project-webpage-data">
    //     <h3>C website</h3>
    //     <p>
    //       Explore our exquisite online woodcraft store, where artistry meets
    //       nature. Discover handcrafted wonders, from intricate furniture to
    //       delicate carvings. Elevate your space with timeless elegance. Welcome
    //       to a world where craftsmanship and creativity merge seamlessly.
    //     </p>
    //     <a href="#!" target="blank">
    //       Visit site
    //     </a>{" "}
    //     <BiRightArrowAlt
    //       style={{
    //         fontSize: "1.2em",
    //         color: "var(--accent)",
    //         transform: "translateY(0.2em)",
    //       }}
    //     />
    //   </div>
    //   <div className="project-webpage-img">
    //     <img src="https://source.unsplash.com/random" alt="" />
    //   </div>
    // </div>,
  ];

  return (
    <section id="project" ref={(el) => (anime = el)}>
      <h5>my basic projects</h5>
      <h2>Portfolio</h2>

      <Slider content={sliderarr} />
    </section>
  );
};

export default Project;
