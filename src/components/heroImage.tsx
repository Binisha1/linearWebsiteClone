import React from "react";
import { motion } from "motion/react";

const HeroImage = () => {
  return (
    <div className="w-full h-[900px] transform preserve-3d">
      <motion.div transition={{}}>
        <section className="hero"></section>
      </motion.div>
    </div>
  );
};

export default HeroImage;
