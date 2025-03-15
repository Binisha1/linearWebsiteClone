const HeroSection = () => {
  return (
    <div>
      <div className="max-w-4xl container mx-auto px-4 pt-15 pb-32 relative z-10">
        <div className="">
          <h1 className="text-4xl  md:text-5xl font-bold leading-tight mb-8">
            Linear is a purpose-built tool for planning and building products
          </h1>
          <p className="text-xl text-tertiary mb-10 leading-relaxed">
            Meet the system for modern software development.
            <br />
            Streamline issues, projects, and product roadmaps.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-foreground text-black px-3 py-2 rounded-md font-medium  transition">
              Start building
            </button>
            <button
              onClick={() => {}}
              className="flex items-center text-gray-400 hover:text-white transition"
            >
              Introducing Sub-teams
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
