import React from "react";
import { motion } from "framer-motion";

function SectionHeader({text}) {
  // Animation Property
  const header = {
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
      }
    }
  }

  return(
    <motion.h1 
      className="my-8 text-[40px] font-bold"
      variants={header}
    >
      {text}
    </motion.h1>
  );
}

export default SectionHeader;