import Button from "@/components/ui/Button";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full border-accent accent border p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-extrabold text-center ">
          Log in to your account
        </h2>
        <p className="mt-2 text-sm text-center ">
          Enter your credentials below
        </p>
        <div className="mt-6">
          <Button />
        </div>
      </div>
    </div>
  );
}
