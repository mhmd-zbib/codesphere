"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface SidebarMenuItemProps {
  children: ReactNode;
  href: string;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  children,
  href,
}) => {
  const pathName = usePathname();

  const isActive = pathName.startsWith(href);

  const activeStyle = isActive
    ? "bg-accent hover:bg-accent"
    : " hover:bg-shadow ";

  return (
    <Link
      className={`text-white py-2 px-4 rounded cursor-pointer flex-1 ${activeStyle} `}
      href={href}>
      {children}
    </Link>
  );
};

export default SidebarMenuItem;
