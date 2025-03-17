import { CgChevronRight } from "react-icons/cg";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import Clients from "./clients";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (containerRef.current) {
        containerRef.current.style.visibility = "visible";
      }
    });
  }, []);

  return (
    <section className="">
      <div ref={containerRef} className="  ">
        <div className="space-container  mt-15 md:mt-20 lg:mt-0">
          <div className="flex flex-col items-center md:items-start">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "ease-in", duration: 1, bounce: 0 }}
              className="hidden md:block max-w-2xl mb-2"
            >
              Linear is a purpose-built tool for planning and building products
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "ease-in", duration: 1, bounce: 0 }}
              className="mb-2 max-w-sm md:hidden text-center"
            >
              Plan and build your product
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "ease-in",
                duration: 1.2,
                bounce: 0,
                delay: 0.2,
              }}
              className="text-md max-w-sm md:max-w-2xl  text-text-subtitle mb-6 text-center md:text-start"
            >
              Meet the system for modern software development.
              <br className="hidden md:block" />
              Streamline issues, projects, and product roadmaps.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "ease-in",
              duration: 1.4,
              bounce: 0,
              delay: 0.4,
            }}
            className="flex flex-wrap flex-col md:flex-row items-center gap-4"
          >
            <button className="button-primary">Start building</button>
            <button className="relative px-2 py-1 tracking-normal cursor-pointer text-sm before:absolute before:inset-0 before:bg-button-background before:opacity-0 hover:before:opacity-100 hover:before:rounded-lg before:-z-10">
              <span className="text-gradient">Introducing Sub-teams</span>
              <CgChevronRight className="inline" />
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "ease-in",
            duration: 1.4,
            bounce: 0,
            delay: 0.8,
          }}
          className="relative -z-10 mt-[-60px] lg:mt-[-180px]"
        >
          <div className="img-container">
            <img src="img/homepage1.png" alt="" className="img" />
          </div>
        </motion.div>
        <Clients />
      </div>
    </section>
  );
};

export default HeroSection;
