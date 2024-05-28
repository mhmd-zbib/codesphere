import { Fragment } from "react";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <div className="flex flex-col min-h-screen  ">
        <main className="flex-grow flex items-center justify-center">
          <div className="w-full px-4 sm:max-w-md">{children}</div>
        </main>
      </div>
    </Fragment>
  );
}
