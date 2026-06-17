import { Outlet } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-secondery-0">
      <HomeHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
