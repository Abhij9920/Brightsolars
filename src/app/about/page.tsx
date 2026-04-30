import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OurTeam from "@/components/OurTeam";
import Statistics from "@/components/Statistics";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ABOUT } from "@/lib/content";

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero
        Image="images/carousel-1.jpg"
        section="About Us"
        desc={ABOUT.body}
      />
      <Statistics />
      <AboutUs />
      <HowItWorks />
      <WhyChooseUs />
      <OurTeam />
    </div>
  );
};

export default AboutPage;
