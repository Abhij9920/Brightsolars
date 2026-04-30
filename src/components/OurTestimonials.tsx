import { TestimonialRoll } from "./TestimonialRoll";

const OurTestimonials = () => {
  return (
    <div className="flex flex-col gap-8 py-10 px-4 font-sans">
      <div className="flex flex-col items-center justify-center gap-2 max-w-2xl mx-auto">
        <h1 className="text-lg md:text-xl font-bold text-balance text-[#32C36C] ">
          Testimonial
        </h1>
        <p className="text-xl md:text-3xl font-bold text-black text-center">
          What Our Clients Say!
        </p>
      </div>
      <TestimonialRoll />
    </div>
  );
};

export default OurTestimonials;
