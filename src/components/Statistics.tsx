"use client";

import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { STATS } from "@/lib/content";
import { FaUsers, FaCheckCircle, FaAward, FaSmile } from "react-icons/fa";

const icons = [
  <FaUsers key="users" className="w-6 h-6 text-white" />,
  <FaCheckCircle key="check" className="w-6 h-6 text-white" />,
  <FaAward key="award" className="w-6 h-6 text-white" />,
  <FaSmile key="smile" className="w-6 h-6 text-white" />,
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Statistics = () => {
  return (
    <div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto gap-4 md:gap-16 justify-between items-center px-4 py-10 md:py-20">
        {STATS.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="flex flex-col gap-3 p-3 border-0 border-none shadow-none w-full">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center md:h-14 md:w-14 w-10 h-10 rounded-full bg-[#32C36C] p-2">
                  {icons[index % icons.length]}
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#32C36C]">
                  {item.value}
                </h2>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="md:text-xl font-bold">{item.label}</h1>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
