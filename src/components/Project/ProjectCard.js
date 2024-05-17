import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import LinkButton from "../LinkButton";

function ProjectCard({image, imageAlt, title, githubHref=null, Content}) {
  // Animation properties
  const offscreen = {
    x: 200,
    y: -150,
    rotate: -45,
    opacity: 0,
  };
  const onscreen = {
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    }
  };

  return(
    <motion.div 
      initial={offscreen}
      whileInView={onscreen}
      viewport={{ once: true, amount: 0.4 }}
    >
      <section className="p-6 flex flex-col md:flex-row border-2 rounded border-dark-accent 
        ease-out duration-200 hover:scale-105"
      >
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
              id="1"
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