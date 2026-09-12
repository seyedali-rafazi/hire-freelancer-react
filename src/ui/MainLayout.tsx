import type { ReactNode } from "react";
import HomeHeader from "./HomeHeader";
import Footer from "./Footer";

interface MainLayoutProps {
  children?: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-secondery-0">
      <HomeHeader />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
