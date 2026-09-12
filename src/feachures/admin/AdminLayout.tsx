import React, { ReactNode } from "react";
import AppLayout from "../../ui/AppLayout";
import SideBar from "../../ui/SideBar";
import CustomeNavlink from "../../ui/CustomeNavlink";
import {
  HiCollection,
  HiHome,
  HiOutlineViewGrid,
  HiUser,
} from "react-icons/hi";

interface AdminLayoutProps {
  children?: ReactNode;
}

function AdminLayout({ children }: AdminLayoutProps) {
  const sidebar = (
    <SideBar>
      <CustomeNavlink path="/admin/dashboard">
        <HiHome />
        <span>داشبورد</span>
      </CustomeNavlink>
      <CustomeNavlink path="/admin/users">
        <HiUser />
        <span>کاربران</span>
      </CustomeNavlink>
      <CustomeNavlink path="/admin/projects">
        <HiCollection />
        <span>پروژه ها</span>
      </CustomeNavlink>
      <CustomeNavlink path="/admin/proposals">
        <HiOutlineViewGrid />
        <span>درخواست ها</span>
      </CustomeNavlink>
    </SideBar>
  );

  return <AppLayout sidebar={sidebar}>{children}</AppLayout>;
}

export default AdminLayout;
