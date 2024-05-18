import React from "react";
import Banner from "./Banner/Banner.js";
import Projects from "./Project/Projects.js";
import About from "./About/About.js";
import Footer from "./Footer.js";

function Home()
{
  return (
    <>
      <Banner />
      <div className="px-4 md:mt-12 md:px-28">
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
} 

export default Home;