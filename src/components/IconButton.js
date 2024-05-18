import React from "react";

function IconButton({href, aria, size, Icon})
{
  return (
    <a 
      className="m-2 text-dark-text"
      href={href}
      rel="noreferrer"
      target="_blank"
      aria-label={aria}
    >
      {Icon}
    </a>
  );
}

export default IconButton;