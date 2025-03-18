import SetProduction2 from "./setProduction2";

const SetProduction = () => {
  return (
    <section className="bg-gradient py-[160px] ">
      <div className="max-w-[59rem] mx-auto px-4 flex flex-col ">
        <div className="mb-4">
          <div className="inline-block  bg-[rgb(104,204,88)] h-[6px] w-[12px] rounded"></div>

          <span className="cursor-pointer text-sm text-text-teritary  hover:space-x-0.5">
            {"  "}
            <span>Project and long-term planning</span>
            <img src="svgs/rightarrow.svg" alt="" className="inline" />
          </span>
          <h1>Set the production direction</h1>
        </div>
        <div className="max-w-sm text-sm ">
          <span className="text-text-primary">
            Align your team around a unified product timeline.
          </span>

          <span className="text-text-secondary">
            Plan, manage, and track all product initiatives with Linear’s visual
            planning tools.
          </span>
        </div>
      </div>

      <div className="relative img-container mt-[-80px]">
        <img src="img/setProd.png" alt="" className="img" />
      </div>
      <SetProduction2 />
    </section>
  );
};

export default SetProduction;
