"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { TESTIMONIALS } from "@/lib/content";

const testimonialItems = TESTIMONIALS.map((t) => ({
  image: t.image,
  quote: t.quote,
  name: t.name,
  title: t.location,
}));

export function TestimonialRoll() {
  return (
    <div className=" bg-white items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonialItems}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
