"use client";

import Hero from "@/components/Hero";
import OurTestimonials from "@/components/OurTestimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import { SERVICES } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero
        Image="images/carousel-3.jpg"
        section="Our Services"
        desc="Complete solar solutions for homes and businesses across Victoria — from consultation to installation and ongoing support."
      />

      {/* Services Detail Sections */}
      <div className="py-10 md:py-16 px-4 font-sans">
        <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center scroll-mt-24`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-black">
                  {service.title}
                </h2>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {service.fullDesc}
                </p>
                <div className="flex flex-col gap-2 mt-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <FaCheckCircle className="w-4 h-4 mt-1 text-[#32C36C] flex-shrink-0" />
                      <p className="text-sm md:text-base text-slate-700">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="bg-[#32C36C] hover:bg-[#2B9A5A] w-fit rounded-full mt-2"
                  asChild
                >
                  <Link href="/quote">Get a Free Quote</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <WhyChooseUs />
      <OurTestimonials />
    </div>
  );
};

export default ServicesPage;
