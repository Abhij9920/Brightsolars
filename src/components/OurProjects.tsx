import { ProjectsTabs } from "./ProjectsTabs";

const OurProjects = () => {
  return (
    <div className="flex flex-col gap-8 py-10 px-4 font-sans">
      <div className="flex flex-col items-center justify-center gap-2 max-w-xl mx-auto">
        <h1 className="text-lg md:text-xl font-bold text-balance text-[#32C36C] ">
          Our Projects
        </h1>
        <p className="text-xl md:text-3xl font-bold text-black text-center">
          Visit Our Latest Solar And Renewable Energy Projects
        </p>
      </div>
      <ProjectsTabs />
    </div>
  );
};

export default OurProjects;
