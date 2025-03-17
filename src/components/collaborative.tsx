const card = [
  {
    img: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/5ad1ce36-6baf-4741-66b7-a9939f57cd00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
    text: "Customer Requests",
    subtext: "Build what customers actually wants",
  },
  {
    img: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/45d00e03-8783-4225-f7f7-e49e1042e000/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
    text: "Powerful git workflows",
    subtext: "Automate pull requests and commit workflows",
  },
  {
    img: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/2b394a72-ba7c-40d7-8f93-3b837b296d00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
    text: "linear Asks",
    subtext: "Turn workplace requests into actionable issues",
  },
  {
    img: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/906ad833-45a5-4b19-e4de-153896e13e00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
    text: "Linear integrations",
    subtext: "100+ ways to enhance your Linear experience",
  },
  {
    img: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/0e7273bb-e885-4715-4f2d-bc67fb4eb300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
    text: "Figma integration",
    subtext: "Bridge the gap between engineering and design",
  },
  {
    img: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/71e8ff5e-2889-4b4d-e12c-d3bb8d817700/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
    text: "Figma integration",
    subtext: "Bridge the gap between engineering and design",
  },
  {
    img: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/a516badb-c0aa-4d0d-2ffa-965b529e1a00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
    text: "Built for developers",
    subtext: "Build your own add-ons with Linear API",
  },
];
const Collaborative = () => {
  return (
    <section className="bg-gradient py-[40px] md:py-[160px] ">
      <div className="max-w-[59rem] mx-auto px-4 flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="mb-4 max-w-md ">
          <div className="inline-block  bg-[#B59AFF] h-[6px] w-[12px] rounded"></div>
          <span className="cursor-pointer text-xs text-text-teritary  hover:space-x-0.5">
            {"  "}
            <span>Workflows and integrations</span>
            <img src="svgs/rightarrow.svg" alt="" className="inline" />
          </span>
          <h1 className="cursor-pointer">
            Collaborative across tools and teams
          </h1>
        </div>
        <div className=" text-sm  max-w-xs text-text-secondary">
          Expand the capabilities of the Linear system with a wide variety of
          integrations that keep everyone in your organization aligned and
          focused.
        </div>
      </div>
      <div className=" xl:pl-50 2xl:pl-80  mx-auto  mt-4  flex overflow-x-scroll hide-scroll-bar scroll-smooth">
        <div className="flex flex-nowrap gap-1 lg:justify-center  ">
          {card.map((card, index) => (
            <Card
              key={index}
              img={card.img}
              text={card.text}
              subtext={card.subtext}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
const Card = ({ img, text, subtext }) => {
  return (
    <button className="backdrop-contrast-200 bg-container-background  border-bg-translucent border-1 rounded-xl group px-4 py-4 ">
      <div className="w-65">
        <img
          src={img}
          className="w-full   duration-300 group-hover:shadow-lg group-hover:brightness-150 "
          alt=""
        />
        <div className="flex  group-hover:text-text-white justify-between font-medium text-start items-center  ">
          <span className="max-w-60 text-xs text-text-secondary">
            {text} <br />
            <span className="text-text-primary">{subtext}</span>
          </span>
          <div className="w-5 h-5 flex items-center justify-center rounded-full group-hover:bg-bg-quinary">
            <img
              src="svgs/plus.svg"
              alt=""
              className="inline w-3 group-hover:brightness-180"
            />
          </div>
        </div>
      </div>
    </button>
  );
};

export default Collaborative;
