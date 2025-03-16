const BuiltStrong = () => {
  return (
    <section className="bg-gradient py-[160px] ">
      <div className="lg:ml-54  flex flex-row justify-between">
        <div className=" lg:w-2/4 pr-32 px-4 flex flex-col ">
          <div className="mb-4 max-w-sm items-center">
            <div className="inline-block  bg-background h-[6px] w-[12px] border-1 border-text-secondary rounded"></div>
            <span className="text-xs text-text-teritary  hover:space-x-0.5">
              {"  "}
              Under the hood
            </span>
            <h1>Built on strong foundations</h1>
          </div>

          <div className=" text-xs text-text-secondary">
            Linear is so simple to use, it’s easy to overlook the wealth of
            complex technologies packed under the hood that keep Linear robust,
            safe, and blazing fast.
          </div>
          <div className="text-xs mt-6">
            <div className="flex flex-row justify-between mb-4">
              <p>Linear Sync Engine</p>
              <p className="text-text-secondary w-2/5">
                Built with a high-performance architecture and an obsessive
                focus on speed.
              </p>
            </div>
            <div className="flex flex-row justify-between mb-4">
              <p>Enterprise-ready security</p>
              <p className="text-text-secondary w-2/5">
                Best-in-class security practices keep your work safe and secure
                at every layer.
              </p>
            </div>
            <div className="flex flex-row justify-between mb-4">
              <p>Engineered for scale</p>
              <p className="text-text-secondary w-2/5 ">
                Built for teams of all sizes. From early-stage startups to
                global enterprises.
              </p>
            </div>
          </div>
        </div>

        {/* Image Wrapper */}
        <div className="lg:w-3/4">
          <img
            src="svgs/strongFoundation.svg"
            alt=""
            className="w-full h-auto object-cover object-top mask-image-[radial-gradient(83.83%_83.84%_at_50%_16.17%,_#d9d9d9_0,_hsla(0,_0%,_45%,_0)_80%)]"
          />
        </div>
      </div>
    </section>
  );
};

export default BuiltStrong;
