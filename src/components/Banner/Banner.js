import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowDown } from "react-icons/ai";
import Resume from "../../assets/andrew-wang-cv.pdf";
import IconButton from "../IconButton.js";
import Slider from "../Slider.js";
import { motion } from "framer-motion";
import { CgFileDocument } from "react-icons/cg";

function Banner()
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
        <h1 className="block font-bold text-[36px] md:text-5xl shrink grow-0">
          ANDREW WANG
        </h1>
        <h2 className="text-2xl md:text-3xl md:mt-4 text-dark-accent">Software Developer</h2>
        <nav className="text-5xl md:text-6xl mt-6 flex content-center justify-center gap-x-2">
          <IconButton 
            Icon={<AiFillGithub/>}
            href={"https://github.com/AncientMeme"}
            aria={"GitHub link to Andrew Wang's Profile"}
          />
          <IconButton 
            Icon={<AiFillLinkedin/>}
            href={"https://www.linkedin.com/in/andrew-wang-dev/"}
            aria={"LinkedIn link to Andrew Wang's Profile"}
          />
          <IconButton 
            Icon={<CgFileDocument/>}
            href={Resume}
            aria={"Andrew Wang's Resume"}
          />
        </nav>
      </div>
      <motion.div
          className="text-3xl text-dark-accent flex justify-center"
          initial={{
            y: -150,
          }}
          animate={{
            y: [-175, -150, -175],
            transition: {
              duration: 3.2,
              repeat: Infinity,
              ease: "easeOut",
            }
          }}
        >
          <AiOutlineArrowDown />
      </motion.div>
      <div className="self-end">
        <Slider
          text={"I BUILD STUFF"}
          repeatCount={3}
        />
      </div>
    </section>
  );
}

export default Banner;