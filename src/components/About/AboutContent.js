import React from "react";
import Highlight from "../Highlight.js";
import TextLink from "../TextLink.js";

const AboutContent = [
  {
    id: "about-0",
    Content: 
      <>
        Hi, I'm <Highlight text="Andrew Wang"/>. I am 
        an <Highlight text="Software Engineer"/> graduate from <TextLink text="University of Queensland" href="https://www.uq.edu.au/"/>.
        I enjoy creating tools to solve problems in my daily life, or programs that I think would be cool.
      </>
  },
  {
    id: "about-1",
    Content:
      <>
        For <Highlight text="Frontend Development"/>, I love to create websites with plenty of interactivity and animations,
        and the modern frontend development environment offers many tools for me to be creative.
      </>
  },
  {
    id: "about-2",
    Content:
      <>
        For <Highlight text="Backend Development"/>, I either build tools to help out my daily life, or take 
        on <TextLink text="Coding Challenges" href="https://codingchallenges.fyi/" /> to practice my skills. 
      </>
  },
  {
    id: "about-3",
    Content:
      <>
        Besides writing code, Here are some other things I do:
        <ul className="pl-4 list-disc">
          <li>Interact with <TextLink text="other local developers" href="https://www.meetup.com/brisbane-beginner-coder-collective/"/>.</li>
          <li>An active member of the <TextLink text="UQ Computing Society" href="https://uqcs.org/" /></li>
        </ul>
      </>
  },
  {
    id: "about-4",
    Content:
      <>
        In general, I am a software developer that likes to be whimsical in presentation, and practical in solving problems.
      </>
  }
];

export default AboutContent;