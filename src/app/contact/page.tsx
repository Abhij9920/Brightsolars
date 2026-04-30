import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import { CONTACT } from "@/lib/content";

const ContactPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero
        Image="images/carousel-3.jpg"
        section={CONTACT.heading}
        desc={CONTACT.subheading}
      />
      <ContactUs />
    </div>
  );
};

export default ContactPage;
