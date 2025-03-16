const IssueTracking = () => {
  return (
    <section className="bg-gradient py-[160px] ">
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
        <div className="max-w-xs text-sm ">
          <span className="text-text-primary">
            Optimized for speed and efficiency.
          </span>
          <br />

          <span className="text-text-secondary">
            Create tasks in seconds, discuss issues in context, and breeze
            through your work in views tailored to you and your team.
          </span>
        </div>
      </div>

      {/* Image Wrapper */}
      <div className="relative lg:mt-[-90px]">
        <img
          src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
          alt=""
          className="w-full h-auto object-cover object-top mask-image-[radial-gradient(83.83%_83.84%_at_50%_16.17%,_#d9d9d9_0,_hsla(0,_0%,_45%,_0)_80%)]"
        />
      </div>
    </section>
  );
};

export default IssueTracking;
