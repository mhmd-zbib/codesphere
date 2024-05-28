import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-md w-full border-accent accent border p-8 rounded-xl shadow-lg flex flex-1 ">
      {children}
    </div>
  );
}

export default Container;
