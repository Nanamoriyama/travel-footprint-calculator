import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="">
      <div className="flex justify-between p-4">
        <div className="text-xl">Travel Footprint Calculator</div>
        <div className="flex space-x-4 p-1">
          <div>Route</div>
          <div>Inpact</div>
          <div>Balance</div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
