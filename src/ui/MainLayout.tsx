"use client";
import type { ReactNode } from "react";
import HomeHeader from "./HomeHeader";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

interface MainLayoutProps {
  children?: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();
  const isMapPage = pathname === "/recomended-projects";

  return (
    <div className={`flex min-h-screen flex-col bg-secondery-0 ${isMapPage ? "h-screen overflow-hidden" : ""}`}>
      <HomeHeader />
      <main className={`flex-1 ${isMapPage ? "h-[calc(100vh-65px)] overflow-hidden" : ""}`}>
        {children}
      </main>
      {!isMapPage && <Footer />}
    </div>
  );
}

export default MainLayout;
