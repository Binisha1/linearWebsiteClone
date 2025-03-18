const card = [
  {
    img: "img/collab1.avif",
    text: "Customer Requests",
    subtext: "Build what customers actually wants",
  },
  {
    img: "img/collab2.avif",
    text: "Powerful git workflows",
    subtext: "Automate pull requests and commit workflows",
  },
  {
    img: "img/collab3.avif",
    text: "linear Asks",
    subtext: "Turn workplace requests into actionable issues",
  },
  {
    img: "img/collab4.avif",
    text: "Linear integrations",
    subtext: "100+ ways to enhance your Linear experience",
  },
  {
    img: "img/collab7.avif",
    text: "Figma integration",
    subtext: "Bridge the gap between engineering and design",
  },
  {
    img: "img/collab5.avif",
    text: "Figma integration",
    subtext: "Bridge the gap between engineering and design",
  },
  {
    img: "img/collab6.avif",
    text: "Built for developers",
    subtext: "Build your own add-ons with Linear API",
  },
];
const Collaborative = () => {
  return (
    <section className="bg-gradient py-[60px] md:py-[160px] ">
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
interface CardProps {
  img: string;
  text: string;
  subtext: string;
}
const Card = ({ img, text, subtext }: CardProps) => {
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
