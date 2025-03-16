import HorizontalScroll from "react-scroll-horizontal";

const MadeFor = () => {
  return (
    <section className="space-container">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="lg:w-1/2">
          <h1>Made for modern product teams</h1>
        </div>
        <div className="lg:w-1/2 lg:px-4 text-sm ">
          <span className="text-text-secondary">
            Linear is shaped by the practices and principles that distinguish
            world-class product teams from the rest: relentless focus, fast
            execution, and a commitment to the quality of craft.
          </span>
          <span className="cursor-pointer hover:space-x-0.5">
            {"  "}
            <span>Make the switch</span>
            <img src="svgs/rightarrow.svg" alt="" className="inline" />
          </span>
        </div>
      </div>
      <div>
        <div>
          {/*
           */}
        </div>
      </div>
    </section>
  );
};

export default MadeFor;
