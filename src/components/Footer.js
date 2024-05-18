import React from "react";
import IconButton from "./IconButton.js";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <div className="my-6 flex flex-col md:flex-row justify-between gap-y-2">
      <div className="flex items-center justify-center">
        <p className="text-center md:text-left">Developed by Andrew Wang, 2024</p>
      </div>
      <nav className="text-3xl flex content-center items-center justify-center">
          <IconButton 
            Icon={<AiFillGithub/>}
            href={"https://github.com/AncientMeme"}
            aria={"GitHub link to Andrew Wang's Profile"}
          />
          <IconButton 
            Icon={<AiFillLinkedin/>}
            href={"https://www.linkedin.com/in/andrew-wang-dev/"}
            aria={"LinkedIn link to Andrew Wang's Profile"}
          />
        </nav>
    </div>
  );
}

export default Footer;