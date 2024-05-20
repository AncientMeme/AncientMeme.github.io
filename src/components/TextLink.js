import React from "react";

function TextLink({text, href=""})
{
  return(
    <a 
      className="group relative inline"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <div className="inline text-dark-accent group-hover:text-dark-primary group-hover:no-underline relative
        transition-colors duration-200 ease-out z-10 underline underline-offset-4">
        {text}
      </div>
      <div 
        className="w-0 h-full group-hover:w-full bg-dark-accent absolute top-0 left-0 inline z-0
        transition-all duration-200 ease-out"></div>
    </a>
  );
}

export default TextLink;