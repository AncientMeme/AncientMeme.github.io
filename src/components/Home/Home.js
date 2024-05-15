import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import IconButton from "./IconButton";
import Slider from "./Slider";

function Home()
{
  return (
    <section className="h-screen bg-dark-primary flex flex-col justify-center text-center">
      <div className="self-end">
        <Slider
          text={"I BUILD STUFF"}
          repeatCount={3}
          isReverse
        />
      </div>

      <div id="main-area" className="flex flex-col justify-center flex-grow">
        <h1 className="block font-bold text-[40px] shrink grow-0">
          ANDREW WANG
        </h1>
        <span className="text-xl text-dark-accent">Software Developer</span>
        <nav className="mt-6 flex content-center justify-center">
          <IconButton 
            Icon={<AiFillGithub/>}
            href={"https://github.com/AncientMeme"}
          />
          <IconButton 
            Icon={<AiFillLinkedin/>}
            href={"https://www.linkedin.com/in/andrew-wang-dev/"}
          />
        </nav>
      </div>
      
      <div className="self-end">
        <Slider
          text={"I BUILD STUFF"}
          repeatCount={3}
        />
      </div>
    </section>
  );
} 

export default Home;