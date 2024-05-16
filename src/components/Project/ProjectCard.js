import React from "react";
import { AiFillGithub } from "react-icons/ai";
import LinkButton from "../LinkButton";

function ProjectCard({image, imageAlt, title, githubHref=null, Content}) {
  return(
    <article className="p-6 flex flex-col border-2 rounded border-dark-accent md:flex-row">
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
            Icon={<AiFillGithub className="text-2xl"/>}
            text={"Source"}
            href={githubHref}
          />
        </nav>
      </div>
    </article>
  );
}

export default ProjectCard;