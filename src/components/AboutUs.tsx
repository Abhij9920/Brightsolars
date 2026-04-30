import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";
import { ABOUT } from "@/lib/content";

const AboutUs = () => {
  return (
    <div className=" px-3 md:px-0 flex flex-col md:flex-row bg-slate-50">
      <div className=" md:w-1/2 ">
        <div className="relative h-[500px] md:h-[600px]">
          <Image
            src={ABOUT.image}
            alt="About Us"
            fill
            sizes="50vw"
            className="md:w-full md:h-full object-cover"
          />
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col gap-5 md:p-24  py-5 ">
        <div className="flex flex-col gap-2">
          <h1 className="md:text-lg text-balance font-bold text-[#32C36C] ">
            About Us
          </h1>
          <h1 className="text-xl md:text-3xl font-bold  text-black ">
            {ABOUT.heading}
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-base text-black">
            {ABOUT.body}
          </p>
          <div className="flex flex-col gap-3">
            {ABOUT.bullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 md:w-6 md:h-6 text-balance text-[#32C36C] " />
                <p className="text-sm md:text-base text-balance text-black">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Button
          size={"lg"}
          className="bg-[#32C36C] hover:bg-[#2B9A5A] w-fit rounded-full"
          asChild
        >
          <Link href="/about">Explore More</Link>
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
