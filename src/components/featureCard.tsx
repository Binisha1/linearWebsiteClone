const FeatureCard = ({ emoji, title, subtitle }) => {
  return (
    <div className="w-45 tracking-tight">
      <div className="flex flex-col ">
        <div className=" flex flex-row ">
          <img src={emoji} alt="" />{" "}
          <span className="ml-2 text-xs text-text-primary">{title}</span>
        </div>
        <p className="mt-2 text-xs text-text-secondary">{subtitle}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
