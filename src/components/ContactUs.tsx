import Image from "next/image";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div className=" px-3 md:px-0 flex flex-col md:flex-row bg-slate-50">
      <div className=" md:w-1/2 ">
        <div className="relative h-[500px] md:h-[600px]">
          <Image
            src="/images/quote.jpg"
            alt="Why Choose Us"
            fill
            sizes="50vw"
            className="md:w-full md:h-full object-cover"
          />
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col gap-3 md:gap-5 md:p-24  py-5  p-10">
        <div className="flex flex-col gap-1 md:gap-2 text-center max-w-2xl mx-auto">
          <h1 className="md:text-lg text-balance font-bold text-[#32C36C] ">
            Contact Us
          </h1>
          <h1 className="text-xl md:text-3xl font-bold  text-black ">
            We are one mail away
          </h1>
        </div>

        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUs;
