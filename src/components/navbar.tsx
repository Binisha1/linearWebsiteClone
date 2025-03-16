import { useNavigate } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Button from "./button";
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
    <div className=" bg-background border-border fixed left-0 top-0 w-full z-50  h-16">
      <div className="space-container pt-1  px-1 py-1 flex items-center justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="linear-icon.png" className="w-6 h-6 " />
          <span className="text-lg  font-medium">Linear</span>
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
