import { CgChevronRight } from "react-icons/cg";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import Clients from "./clients";

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (containerRef.current) {
        containerRef.current.style.visibility = "visible";
      }
    });
  }, []);

  return (
    <section className="bg-gradient">
      <div ref={containerRef} className="space-container  pt-34 pb-32 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0 }}
          className="hidden sm:block max-w-2xl mb-2"
        >
          Linear is a purpose-built tool for planning and building products
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0 }}
          className="mb-2 sm:hidden text-center"
        >
          Plan and build your product
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.2, bounce: 0, delay: 0.2 }}
          className="text-md leading-tight text-text-subtitle mb-6 text-center sm:text-start"
        >
          Meet the system for modern software development.
          <br className="hidden sm:block" />
          Streamline issues, projects, and product roadmaps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.4, bounce: 0, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4"
        >
          <button className="button-primary">Start building</button>
          <button className="text-gradient text-sm">
            Introducing Sub-teams
            <CgChevronRight className="inline" />
          </button>
        </motion.div>
        <Clients />
      </div>
    </section>
  );
};

export default HeroSection;
