import React from "react";
import Highlight from "../../Highlight.js";
import pomodorofx from "../../assets/pomodorofx.png";
import uwuify from "../../assets/uwuify.png";

const ProjectList = [
  {
    image: pomodorofx,
    alt: "PomodoroFX, a JavaFX software",
    title: "PomodoroFX",
    githubHref: "https://github.com/AncientMeme/pomodoroFX",
    content: 
      <>
        <p className="text-justify">
          A pomodoro timer standalone software built 
          using <Highlight text="Java"/> with <Highlight text="JavaFX library"/>. The 
          graphic interface was implemented using <Highlight text="FXML files"/> for layout 
          and <Highlight text="CSS file"/> for styling.
        </p>
        <br></br>
        <p className="text-justify">
          Supports custom work session and break session length, long breaks, and light/dark 
          modes.
        </p>
      </>
  },
  {
    image: uwuify,
    alt: "uwuify, a Google Chrome Extension",
    title: "Uwuify",
    githubHref: "https://github.com/AncientMeme/uwuify",
    content: 
      <>
        <p className="text-justify">
          <Highlight text="Chrome extension"/> built during <Highlight text="UQCS Hackathon 2023"/> using
          <Highlight text=" HTML"/>, <Highlight text="CSS"/>, and <Highlight text="JavaScript"/>. This 
          version a fork that removed the backend server component.
        </p>
        <br></br>
        <p className="text-justify">
          The plugin would scan the current website and translate all content into uwu speak (internet slang),
          as well as replacing all images into cats.
          It can be toggled on and off at will, and content would be restored without any delay.
        </p>
      </>
  }
];

export default ProjectList;