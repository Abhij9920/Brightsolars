"use client";

import Image from "next/image";
import { Card } from "./ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaSolarPanel } from "react-icons/fa6";
import { MdSolarPower, MdElectricCar, MdBatteryChargingFull } from "react-icons/md";
import { GiSolarSystem } from "react-icons/gi";
import { GrSolaris } from "react-icons/gr";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/content";

const serviceIcons: Record<string, React.ReactNode> = {
  "residential-solar": <FaSolarPanel className="w-10 h-10 text-white" />,
  "commercial-solar": <MdSolarPower className="w-10 h-10 text-white" />,
  "battery-storage": <MdBatteryChargingFull className="w-10 h-10 text-white" />,
  "ev-charging": <MdElectricCar className="w-10 h-10 text-white" />,
  "inverters": <GiSolarSystem className="w-10 h-10 text-white" />,
  "maintenance": <GrSolaris className="w-10 h-10 text-white" />,
};

const Ourservices = () => {
  return (
    <div className="flex flex-col gap-8 py-10 px-4 font-sans">
      <div className="flex flex-col gap-2 items-center justify-center text-center max-w-2xl mx-auto">
        <h1 className="text-lg md:text-xl font-bold text-balance text-[#32C36C] ">
          Our Services
        </h1>
        <p className="text-xl md:text-3xl font-bold text-balance text-black ">
          Complete Solar Solutions For Homes & Businesses
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:max-w-6xl mx-auto">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
          >
            <Card className="flex flex-col gap-6 border-none rounded-lg">
              <div className="relative h-72 w-full rounded-t-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute left-4 -bottom-8 p-4 flex items-center justify-center rounded-full bg-[#32C36C] text-white">
                  {serviceIcons[service.id] || <FaSolarPanel className="w-10 h-10 text-white" />}
                </div>
              </div>
              <div className="flex flex-col gap-4 p-4">
                <h1 className="text-lg font-bold text-balance">
                  {service.title}
                </h1>
                <p className="text-sm md:text-base text-black">
                  {service.shortDesc}
                </p>
                <Link
                  href={`/service#${service.id}`}
                  className="group flex items-center gap-2 text-[#32C36C]"
                >
                  <p className="text-sm md:text-base text-balance">Read More</p>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group-hover:text-green-600"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ourservices;
