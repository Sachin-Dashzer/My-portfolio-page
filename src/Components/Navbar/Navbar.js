'use client';

import React , { useState , useEffect , useRef} from "react";
import "../Navbar/navbar.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


const Navbar = () => {

  let naveffect = useRef(null);

  useEffect(()=>{

      gsap.fromTo(naveffect , { css : {transform : "translateX(-10%)" , opacity : 0} } , {css : {transform : "translateX(0)" , opacity : 1}, duration : 1 , delay : 0.5 , ease : "power3.ease"})

  } , [])


  const [currentactive, setcurrentactive] = useState("#")
  return (
    <div className="navbar">


      <div className="navbar-box" ref={(el) => (naveffect = el)}>

        <div className="navbar-logo">
            <h1 style={{fontSize : '2.5em' , marginBottom : '2em'}}> <a href="#" style={{color : "var(--accent)"}}><i className="fa-solid fa-robot"></i></a></h1>  
        </div>
        
        <div className="navbar-pages">
            <a href="#" onClick={() => setcurrentactive("#")} className={currentactive === "#" ? "active" : ""}><i className="fa-solid fa-house-chimney"></i></a>
            <a href="#about" onClick={() => setcurrentactive("#about")} className={currentactive === "#about" ? "active" : ""}><i className="fa-solid fa-user-pen"></i></a>
            <a href="#skills" onClick={() => setcurrentactive("#skills")} className={currentactive === "#skills" ? "active" : ""}><i className="fa-solid fa-screwdriver-wrench"></i></a>
            <a href="#project" onClick={() => setcurrentactive("#projects")} className={currentactive === "#projects" ? "active" : ""}><i className="fa-solid fa-file-circle-plus"></i></a>
            <a href="#footer" onClick={() => setcurrentactive("#footer")} className={currentactive === "#footer" ? "active" : ""}><i className="fa-regular fa-address-book"></i></a>
        </div>


        <div className="navbar-social-links lastline">
            <a href="https://www.linkedin.com/in/sachin-kumar-48a21322a/" target="blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Sachin-Dashzer" target="blank"><i className="fa-brands fa-github"></i></a>
            <a href="https://twitter.com/Sachin_Dashzer" target="blank" ><i className="fa-brands fa-square-x-twitter"></i></a>
        </div>

      </div>


    </div>
  );
};

export default Navbar;
