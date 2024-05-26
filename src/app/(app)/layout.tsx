import Navbar from "@/components/layout/Navbar";
import SideBar from "@/components/layout/SideBar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-row  container mx-auto  h-full flex-1  gap-4  ">
        <SideBar />
        {children}
      </div>
    </>
  );
}
