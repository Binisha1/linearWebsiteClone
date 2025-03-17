import IssueTracking2 from "./issueTracking2";

const IssueTracking = () => {
  return (
    <section className="bg-gradient py-[40px] md:py-[160px] ">
      <div className="max-w-[59rem] mx-auto px-4 flex flex-col ">
        <div className="mb-4 max-w-sm">
          <div className="inline-block  bg-[#d4b144] h-[6px] w-[12px] rounded"></div>
          <span className="cursor-pointer text-xs text-text-teritary  hover:space-x-0.5">
            {"  "}
            <span>Task tracking and sprint planning</span>
            <img src="svgs/rightarrow.svg" alt="" className="inline" />
          </span>
          <h1 className="cursor-pointer">Issue tracking you'll enjoy using</h1>
        </div>
        <div className="lg:max-w-xs text-sm ">
          <span className="text-text-primary">
            Optimized for speed and efficiency.
          </span>
          <br className="hidden lg:block" />

          <span className="text-text-secondary">
            Create tasks in seconds, discuss issues in context, and breeze
            through your work in views tailored to you and your team.
          </span>
        </div>
      </div>

      {/* Image Wrapper */}
      <div className="relative img-container lg:mt-[-90px]">
        <img
          src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
          alt=""
          className="img"
        />
      </div>
      <IssueTracking2 />
    </section>
  );
};

export default IssueTracking;
