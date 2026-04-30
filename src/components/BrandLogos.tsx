"use client";

import { motion } from "framer-motion";
import { BRAND_LOGOS } from "@/lib/content";

const BrandLogos = () => {
  return (
    <div className="py-10 md:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-2 items-center justify-center text-center mb-8">
          <h2 className="text-lg md:text-xl font-bold text-[#32C36C]">
            Trusted Brands
          </h2>
          <p className="text-xl md:text-3xl font-bold text-black">
            We Supply & Install Australia&apos;s Leading Brands
          </p>
        </div>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <motion.div
            className="flex gap-8 md:gap-12 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-sm md:text-base font-semibold text-slate-600 whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;
