import React from "react";

function LinkButton({Icon, text, href}) {
  const content = [];
  if (Icon != null) {
    content.push(Icon);
  }
  if (text != null) {
    content.push(<p className="text-bold px-2">{text}</p>);
  }

  return(
    <a
      className="p-1 rounded text-lg bg-dark-accent text-dark-text flex items-center duration-200 hover:bg-dark-highlight md:text-xl"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {content}
    </a>
  );
}

export default LinkButton;