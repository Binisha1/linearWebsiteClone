import { useNavigate } from "react-router";

const navItems = [
  { title: "Product", link: "/product" },
  { title: "Resources", link: "/resources" },
  { title: "Pricing", link: "/pricing" },
  { title: "Customers", link: "/customers" },
  { title: "Contact", link: "/contact" },
];
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="border-b text-sm border-primary max-w-4xl container sticky top-0 mx-auto px-4 py-4 flex items-center justify-between">
      <div
        className="flex items-center pointer-cursor"
        onClick={() => navigate("/")}
      >
        <div className="w-6 h-6 rounded-full bg-white mr-2"></div>
        <span className="text-lg text-primary font-medium">Linear</span>
      </div>
      <div>
        <nav className="hidden md:flex ml-12 space-x-8">
          {navItems.map((navItem, index) => (
            <div
              key={index}
              className="text-tertiary hover:text-primary transition"
              onClick={() => navigate(navItem.link)}
            >
              {navItem.title}
            </div>
          ))}
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <a href="" className="text-secondary hover:text-primary transition">
          Log in
        </a>
        <button
          onClick={() => {}}
          className="bg-foreground text-black px-3 py-2 rounded-md font-medium  transition"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
