import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";

const SidebarMenu = () => {
  return (
    <div className="flex gap-2 flex-col">
      <SidebarMenuItem href="/feed">Dashboard</SidebarMenuItem>
      <SidebarMenuItem href="/explore">Projects</SidebarMenuItem>
      <SidebarMenuItem href="/collaborators">Collaborators</SidebarMenuItem>
      <SidebarMenuItem href="/messages">Messages</SidebarMenuItem>
      <SidebarMenuItem href="/settings">Settings</SidebarMenuItem>
    </div>
  );
};

export default SidebarMenu;
