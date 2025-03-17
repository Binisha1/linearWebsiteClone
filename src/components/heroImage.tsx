import React from "react";
import { motion } from "motion/react";

const HeroImage = () => {
  return (
    <div className="w-full h-[900px] transform preserve-3d">
      <motion.div transition={{}}>
        <section className="hero">
          <img className="flex flex-shrink" src="img/home.svg" alt="" />
        </section>
      </motion.div>
    </div>
  );
};

export default HeroImage;
