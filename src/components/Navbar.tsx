import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10">
      <div className="align-element py-8 flex flex-col justify-end sm:flex-row sm:gap-x-16 sm:py-8 mb-8">
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Route
          </Link>

          <Link to="/balance" className="hover:text-gray-400">
            CO2 Offsets
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
