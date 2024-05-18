import React from "react";
import { motion } from "framer-motion";
import AboutContent from "./AboutContent";

function About() {
  // Animation
  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25
      }
    }
  }

  const element = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    }
  }

  // Content
  const content = [];
  AboutContent.forEach((entry) => {
    content.push(
      <motion.div
        key={entry.id}
        className="mb-4"
        variants={element}
      >
        {entry.Content}
        <br></br>
      </motion.div>
    );
  });

  return(
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        className="px-4 md:mt-12 md:px-28"
        viewport={{once: true, amount: 0.8}}
      >
        <h1 key="about-header" className="my-8 text-[40px] md:text-5xl font-bold">About</h1>
        {content}
      </motion.section>
  );
}

export default About;