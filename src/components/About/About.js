import React from "react";
import { motion } from "framer-motion";
import AboutContent from "./AboutContent";

function About() {
  // Animation
  const container = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        bounch: 0.1,
        duration: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.5,
      }
    }
  }

  const element = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        bounch: 0,
        ease: "easeOut",
        duration: 0.25,
      }
    }
  }

  // Content
  const content = [];
  AboutContent.forEach((entry) => {
    content.push(
      <motion.div
        key={entry.id}
        className="mb-6 last:mb-0"
        variants={element}
      >
        {entry.Content}
      </motion.div>
    );
  });

  return(
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.4}}
      >
        <h1 key="about-header" className="my-8 text-[40px] font-bold">About</h1>
        {content}
      </motion.section>
  );
}

export default About;