import FeatureCard from "./featureCard";

const IssueTracking2 = () => {
  return (
    <div className="md:mt-10 space-container pt-0 pb-0 text-normal">
      <div className="flex flex-col lg:flex-row xl:mt-30 justify-between">
        <div className="flex-col max-w-sm pb-10">
          <p className="font-semibold text-text-primary ">
            Build momentum with Cycles
          </p>
          <p className="text-text-secondary">
            Create healthy routines and focus your team on what work should
            happen next.
          </p>
          <BuildMomentunPic />
        </div>
        <div className="flex-col max-w-sm">
          <p className="font-semibold ">Manage incoming work with Triage</p>
          <p className="text-text-secondary ">
            Review and assign incoming bug reports, feature requests, and other
            unplanned work.
          </p>
          <BuildMomentunPic />
        </div>
      </div>
      <LinearInsights />
      <div className=" flex justify-center items-center">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 items-center justify-center ">
          <FeatureCard
            emoji={"svgs/feature11.svg"}
            title={"Tailored workflows"}
            subtitle={
              "Track progress across custom issue flows for your team.."
            }
          />
          <FeatureCard
            emoji={"svgs/feature12.svg"}
            title={"Custom views"}
            subtitle={
              "Switch between list and board. Group issues with swimlanes."
            }
          />
          <FeatureCard
            emoji={"svgs/feature13.svg"}
            title={"Filters"}
            subtitle={"Refine issue lists down to what’s most relevant to you."}
          />
          <FeatureCard
            emoji={"svgs/feature14.svg"}
            title={"SLAs"}
            subtitle={"Automatically apply deadlines to time-sensitive tasks."}
          />
        </div>
      </div>
    </div>
  );
};

const BuildMomentunPic = () => {
  return (
    <div
      className="mt-6 tracking-normal font-medium border-1 border-bg-translucent px-2 py-5 rounded-2xl max-w-xs 
  bg-[linear-gradient(134deg,rgba(255,255,255,0.2),rgba(255,255,255,0.01),rgba(255,255,255,0)_55%)]"
    >
      <h2 className="text-sm mb-2">Cycle 55</h2>
      <div className=" text-xs text-text-secondary">
        <div className=" flex space-x-2">
          <div>Scope</div>
          <div>Started</div>
          <div>Completed</div>
        </div>
        <div className="mt-4">
          <img src="svgs/graph.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

const LinearInsights = () => {
  return (
    <div className=" mt-20 mb-20">
      <div className="max-w-sm">
        <h2 className="mb-1 text-text-primary font-semibold text-md">
          Linear Insights
        </h2>
        <p className="text-text-secondary text-sm mb-2">
          Take the guesswork out of product planning with realtime, actionable
          data analytics.
        </p>
        <button className="button-primary  bg-button-background text-text-secondary hover:cursor-pointer hover:brightness-150  hover:text-text-primary ">
          Learn more
          <img src="svgs/rightarrow.svg" className="inline ml-1" alt="" />
        </button>
      </div>
      <div className=" lg:-mt-6 -z-10">
        <img src="svgs/insight.svg" className=" " alt="" />
      </div>
    </div>
  );
};

export default IssueTracking2;
