import React from "react";

interface PostContentProps {
  title: string;
  description: string;
}

export default function ContentPost({ title, description }: PostContentProps) {
  return (
    <div className="flex flex-col gap-1">
      <div>
        <h2 className="text-2xl font-bold  ">{title}</h2>
      </div>
      <p className="">{description}</p>
    </div>
  );
}
