import React from "react";
import { motion } from "framer-motion";
import AboutContent from "./AboutContent";
import SectionHeader from "../SectionHeader";

function About() {
  // Animation
  const container = {
    hidden: {},
    show: {
      transition: {
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
        <SectionHeader text="About"/>
        {content}
      </motion.section>
  );
}

export default About;