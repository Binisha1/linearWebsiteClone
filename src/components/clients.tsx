import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const Clients = () => {
  const imageGroups = [
    [
      { src: "svgs/partners/svgexport-13.svg" },
      { src: "svgs/partners/svgexport-14.svg" },
      { src: "svgs/partners/svgexport-15.svg" },
    ],
    [
      { src: "svgs/partners/svgexport-16.svg" },
      { src: "svgs/partners/svgexport-17.svg" },
      { src: "svgs/partners/svgexport-18.svg" },
    ],
    [
      { src: "svgs/partners/svgexport-19.svg" },
      { src: "svgs/partners/svgexport-20.svg" },
      { src: "svgs/partners/svgexport-21.svg" },
    ],
    [
      { src: "svgs/partners/svgexport-22.svg" },
      { src: "svgs/partners/svgexport-23.svg" },
      { src: "svgs/partners/svgexport-24.svg" },
    ],
    [
      { src: "svgs/partners/svgexport-25.svg" },
      { src: "svgs/partners/svgexport-26.svg" },
      { src: "svgs/partners/svgexport-27.svg" },
    ],
    [
      { src: "svgs/partners/svgexport-28.svg" },
      { src: "svgs/partners/svgexport-29.svg" },
      { src: "svgs/partners/svgexport-30.svg" },
    ],
  ];

  return (
    <section className="space-container font-medium text-center items-center justify-center leading-4  py-16">
      <p className="text-md text-text-primary">
        Powering the world’s best product teams.
      </p>
      <p className="text-md text-text-secondary">
        From next-gen startups to established enterprises.
      </p>
      <div className="lg:px-8 grid grid-cols-2 gap-25 md:grid-cols-3  mt-6 place-items-center">
        {imageGroups.map((images, index) => (
          <ClientImage key={index} images={images} />
        ))}
      </div>
    </section>
  );
};

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const ClientImage = ({ images }: { images: { src: string }[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timerID = setTimeout(
      () => setCurrent((prev) => (prev + 1) % images.length),
      3000
    );
    return () => clearTimeout(timerID);
  }, [current]);

  return (
    <div className="relative w-[8rem]">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[current].src}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          src={images[current].src}
          alt=""
          className="absolute "
        />
      </AnimatePresence>
    </div>
  );
};

export default Clients;
