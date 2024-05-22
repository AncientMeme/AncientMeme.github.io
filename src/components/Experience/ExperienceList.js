import React from "react";
import Highlight from "../../Highlight.js";
import TextLink from "../TextLink.js";
const ExperienceList = [
  {
    id: "experience-0",
    Content: 
      <div>
        <h2 className="text-xl text-dark-accent">
          <span className="font-bold"><TextLink text="OpalWhisperer" href="https://opalwhisperers.com/" /></span> | Frontend Developer
        </h2>
        <h3 className="text-lg">
          Sep 2023 - Nov 2023
        </h3>
        <p>I was hired as the sole developer for the e-commerce business.</p>
        <ul className="pl-4 list-disc">
          <li>
            Modify and improve the website in <Highlight text="Shopify Liquid "/> 
            using <Highlight text="HTML, CSS, JavaScript"/>.
          </li>
          <li>
            Research available and afforable solutions for the client, or 
            implement <Highlight text="custom Javascript solutions"/> when no such tools exist.
          </li>
          <li>
            Setup <Highlight text="social media integration"/> and <Highlight text="email marketing "/> 
            to increase website traffic by 1000 users per week.
          </li>
        </ul>
      </div>,
  }
];

export default ExperienceList;