import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Navbar />

      <section className="flex-1 flex flex-col">
        {children}
      </section>
    </main>
  );
};

export default RootLayout;
