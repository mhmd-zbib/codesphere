"use client";
import React, { useState } from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarToggle from "./NavbarToggle";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 border-secondary      ">
      <div className="px-4 py-4">
        <div className="flex justify-between items-center">
          <NavbarBrand />
          <NavbarToggle isOpen={isOpen} toggleMenu={toggleMenu} />
          <NavbarMenu isOpen={isOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
