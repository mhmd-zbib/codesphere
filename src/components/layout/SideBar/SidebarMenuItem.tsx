// SidebarMenuItem.tsx

import Link from "next/link";
import React, { ReactNode } from "react";

interface SidebarMenuItemProps {
  children: ReactNode;
  href: string;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  children,
  href,
}) => {
  return (
    <li className="text-white hover:bg-shadow py-2 px-4 rounded cursor-pointer">
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default SidebarMenuItem;
