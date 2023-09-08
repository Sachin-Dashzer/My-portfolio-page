"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";
import Image from "next/image";

import Header from "../Components/Header/Header.js";
import Navbar from "../Components/Navbar/Navbar.js";


const About = lazy(() => import("../Components/About/About.js"));

const Skills = lazy(() => import("../Components/Skills/Skills.js"));

const Projects = lazy(() => import("../Components/Projects/Project.js"));

const Footer = lazy(() => import("../Components/Footer/Footer.js"))





import Duck from "../Images/duck.gif";

export default function Home() {
  const [loader, setloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 3000);
  }, [setloader]);

  return (
    <>
      {loader ? (
        <div className="loaderpage">
          <Image
            src={Duck}
            alt="loading image"
            priority = {true}
          />
          <h4>please wait ...</h4>
          <h2> Let&#39;s start our journey together </h2>
        </div>
      ) : (
      <main>
        <Navbar />

        <Header />

        <Suspense>


      <About />

      <Skills />
      <Projects />
      <Footer />
        </Suspense>
      </main>
      )}
    </>
  );
}
