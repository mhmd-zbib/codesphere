// components/NavbarMenu.js

import React from "react";
import NavbarLink from "./NavbarLink";

interface NavbarMenuProps {
  isOpen: boolean;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ isOpen }) => {
  return (
    <div
      className={`lg:flex lg:items-center lg:w-auto ${
        isOpen ? "block" : "hidden"
      }`}>
      <div className="text-sm lg:flex-grow">
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/about">Explore</NavbarLink>
      </div>
    </div>
  );
};

export default NavbarMenu;
