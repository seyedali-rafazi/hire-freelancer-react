import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayout({ children }) {
  return (
    <div className="flex flex-col">
      <div>
        <Header children={children} />
      </div>
      <div className="flex min-h-screen ">
        <div className="w-1/5 hidden lg:block">{children}</div>
        <div className="bg-secondery-100 p-8 w-full lg:w-4/5">
          <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
