"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES } from "@/lib/content";

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const slide = HERO_SLIDES[currentIndex];

  return (
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
      {/* Background Images */}
      {HERO_SLIDES.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.heading}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content — only the active slide text, with AnimatePresence for clean transitions */}
      <div className="relative z-10 flex flex-col max-w-6xl mx-auto h-full justify-center px-6 py-12 gap-4 md:gap-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 md:gap-5"
          >
            <h1 className="font-bold text-3xl md:text-6xl md:font-extrabold text-white max-w-xl drop-shadow-lg">
              {slide.heading}
            </h1>
            <p className="text-white/90 max-w-lg md:text-lg drop-shadow-md">
              {slide.subheading}
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Button
                size={"lg"}
                className="bg-[#32C36C] hover:bg-[#2B9A5A] text-white font-semibold px-8 shadow-lg"
                asChild
              >
                <Link href={slide.cta.href}>{slide.cta.label}</Link>
              </Button>
              {slide.ctaSecondary && (
                <Button
                  size={"lg"}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 transition-all duration-300"
                  asChild
                >
                  <Link href={slide.ctaSecondary.href}>
                    {slide.ctaSecondary.label}
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex
                ? "bg-[#32C36C] w-10 h-3"
                : "bg-white/60 hover:bg-white w-3 h-3"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeHero;
