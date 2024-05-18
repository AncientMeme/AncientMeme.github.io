import React from "react";

function LinkButton({Icon, text, href}) {
  return(
    <a
      className="p-1 rounded text-lg bg-dark-accent text-dark-primary flex items-center duration-200 
        hover:bg-dark-highlight md:p-3 md:text-xl"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {Icon}
      <p className="text-bold px-2">{text}</p>
    </a>
  );
}

export default LinkButton;