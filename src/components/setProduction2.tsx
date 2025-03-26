import { motion } from "motion/react";
import { useState } from "react";
import FeatureCard from "./featureCard";

const SetProduction2 = () => {
  return (
    <div className="space-container pt-0 pb-0 text-normal">
      <div className="flex flex-col lg:flex-row xl:mt-30 justify-between">
        <div className="flex-col max-w-sm">
          <p className="text-text-primary font-semibold">
            Manage projects end-to-end
          </p>
          <p className="text-text-secondary">
            Consolidate specs, milestones, tasks, and other documentation in one
            centralized location.
          </p>
          <ProjectOverview />
        </div>
        <div className="flex-col max-w-sm">
          <p className="text-text-primary font-semibold ">Project updates</p>
          <p className="text-text-secondary mb-20">
            Communicate progress and project health with built-in project
            updates.
          </p>
          <div className="relative h-80 overflow-hidden">
            <div className="absolute top-0 left-0 opacity-30 hover:opacity-100">
              <SlantedCard
                color="var(--color-text-red)"
                emoji="svgs/slantcard1.svg"
                text="Off track"
              />
            </div>
            <div className="absolute top-8 left-6 opacity-40 hover:opacity-100">
              <SlantedCard
                color="var(--color-text-orange)"
                emoji="svgs/slantcard2.svg"
                text="At risk"
              />
            </div>
            <div className="absolute top-26 left-20 hover:opacity-100">
              <SlantedCard
                color="var(--color-text-green)"
                emoji="svgs/slantcard3.svg  "
                text="On track"
              />
            </div>
          </div>
        </div>
      </div>
      <Ideate />
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 items-center justify-center mt-30">
          <FeatureCard
            emoji={"svgs/feature1.svg"}
            title={"Initiatives"}
            subtitle={"Coordinate strategic product efforts."}
          />
          <FeatureCard
            emoji={"svgs/feature2.svg"}
            title={"Cross-team projects"}
            subtitle={"Collaborate across teams and departments."}
          />
          <FeatureCard
            emoji={"svgs/feature3.svg"}
            title={"Milestones"}
            subtitle={"Break projects down into concrete phases."}
          />
          <FeatureCard
            emoji={"svgs/feature4.svg"}
            title={"Progress insights"}
            subtitle={"Track scope, velocity, and progress over time."}
          />
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
        <div className="space-y-2 text-xs tracking-tighter">
          <div>
            <img src="svgs/projecto1.svg" className="inline mr-1 " alt="" />
            In Progress
            <img src="svgs/projecto2.svg" className="inline m-1 " alt="" />
            EN
          </div>
          <div>
            {" "}
            <img src="svgs/projecto4.svg" className="inline mr-1 " alt="" />
            Exploration User interviews
          </div>
          <div>
            {" "}
            <img src="svgs/projecto6.svg" className="inline mr-1 " alt="" />
            Design Review 100%
          </div>
          <div>
            {" "}
            <img src="svgs/projecto6.svg" className="inline mr-1 " alt="" />
            Internal Alpha
          </div>
          <div>
            {" "}
            <img src="svgs/projecto4.svg" className="inline mr-1 " alt="" />
            GA
          </div>
        </div>
      </div>
    </div>
  );
}
interface SlantedCardProps {
  color: string;
  emoji: string;
  text: string;
}
function SlantedCard({ color, emoji, text }: SlantedCardProps) {
  return (
    <motion.div
      whileHover={{ y: -20 }}
      transition={{
        type: "spring",
        duration: 0.1,
      }}
      className=" text-xs tracking-normal   hover:brightness-120 flex flex-col items-center transition duration-200"
    >
      <div
        className={` hover:opacity-100 max-w-xs p-3 rounded-2l  bg-text-black transform rotate-[-5deg]`}
      >
        <p
          style={{ color }}
          className={`font-semibold flex items-center gap-1`}
        >
          <img src={emoji} alt="" />
          {text}
        </p>

        <p className="mt-2 text-text-primary">
          We are ready to launch next Thursday
        </p>
        <p className="mt-2 text-text-secondary">Sep 8</p>
      </div>
    </motion.div>
  );
}
interface IdeateComponentProps {
  emoji: string;
  title: string;
  subtitle: string;
}
const IdeateComponent = ({ emoji, title, subtitle }: IdeateComponentProps) => {
  return (
    <div className="px-15 pt-25 max-w-md">
      <div className="mb-6">
        <img src={emoji} alt="" />
      </div>
      <div className="text-sm mb-2">{title}</div>
      <p className="text-xs mb-2 text-text-secondary">{subtitle}</p>
      <img src="svgs/svgcolla.svg" alt="" />
    </div>
  );
};

const Ideate = () => {
  const mapping = [
    {
      label: "Collaborative documents",
      content: (
        <IdeateComponent
          emoji={"svgs/people.svg"}
          title={"Collaborate on ideas"}
          subtitle={
            "Collaborate on product ideas and work together on feature specs in realtime, multiplayer project documens. Add **style-- and ## structure with rich text formatiing options."
          }
        />
      ),
    },
    {
      label: "Inline comments",
      content: (
        <IdeateComponent
          emoji={"svgs/people.svg"}
          title={"Collect feedback"}
          subtitle={
            "Discuss ideas directly in context and refine your project specifications with inline comments."
          }
        />
      ),
    },
    {
      label: "Text-to-commands",
      content: (
        <IdeateComponent
          emoji={"svgs/textto.svg"}
          title={"Convert text to issues"}
          subtitle={
            " Implement contextual memory Better bias filtering algorithms Upgrade model selection logic"
          }
        />
      ),
    },
  ];
  const [selectedTab, setSelectedTab] = useState(mapping[0]);
  return (
    <div className="flex flex-col lg:flex-row mt-8 justify-between">
      <div className="flex flex-col mt-15 lg:w-50">
        <h2 className="font-semibold text-md mb-4">
          Ideate and specify what to build next
        </h2>
        <ul className="mb-4">
          {mapping.map((item) => (
            <li
              key={item.label}
              className={`flex text-sm mb-1 items-center cursor-pointer `}
              onClick={() => {
                setSelectedTab(item);
              }}
            >
              {/* Left border indicator */}
              <div
                className={`h-4 w-1 mr-1 rounded-sm transition-all ${
                  item.label === selectedTab.label
                    ? "bg-text-green"
                    : "bg-button-background"
                }`}
              ></div>
              {/* Tab label */}
              <span
                className={`${
                  item.label == selectedTab.label
                    ? "text-text-primary"
                    : "text-text-secondary opacity-70"
                } hover:opacity-100`}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <div className="relative overflow-hidden">
          <img
            className="max-w-md lg:mr-20"
            src="svgs/collaborative.svg"
            alt=""
          />
          <div className="absolute inset-0  flex ">{selectedTab.content}</div>
        </div>
      </div>
    </div>
  );
};

export default SetProduction2;
