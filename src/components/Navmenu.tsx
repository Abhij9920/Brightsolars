import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiSolarPanelBold } from "react-icons/pi";
import { COMPANY, NAV_LINKS } from "@/lib/content";

export function Navmenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} size={"icon"} className="md:hidden">
          <GiHamburgerMenu className="w-8 h-8 " />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"top"}
        className="flex flex-col gap-5 rounded-b-2xl bg-inherit backdrop-blur-sm bg-opacity-5 font-sans"
      >
        <SheetHeader className="flex flex-row items-center justify-between gap-2 ">
          <SheetTitle className="">
            <SheetClose asChild>
              <Link href={"/"} className="flex items-center gap-1 md:gap-3 text-[#32C36C]">
                <PiSolarPanelBold className="w-8 h-8 md:w-10 md:h-10" />
                <h1 className=" md:text-xl font-extrabold ">{COMPANY.name}</h1>
              </Link>
            </SheetClose>
          </SheetTitle>
          <div className="flex items-center gap-2 ">
            <Button
              size={"sm"}
              className="bg-[#32C36C] hover:bg-[#2B9A5A] md:hidden"
              asChild
            >
              <SheetClose asChild>
                <Link href={"/quote"}>Get a Free Quote</Link>
              </SheetClose>
            </Button>
            <SheetClose asChild>
              <Button variant={"outline"} size={"icon"} className="md:hidden">
                <X className="w-8 h-8 " />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>
        <SheetDescription className="flex flex-col gap-5 text-base font-semibold text-[#32C36C] ">
          {NAV_LINKS.map((link) => (
            <SheetClose asChild>
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#32C36C] hover:scale-105 duration-300 ease-linear transition"
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
