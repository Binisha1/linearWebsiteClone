const PlanPresent = () => {
  return (
    <section className="max-w-[59rem] pb-20 mx-auto px-4 flex flex-col lg:flex-row lg:items-center justify-between">
      <h3 className="mt-20 pb-4 lg:mt-0 text-xl font-semibold tracking-tighter">
        Plan the present. Build the future
      </h3>
      <div className="space-x-1">
        <button className="button-primary  bg-button-background  text-text-primary ">
          Talk to sales
        </button>
        <button className="button-primary ">Get Started</button>
      </div>
    </section>
  );
};

export default PlanPresent;
