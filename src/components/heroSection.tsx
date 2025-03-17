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
      <div ref={containerRef} className="  ">
        <div className="space-container ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "ease-in", duration: 1, bounce: 0 }}
            className="hidden sm:block max-w-2xl mb-2"
          >
            Linear is a purpose-built tool for planning and building products
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "ease-in", duration: 1, bounce: 0 }}
            className="mb-2 sm:hidden text-center"
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
            className="text-md  text-text-subtitle mb-6 text-center sm:text-start"
          >
            Meet the system for modern software development.
            <br className="hidden sm:block" />
            Streamline issues, projects, and product roadmaps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "ease-in",
              duration: 1.4,
              bounce: 0,
              delay: 0.4,
            }}
            className="flex flex-wrap items-center gap-4"
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
          className="relative -z-10 lg:mt-[-160px]"
        >
          <img
            src="img/homepage1.png"
            alt=""
            className="w-full h-auto object-cover object-top mask-image-[radial-gradient(83.83%_83.84%_at_50%_16.17%,_#d9d9d9_0,_hsla(0,_0%,_45%,_0)_80%)]"
          />
        </motion.div>
        <Clients />
      </div>
    </section>
  );
};

export default HeroSection;
