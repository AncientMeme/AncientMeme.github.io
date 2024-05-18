import React from "react";
import ProjectCard from "./ProjectCard.js";
import ProjectList from "./ProjectList.js";
import { motion } from "framer-motion";

function Projects()
{
  // Animation Property
  const header = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        bounch: 0.1,
        duration: 0.5,
      }
    }
  }

  // build the project cards
  const projectCards = [];
  for (let i = 0; i < ProjectList.length; ++i) {
    let project = ProjectList[i];
    projectCards.push(
      <ProjectCard 
        key={`project-${i}`} 
        image={project.image}
        imageAlt={project.alt}
        title={project.title}
        githubHref={project.githubHref}
        Content={project.content}  
      />
    );
  }

  return(
    <motion.article className=""
      initial="hidden"
      whileInView="show"
      viewport={{once: true, amount: 0.2}}
    >
      <motion.h1 
        className="my-8 text-[40px] font-bold"
        variants={header}
      >
        Projects
      </motion.h1>
      <section className="flex flex-col gap-y-8 justify-center">
        {projectCards}
      </section>
    </motion.article>
  );
}

export default Projects;