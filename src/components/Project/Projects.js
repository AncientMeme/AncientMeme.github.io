import React from "react";
import ProjectCard from "./ProjectCard.js";
import ProjectList from "./ProjectList.js";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader.js";

function Projects() {
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
      <SectionHeader
        text="Project"
      />
      <section className="flex flex-col gap-y-8 justify-center">
        {projectCards}
      </section>
    </motion.article>
  );
}

export default Projects;