import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";

const SidebarMenu = () => {
  return (
    <ul>
      <SidebarMenuItem href="/dashboard">Dashboard</SidebarMenuItem>
      <SidebarMenuItem href="/projects">Projects</SidebarMenuItem>
      <SidebarMenuItem href="/collaborators">Collaborators</SidebarMenuItem>
      <SidebarMenuItem href="/messages">Messages</SidebarMenuItem>
      <SidebarMenuItem href="/settings">Settings</SidebarMenuItem>
    </ul>
  );
};

export default SidebarMenu;
