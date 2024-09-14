import { motion } from "framer-motion";

import Button from "./Button";
import { useState } from "react";


function About() {
  const [hasAnimated, setHasAnimated] = useState(false)
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={hasAnimated && { opacity: 1 }}
      whileInView={() => setHasAnimated(true)}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col-reverse items-center justify-evenly lg:flex-row"
    >
      <div className="flex flex-col justify-center items-center gap-7 w-11/12 text-center lg:w-2/5 lg:text-left lg:items-start ">
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:w-2/3 font-bold text-veryDarkBlue w-11/12"
        >
          Bring everyone togoether to build better produces.
        </h1>
        <p className="text-darkGrayishBlue text-xl lg:text-base w-4/5 lg:w-1/2">
          Manage makes it simple for software teams to play day-to-day tasks
          while keeping the larger team goals in view
        </p>
        <Button>Get Started</Button>
      </div>

      <img src="./images/illustration-intro.svg" alt="illustration-intro" className="w-11/12 lg:w-2/5" />

    </motion.section>
  );
}

export default About;
