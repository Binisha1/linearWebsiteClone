const MadeFor = () => {
  return (
    <section className=" bg-gradient">
      <div className="space-container">
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

        <div className="mt-4 flex overflow-x-scroll hide-scroll-bar scroll-smooth">
          <div className="flex flex-nowrap gap-1">
            <Card
              text={"Purpose-built for product development"}
              img={
                "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/fc435ee2-fabf-4f10-5a37-d89874f4bf00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
              }
            />
            <Card text={"Designed to move fast"} img={"img/made2.jpeg"} />
            <Card text={"Crafted to perfection"} img={"img/made3.jpeg"} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ img, text }) => {
  return (
    <button className="bg-text-black group px-4 py-2 ">
      <div className="w-60 group-hover:brightness-200">
        <img
          src={img}
          className="w-full  duration-300 group-hover:shadow-lg inset-0 bg-radial"
          alt=""
        />
        <div className="flex justify-between text-text-primary group-hover:text-text-white  font-medium text-start items-center  text-md">
          <span className="max-w-52">{text}</span>
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

export default MadeFor;
