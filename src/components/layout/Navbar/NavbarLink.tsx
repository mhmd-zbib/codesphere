import Link from "next/link";

interface NavbarLinkProps {
  href: string;
  children?: React.ReactNode;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, children }) => {
  return (
    <Link
      className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-onyx mr-4 p-4 rounded-full py-2"
      href={href}>
      {children}
    </Link>
  );
};

export default NavbarLink;
