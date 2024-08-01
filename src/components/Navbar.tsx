import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="z-10 w-full flex flex-col items-center">
      <div className="text-center pt-4">Travel Footprint Calculator</div>
      <div className="align-element py-8 flex flex-col sm:flex-row sm:gap-x-10 sm:py-8 justify-center items-center">
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
