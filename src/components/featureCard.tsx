interface FeatureCardProps {
  emoji: string;
  title: string;
  subtitle: string;
}
const FeatureCard = ({ emoji, title, subtitle }: FeatureCardProps) => {
  return (
    <div className=" lg:w-40 tracking-tight">
      <div className="flex flex-col ">
        <div className=" flex flex-col md:flex-row ">
          <img src={emoji} className="w-3 h-3" alt="" />{" "}
          <span className="mt-1 md:mt-0 md:ml-2 text-xs text-text-primary">
            {title}
          </span>
        </div>
        <p className="mt-2 text-xs text-text-secondary">{subtitle}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
