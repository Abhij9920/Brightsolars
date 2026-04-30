"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/content";

export function ProjectsTabs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:max-w-6xl mx-auto">
      {SERVICES.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
        >
          <Link href={`/service#${service.id}`}>
            <Card className="flex flex-col gap-3 border-none rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-52 w-full rounded-t-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-4 p-2">
                <h1 className=" font-bold text-balance text-[#32C36C] underline underline-offset-4">
                  {service.title}
                </h1>
                <p className="text-sm md:text-base text-black">
                  {service.shortDesc}
                </p>
              </div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
