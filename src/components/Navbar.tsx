import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("nav")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="relative z-10">
      <div className="align-element flex items-center justify-center p-6 space-x-4">
        <div className="text-sm whitespace-nowrap md:text-lg font-bold">
          Travel Footprint Calculator
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button onClick={toggleMenu} className="text-xl">
            <FaBars />
          </button>
        </div>
      </div>
      <hr />
      <div
        className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex justify-between p-6 border-t border-gray-300">
          <Link
            to="/"
            className="block py-2 text-sm md:text-lg hover:text-gray-400 flex-grow text-center"
            onClick={toggleMenu}
          >
            Route
          </Link>
          <Link
            to="/balance"
            className="block py-2 whitespace-nowrap text-sm md:text-lg hover:text-gray-400 flex-grow text-center"
            onClick={toggleMenu}
          >
            CO2 Offsets
          </Link>
          <Link
            to="/aboutus"
            className="block py-2 whitespace-nowrap text-sm md:text-lg hover:text-gray-400 flex-grow text-center"
            onClick={toggleMenu}
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
