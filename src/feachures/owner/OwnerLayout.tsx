import React, { ReactNode } from "react";
import AppLayout from "../../ui/AppLayout";
import SideBar from "../../ui/SideBar";
import CustomeNavlink from "../../ui/CustomeNavlink";
import { HiCollection, HiHome } from "react-icons/hi";

interface OwnerLayoutProps {
  children?: ReactNode;
}

function OwnerLayout({ children }: OwnerLayoutProps) {
  const sidebar = (
    <SideBar>
      <CustomeNavlink path="/owner/dashboard">
        <HiHome />
        <span>داشبورد</span>
      </CustomeNavlink>
      <CustomeNavlink path="/owner/projects">
        <HiCollection />
        <span>پروژه ها</span>
      </CustomeNavlink>
    </SideBar>
  );

  return <AppLayout sidebar={sidebar}>{children}</AppLayout>;
}

export default OwnerLayout;
