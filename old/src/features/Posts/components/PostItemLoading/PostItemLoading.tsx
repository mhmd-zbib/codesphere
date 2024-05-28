import Card from "@/components/ui/Card";
import React from "react";

export default function PostItemLoading() {
  return (
    <Card>
      <div className="flex flex-row gap-4">
        <div className="rounded-full bg-accent size-12 animate-pulse " />
        <div className="mt-4 h-4 w-24 animate-pulse rounded-md bg-accent" />
      </div>
      <div className="mt-4 h-4 w-full animate-pulse rounded-md bg-accent" />{" "}
      <div className="mt-4 h-4 w-full animate-pulse rounded-md bg-accent" />{" "}
      <div className="mt-4 h-4 w-[37%] animate-pulse rounded-md bg-accent" />
    </Card>
  );
}
