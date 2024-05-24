// components/NavbarBrand.js

import Link from "next/link";

const NavbarBrand = () => {
  return (
    <div className="flex items-center">
      <Link
        className="text-white text-lg font-semibold hover:text-gray-300"
        href="/">
        Code Sphere
      </Link>
    </div>
  );
};

export default NavbarBrand;
