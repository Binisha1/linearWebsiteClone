import { useNavigate } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const navItems = [
  { title: "Product", link: "/product" },
  { title: "Resources", link: "/resources" },
  { title: "Pricing", link: "/pricing" },
  { title: "Customers", link: "/customers" },
  { title: "Contact", link: "/contact" },
];
const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className=" bg-background border-b border-border fixed left-0 top-0 w-full z-50  ">
      <div className="space-container  px-1 py-2 flex items-center justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="svgs/logo.svg" className="w-3 h-3 " />
          <span className="text-lg ml-2 font-normal text-text-primary">
            Linear
          </span>
        </div>
        <nav>
          <ul className=" hidden lg:flex  space-x-4">
            {navItems.map((navItem, index) => (
              <li
                key={index}
                className="text-text-secondary hover:text-text-primary text-xs transition cursor-pointer"
                onClick={() => navigate(navItem.link)}
              >
                {navItem.title}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4 ">
          <a href="" className="button-secondary">
            Log in
          </a>
          <button className="button-primary">Sign up</button>

          <button
            onClick={() => {
              setHamburgerOpen((prev) => !prev);
            }}
            className={` lg:hidden`}
          >
            <span className="sr-only">Toggle menu</span>
            {hamburgerOpen}
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
