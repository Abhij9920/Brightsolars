"use client";

import { motion } from "framer-motion";

const Hero = ({
  Image,
  section,
  desc,
}: {
  Image: string;
  section: string;
  desc: string;
}) => {
  return (
    <div
      className="relative h-[350px] md:h-[450px] flex items-center justify-center bg-center text-white bg-cover md:py-10"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="z-10 p-4 flex flex-col gap-3 text-left w-full mx-auto items-start justify-start md:ml-16 md:p-8">
        <motion.h1
          className="text-2xl md:text-4xl font-bold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {section}
        </motion.h1>
        <motion.p
          className="text-sm md:text-lg max-w-2xl"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {desc}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
