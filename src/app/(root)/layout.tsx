import LeftSidebar from "@/components/layout/LeftSidebar";
import Navbar from "@/components/layout/Navbar";
import RightSidebar from "@/components/layout/RightSidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode[];
}) {
  return (
    <div className="mx-auto container">
      <Navbar />
      <main className="flex flex-row ">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col items-center px-6">
          <div className="w-full max-w-4xl  flex ">{children}</div>
        </section>
        <RightSidebar />
      </main>
    </div>
  );
}
