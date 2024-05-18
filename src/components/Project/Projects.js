import React from "react";
import ProjectCard from "./ProjectCard.js";
import ProjectList from "./ProjectList.js";

function Projects()
{
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
    <article className="px-4 md:mt-12 md:px-28 overflow-hidden">
      <h1 className="my-8 text-[40px] md:text-5xl font-bold">Projects</h1>
      <section className="flex flex-col gap-y-8 justify-center">
        {projectCards}
      </section>
    </article>
  );
}

export default Projects;