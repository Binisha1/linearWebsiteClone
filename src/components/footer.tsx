const footerLinks = [
  {
    title: "Features",
    links: [
      { title: "Plan", link: "#" },
      { title: "Build", link: "#" },
      { title: "Insights", link: "#" },
      { title: "Customer Requests", link: "#" },
      { title: "Linear Asks", link: "#" },
      { title: "Security", link: "#" },
      { title: "Mobile", link: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { title: "Pricing", link: "#" },
      { title: "Method", link: "#" },
      { title: "Integrations", link: "#" },
      { title: "Changelog", link: "#" },
      { title: "Documentation", link: "#" },
      { title: "Download", link: "#" },
      { title: "Switch", link: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Pricing", link: "#" },
      { title: "Method", link: "#" },
      { title: "Integrations", link: "#" },
      { title: "Changelog", link: "#" },
      { title: "Documentation", link: "#" },
      { title: "Download", link: "#" },
      { title: "Switch", link: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Pricing", link: "#" },
      { title: "Method", link: "#" },
      { title: "Integrations", link: "#" },
      { title: "Changelog", link: "#" },
      { title: "Documentation", link: "#" },
      { title: "Download", link: "#" },
      { title: "Switch", link: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { title: "Contact us", link: "#" },
      { title: "Community", link: "#" },
      { title: "X", link: "#" },
      { title: "Github", link: "#" },
      { title: "Youtube", link: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="max-w-[59rem] mx-auto pt-6 mb-6  flex flex-wrap justify-between border-t border-border">
      <div className=" min-w-[8rem] mb-6  ">
        <img src="linear-icon.png" className="w-6 h-6 " />
      </div>
      <div className="flex flex-wrap gap-4">
        {footerLinks.map((column) => (
          <div className="min-w-[8rem]">
            <h3 className="mb-3  text-xs font-medium text-text-primary">
              {column.title}
            </h3>
            <ul>
              {column.links.map((link) => (
                <li className="text-xs mb-2 text-text-secondary">
                  {link.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
