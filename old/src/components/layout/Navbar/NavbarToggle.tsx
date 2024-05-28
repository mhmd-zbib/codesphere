import React from "react";

interface NavbarToggleProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavbarToggle: React.FC<NavbarToggleProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        type="button"
        className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.293 7.293a1 1 0 0 1 1.414-1.414L12 10.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6a1 1 0 011-1h14a1 1 0 010 2H5a1 1 0 01-1-1zM4 12a1 1 0 100 2h14a1 1 0 100-2H4zm0 5a1 1 0 100 2h14a1 1 0 100-2H4z"
            />
          )}
        </svg>
      </button>
    </div>
  );
};

export default NavbarToggle;
