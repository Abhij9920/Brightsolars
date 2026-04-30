import { CheckCheck, ContactIcon } from "lucide-react";
import { AiFillCustomerService } from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa";
import Image from "next/image";
import { ABOUT } from "@/lib/content";

const iconMap = [
  <CheckCheck key="check" className="md:w-8 md:h-8 w-5 h-5" />,
  <FaUserCheck key="user" className="md:w-8 md:h-8 w-5 h-5" />,
  <ContactIcon key="contact" className="md:w-8 md:h-8 w-5 h-5" />,
  <AiFillCustomerService key="service" className="md:w-8 md:h-8 w-5 h-5" />,
];

const WhyChooseUs = () => {
  const { whyChooseUs } = ABOUT;

  return (
    <div className="flex flex-col bg-slate-50 md:flex-row py-10 px-4 md:px-0 md:py-0 font-sans gap-3 md:gap-0">
      <div className="flex flex-col  md:w-1/2 gap-4 md:gap-6 md:p-24 ">
        <div className="flex flex-col gap-2">
          <h1 className=" md:text-lg font-bold text-balance text-[#32C36C] ">
            {whyChooseUs.heading}
          </h1>
          <p className="text-xl md:text-3xl font-bold  text-black ">
            {whyChooseUs.subheading}
          </p>
        </div>
        <p className="text-base text-slate-400">
          {whyChooseUs.body}
        </p>
        <div className="grid grid-cols-2 gap-3 justify-between ">
          {whyChooseUs.points.map((point, index) => (
            <div key={index} className="flex items-center  gap-2">
              <div className="flex items-center justify-center p-3 bg-[#32C36C] rounded-full text-white">
                {iconMap[index % iconMap.length]}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs md:text-base text-balance text-slate-400">
                  {point.label}
                </p>
                <h1 className=" md:text-xl font-bold text-balance text-black">
                  {point.sublabel}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" md:w-1/2 ">
        <div className="relative h-[500px] md:h-[600px]">
          <Image
            src="/images/feature.jpg"
            alt="Why Choose Us"
            fill
            sizes="50vw"
            className="md:w-full md:h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
