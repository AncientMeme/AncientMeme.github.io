import React from "react";
import Banner from "./Banner/Banner.js";
import Projects from "./Project/Projects.js";
import About from "./About/About.js";

function Home()
{
  return (
    <>
      <Banner />
      <About />
      <Projects />
    </>
  );
} 

export default Home;