import { motion } from "motion/react";
const SetProduction2 = () => {
  return (
    <div className="space-container text-normal">
      <div className="flex flex-row justify-between">
        <div className="flex-col max-w-sm">
          <p className="text-text-primary ">Manage projects end-to-end</p>
          <p className="text-text-secondary">
            Consolidate specs, milestones, tasks, and other documentation in one
            centralized location.
          </p>
          <ProjectOverview />
        </div>
        <div className="flex-col max-w-sm">
          <p className="text-text-primary ">Project updates</p>
          <p className="text-text-secondary mb-20">
            Communicate progress and project health with built-in project
            updates.
          </p>
          <div className="relative ">
            <div className="absolute top-0 left-0 opacity-40 hover:opacity-100">
              <SlantedCard color="var(--color-text-red)" />
            </div>
            <div className="absolute top-8 left-6 opacity-40 hover:opacity-100">
              <SlantedCard color="var(--color-text-orange)" />
            </div>
            <div className="absolute top-26 left-20 hover:opacity-100">
              <SlantedCard color="var(--color-text-green)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function ProjectOverview() {
  return (
    <div
      className="mt-6 tracking-normal font-medium border-1 border-bg-translucent px-2 py-5 rounded-2xl max-w-xs 
    bg-[linear-gradient(134deg,rgba(255,255,255,0.2),rgba(255,255,255,0.01),rgba(255,255,255,0)_55%)]"
    >
      <h2 className="text-sm mb-2">Project Overview</h2>
      <div className="grid grid-cols-2 text-xs text-text-secondary">
        <div className="space-y-2">
          <div>properties</div>
          <div>Resources</div>
          <div>Milestones</div>
        </div>
        <div className="space-y-2">
          <div>In Progress ENG </div>
          <div>Exploration User interviews</div>
          <div>Design Review 100%</div>
          <div>Internal Alpha</div>
          <div>GA</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
function SlantedCard({ color }) {
  return (
    <motion.div
      whileHover={{ y: -20 }}
      transition={{
        type: "spring",
        duration: 0.1,
      }}
      className=" text-xs tracking-normal   hover:brightness-150 flex flex-col items-center transition duratio"
    >
      <div
        className={` hover:opacity-100 max-w-xs p-3 rounded-2l  bg-text-black
     
      backdrop-blur-md transform rotate-[-5deg]`}
      >
        <p
          style={{ color }}
          className={`font-semibold flex items-center gap-1`}
        >
          On track
        </p>

        <p className="mt-2 text-text-primary">
          We are ready to launch next Thursday
        </p>
        <p className="mt-2 text-text-secondary">Sep 8</p>
      </div>
    </motion.div>
  );
}

export default SetProduction2;
