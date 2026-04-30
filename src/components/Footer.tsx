import { ChevronRight, MailIcon, PhoneCallIcon } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";
import { COMPANY, FOOTER } from "@/lib/content";

const Footer = () => {
  return (
    <footer className=" p-4 pt-16 bg-[#1A2A36] text-white space-y-7">
      <div className="flex flex-col  justify-center gap-7 md:flex-row md:justify-between max-w-6xl mx-auto">
        <div className="flex flex-col  gap-5 md:gap-7 md:max-w-xs">
          <p className="md:text-lg font-semibold">{COMPANY.name}</p>
          <p className="text-xs md:text-sm text-slate-300">
            {FOOTER.description}
          </p>
          <div className="flex flex-col  gap-2 ">
            <div className="flex items-center gap-2 ">
              <MdLocationPin className="w-5 h-5 md:w-7 md:h-7 text-slate-300" />
              <p className="text-xs md:text-sm text-slate-300">
                {COMPANY.address}
              </p>
            </div>
            <div className="flex items-center gap-2 ">
              <PhoneCallIcon className="w-5 h-5 md:w-7 md:h-7 text-slate-300" />
              <p className="text-xs md:text-sm text-slate-300">
                {COMPANY.phone}
              </p>
            </div>
            <div className="flex items-center gap-2 ">
              <MailIcon className="w-5 h-5 md:w-7 md:h-7 text-slate-300" />
              <p className="text-xs md:text-sm text-slate-300">
                {COMPANY.email}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2 ">
              <Button
                variant={"outline"}
                size={"icon"}
                className="rounded-full"
                asChild
              >
                <Link href={COMPANY.socials.facebook} target="_blank">
                  <FaFacebook className="w-6 h-6 text-blue-400" />
                </Link>
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                className="rounded-full"
                asChild
              >
                <Link href={COMPANY.socials.instagram} target="_blank">
                  <FaInstagram className="w-6 h-6 text-pink-400" />
                </Link>
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                className="rounded-full"
                asChild
              >
                <Link href={COMPANY.socials.linkedin} target="_blank">
                  <FaLinkedinIn className="w-6 h-6 text-blue-800" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-5 md:gap-7 ">
          <p className="md:text-lg font-semibold">Quick Links</p>
          <div className="flex flex-col  gap-2 ">
            {FOOTER.quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 hover:text-[#32C36C] hover:scale-105 duration-300 ease-linear transition-all text-slate-300"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 " />
                <p className="text-xs md:text-sm ">{link.label}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col  gap-5 md:gap-7 ">
          <p className="md:text-lg font-semibold">Our Services</p>
          <div className="flex flex-col  gap-2 ">
            {FOOTER.services.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 hover:text-[#32C36C] hover:scale-105 duration-300 ease-linear transition-all text-slate-300"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 " />
                <p className="text-xs md:text-sm ">{link.label}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col  gap-5 md:gap-7 ">
          <p className="md:text-lg font-semibold">Projects Gallery</p>
          <div className="grid grid-cols-3 gap-4 justify-between">
            {["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg", "/images/img4.jpg", "/images/img5.jpg", "/images/img6.jpg"].map((img, index) => (
              <div key={index} className="relative md:w-32 md:h-24 w-26 h-16 rounded-lg">
                <Image
                  src={img}
                  alt={`project ${index + 1}`}
                  fill
                  sizes="128px"
                  className=" object-fill rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="max-w-6xl mx-auto  border-slate-500" />
      <div className="flex flex-col  justify-center gap-4 md:flex-row md:justify-center max-w-6xl mx-auto items-center">
        <p className="text-sm md:text-base text-slate-300" suppressHydrationWarning>
          {FOOTER.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
