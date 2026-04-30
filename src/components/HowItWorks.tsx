"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/content";

const HowItWorks = () => {
  return (
    <div className="py-10 md:py-16 px-4 font-sans" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 items-center justify-center text-center mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[#32C36C]">
            How It Works
          </h2>
          <p className="text-xl md:text-3xl font-bold text-black">
            Your Journey To Solar In 4 Simple Steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#32C36C] text-white font-extrabold text-xl">
                {item.step}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-slate-500">
                {item.description}
              </p>
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-6 text-[#32C36C] text-2xl font-bold">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
