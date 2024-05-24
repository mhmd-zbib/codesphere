import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SideBar from "@/components/layout/SideBar";
import ApolloProviderComponent from "@/utils/providers/ApolloPorvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ApolloProviderComponent>
        <body className={inter.className}>
          <Navbar />
          <div className="flex flex-row  container mx-auto  h-full flex-1  gap-4  ">
            <SideBar />
            {children}
          </div>
        </body>
      </ApolloProviderComponent>
    </html>
  );
}