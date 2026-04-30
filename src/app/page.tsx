import AboutUs from "@/components/AboutUs";
import BrandLogos from "@/components/BrandLogos";
import ContactUs from "@/components/ContactUs";
import HomeHero from "@/components/HomeHero";
import HowItWorks from "@/components/HowItWorks";
import OurProjects from "@/components/OurProjects";
import Ourservices from "@/components/Ourservices";
import OurTeam from "@/components/OurTeam";
import OurTestimonials from "@/components/OurTestimonials";
import Statistics from "@/components/Statistics";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HomeHero />
      <Statistics />
      <HowItWorks />
      <BrandLogos />
      <AboutUs />
      <Ourservices />
      <WhyChooseUs />
      <OurProjects />
      <ContactUs />
      <OurTeam />
      <OurTestimonials />
    </div>
  );
}
