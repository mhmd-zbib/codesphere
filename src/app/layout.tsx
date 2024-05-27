import TanStackQueryProvider from "@/utils/providers/tanstackQuery";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "CodeSphere",
  describe: "CodeSphere developers collab app",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode[];
}) {
  return (
    <TanStackQueryProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background  dark:bg-background font-sans antialiased",
            fontSans.variable
          )}>
          {children}
        </body>
      </html>
    </TanStackQueryProvider>
  );
}
