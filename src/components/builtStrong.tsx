const BuiltStrong = () => {
  return (
    <section className="bg-gradient  ">
      <div className=" space-container flex flex-row justify-between">
        <div className=" lg:w-2/4 flex flex-col ">
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
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <p>Linear Sync Engine</p>
              <p className="text-text-secondary md:w-3/5 lg:w-2/5">
                Built with a high-performance architecture and an obsessive
                focus on speed.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <p>Enterprise-ready security</p>
              <p className="text-text-secondary md:w-3/5 lg:w-2/5">
                Best-in-class security practices keep your work safe and secure
                at every layer.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <p>Engineered for scale</p>
              <p className="text-text-secondary md:w-3/5 lg:w-2/5 ">
                Built for teams of all sizes. From early-stage startups to
                global enterprises.
              </p>
            </div>
          </div>
          <div className="flex flex-row max-w-sm">
            <div className="border-1 border-border p-4">
              <img src="img/soc.avif" />
              <div className="text-xs text-text-secondary text-center pt-2">
                SOC 2
                <img className="inline ml-0.5" src="svgs/certified.svg" />
              </div>
            </div>

            <div className="border-1 border-border p-4">
              <img src="img/gdpr.avif" />
              <div className="text-xs text-text-secondary text-center pt-2">
                GDPR
                <img className="inline ml-0.5" src="svgs/certified.svg" />
              </div>
            </div>
            <div className="border-1 border-border p-4">
              <img src="img/hippa.avif" alt="" />
              <div className="text-xs text-text-secondary text-center pt-2">
                HIPPA
                <img className="inline ml-0.5" src="svgs/certified.svg" />
              </div>
            </div>
          </div>
        </div>

        {/* Image Wrapper */}
        <div className="lg:w-3/5 hidden lg:block">
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
