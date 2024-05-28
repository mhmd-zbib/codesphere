import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarLinkProps {
  href: string;
  children?: React.ReactNode;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, children }) => {
  const pathName = usePathname();

  const isActive = pathName.startsWith(href);

  // Define a variable for the active color
  const activeColor = isActive ? "bg-blue-500" : "bg-onyx";

  return (
    <Link
      href={href}
      className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-onyx mr-4 p-4 rounded-full py-2 ${activeColor}`}>
      {children}
    </Link>
  );
};

export default NavbarLink;
