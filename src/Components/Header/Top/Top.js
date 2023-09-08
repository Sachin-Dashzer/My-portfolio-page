
'use client';

import "../Top/top.css";

import React ,{ useState , useEffect } from "react";
import Gsap from "gsap";


const Top = () => {
  const [pages, setpages] = useState(false);

  useEffect(() => {

    const title = document.querySelector('.title')

    Gsap.fromTo(title,{css : { transform : 'translateY(-2em)',  opacity : 0 } } , {css : { transform : 'translateY(0)' , opacity : 1 } , duration : 1, delay : 0.5})
   
  } , [])

  useEffect(() => {
    const menu = document.querySelector(".menu-links");
    const menulinks = document.querySelectorAll(".menu-links a");  
    if(pages){
      Gsap.to(menu, {css : { transform : 'translateY(0)' ,height : "23em" , opacity : 1}, duration : 2} )
    }
    else{
      Gsap.to(menu, {css : { transform : 'translateY(-23em)' , height : "0%" ,opacity : 0}, duration : 2} )
    } 
  }, [pages])
  


  return (
    <>
      <div id="top">
        <h3 className="title">Dashzer portfolio</h3>

        <div className="menu">

        <i className="fa-solid fa-bars" id="menu-icon"  onClick={function () {
              setpages(true);
            }}></i>
          
        </div>
      </div>


      <div className="menu-links">
        <a href="#" onClick={() => setpages(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setpages(false)}>
          About
        </a>
        <a href="#skills" onClick={() => setpages(false)}>
          Qualities
        </a>
        <a href="#project" onClick={() => setpages(false)}>
          Projects
        </a>
        <a href="#footer" onClick={() => setpages(false)}>
          Contact me
        </a>


        <i className="fa-solid fa-xmark cancel" onClick={() => setpages(false)}></i>

        
      </div>
    </>
  );
};

export default Top;
