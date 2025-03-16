const HeroSection = () => {
  return (
    <div className=" space-container pt-34 pb-32 z-10">
      <h1 className="hidden sm:block max-w-2xl mb-2">
        Linear is a purpose-built tool for planning and building products
      </h1>
      <h1 className="mb-2 sm:hidden  text-center">
        Plan and build your product
      </h1>
      <p className="text-md leading-tight text-text-subtitle mb-6 ">
        Meet the system for modern software development.
        <br />
        Streamline issues, projects, and product roadmaps.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <button className=" .button font-medium  transition">
          Start building
        </button>
        <button className="flex items-center transition">
          Introducing Sub-teams
        </button>
      </div>
    </div>
  );
};

export const HeroTitle = () => {
  return;
};

export default HeroSection;
