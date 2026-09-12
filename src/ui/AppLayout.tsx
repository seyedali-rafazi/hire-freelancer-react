import React, { ReactNode } from "react";
import Header from "./Header";

interface AppLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
}

function AppLayout({ children, sidebar }: AppLayoutProps) {
  const sidebarContent = sidebar ?? null;

  return (
    <div className="flex flex-col">
      <div>
        <Header>{sidebarContent}</Header>
      </div>
      <div className="flex min-h-screen ">
        <div className="w-1/5 hidden lg:block">{sidebarContent}</div>
        <div className="bg-secondery-100 p-8 w-full lg:w-4/5">
          <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
