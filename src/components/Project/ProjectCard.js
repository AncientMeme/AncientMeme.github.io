import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import LinkButton from "../LinkButton";
import { useMediaQuery } from "react-responsive";

function ProjectCard({image, imageAlt, title, githubHref=null, Content}) {
  // Animation properties
  const isMobile = useMediaQuery({maxWidth:800});
  const offscreen = isMobile ? {
    x: 0,
    y: 120,
    rotate: -25,
    opacity: 0,
  } : {
    x: 0,
    y: 60,
    rotate: 0,
    opacity: 0,
  };

  const onscreen = {
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    }
  };

  return(
    <motion.div 
      initial={offscreen}
      whileInView={onscreen}
      viewport={{ once: true, amount: (isMobile ? 0.2 : 0.5) }}
    >
      <section className="p-6 flex flex-col md:flex-row border-2 rounded border-dark-accent">
        <div className="flex items-center md:w-1/2">
          <img
            className="mb-2 md:mb-0 md:p-8 md:w-full"
            src={image}
            alt={imageAlt}
          />
        </div>
        <div className="flex flex-col md:px-8 md:w-1/2">
          <div className="md:grow">
            <h2 className="mb-2 text-3xl text-dark-accent text-center md:text-left">{title}</h2>
            {Content}
          </div>
          <nav className="mt-4 flex justify-around">
            <LinkButton
              key="button-0"
              Icon={<AiFillGithub className="text-2xl"/>}
              text={"Source"}
              href={githubHref}
            />
          </nav>
        </div>
      </section>
    </motion.div>
  );
}

export default ProjectCard;