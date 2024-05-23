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
        delayChildren: 0,
        staggerChildren: 0.4,
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
        duration: 0.4,
      }
    }
  }

  // Content
  const content = [];
  AboutContent.forEach((entry) => {
    content.push(
      <div
        key={entry.id}
        className="mb-6 last:mb-0"
        
      >
        {entry.Content}
      </div>
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
        <motion.section
          variants={element}
        >
          {content}
        </motion.section>
      </motion.section>
  );
}

export default About;