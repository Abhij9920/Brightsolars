import Link from "next/link";
import { PiSolarPanelBold } from "react-icons/pi";
import { Button } from "./ui/button";
import ClientNavmenu from "./ClientNavmenu";
import { COMPANY, NAV_LINKS } from "@/lib/content";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="flex items-center justify-between px-4 py-4 md:py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href={"/"}
          className="flex items-center gap-2 md:gap-3 text-[#16a34a]"
        >
          <PiSolarPanelBold className="w-7 h-7 md:w-9 md:h-9" />
          <span className="md:text-xl font-extrabold text-slate-800 tracking-tight">
            {COMPANY.name}
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-base text-slate-700">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#16a34a] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-2">
          <Button
            size={"sm"}
            className="bg-[#16a34a] hover:bg-[#15803d] md:hidden flex items-center justify-center shadow-none"
            asChild
          >
            <Link href={"/quote"}>Get a Free Quote</Link>
          </Button>
          <Button
            size={"default"}
            className="bg-[#16a34a] hover:bg-[#15803d] hidden md:flex items-center justify-center shadow-none"
            asChild
          >
            <Link href={"/quote"}>Get a Free Quote</Link>
          </Button>
          <ClientNavmenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
