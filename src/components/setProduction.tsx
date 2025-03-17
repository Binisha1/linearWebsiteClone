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

      {/* Image Wrapper */}
      <div className="relative img-container mt-[-80px]">
        <img
          src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/25491170-d59e-427e-ee76-a69dcf080300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
          alt=""
          className="img"
        />
      </div>
      <SetProduction2 />
    </section>
  );
};

export default SetProduction;
