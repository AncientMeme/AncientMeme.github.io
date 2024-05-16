import React from "react";

function IconButton({href, Icon})
{
  return (
    <a 
      className="m-2 text-4xl text-dark-text md:text-6xl"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {Icon}
    </a>
  );
}

export default IconButton;