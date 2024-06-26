import React from "react";
import Banner from "./Banner/Banner.js";
import Projects from "./Project/Projects.js";
import About from "./About/About.js";
import Footer from "./Footer.js";
import Experience from "./Experience/Experience.js";

function Home()
{
  return (
    <>
      <Banner />
      <div className="px-6 md:mt-12 md:px-24 xl:px-44">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
} 

export default Home;