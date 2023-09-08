"use client"


import React, { useRef, useEffect, lazy, Suspense } from "react";

import emailjs from "emailjs-com"


import "../Footer/footer.css";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { setLazyProp } from "next/dist/server/api-utils";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const form = useRef();
  let anime = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pukiwnb",
        "template_16klgk6",
        form.current,
        "OWJ7-HpDf9r_oqL5F"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
    <>
      <section id="footer" ref={(el) => (anime = el)}>
        <h5>let&#39;s talk about me</h5>
        <h2>Contact me</h2>

        <div className="contact-box">
            <form ref={form} onSubmit={sendEmail} className="contact-box-form">
              <input type="text" name="name" placeholder="your name" required />
              <input
                type="number"
                name="contactno"
                placeholder="Your contact number"
                required
              />
              <input
                type="email"
                name="emailaddress"
                placeholder="your email address"
                required
              />
              <textarea
                name="massage"
                rows={"6"}
                placeholder="Write something here..."
                required
              />

              <div>
                <input type="submit" value="submit" className="btn" />

              </div>
            </form>


          <div className="contact-box-map">

            <h2>Get in touch</h2>
            <p>
            Are you looking to hire a talented frontend web developer? <br /> Contact me today to discuss how I can bring your digital projects to life with creativity and precision.
            </p>

            <h5>
              <i className="fa-brands fa-whatsapp"></i>{" "}
              <span> +91 8287037611 </span>
              <br />
              <i className="fa-solid fa-envelope-circle-check"></i>{" "}
              <span>sachin8287037611@gmail.com</span>
              <br />
              <i className="fa-solid fa-location-dot"></i>{" "}
              <span>F-69 Inder enclave ph-2 , kirari , delhi-110086</span>
              
            </h5>
          </div>
        </div>

        <div className="footer-scroller">
          <a href="#">scroll up</a>
        </div>
      </section>

      <section id="Ending">
        <h3>
          &#34;Hard work is like a bad joke you might not always get the punchline
          right away, <br /> but when you finally do, it&#39;s a dream come true!&#34;
        </h3>
        <h4>
          All right reserved : <span>Sachin_Dashzer</span>
        </h4>
      </section>
    </>
  );
};

export default Footer;
