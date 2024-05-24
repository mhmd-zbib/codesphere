// Sidebar.js

import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <div className="sticky top-[70px] h-full overflow-y-auto  border border-accent  rounded-xl w-64 py-4 px-2">
      <SidebarHeader />
      <SidebarMenu />
    </div>
  );
};

export default Sidebar;
