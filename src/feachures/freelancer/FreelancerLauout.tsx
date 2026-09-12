import React, { ReactNode } from "react";
import AppLayout from "../../ui/AppLayout";
import SideBar from "../../ui/SideBar";
import CustomeNavlink from "../../ui/CustomeNavlink";
import { HiCollection, HiHome } from "react-icons/hi";

interface FreelancerLayoutProps {
  children?: ReactNode;
}

function FreelancerLauout({ children }: FreelancerLayoutProps) {
  const sidebar = (
    <SideBar>
      <CustomeNavlink path="/freelancer/dashboard">
        <HiHome />
        <span>داشبورد</span>
      </CustomeNavlink>
      <CustomeNavlink path="/freelancer/projects">
        <HiCollection />
        <span>پروژه ها</span>
      </CustomeNavlink>
      <CustomeNavlink path="/freelancer/proposals">
        <HiCollection />
        <span>درخواست ها</span>
      </CustomeNavlink>
    </SideBar>
  );

  return <AppLayout sidebar={sidebar}>{children}</AppLayout>;
}

export default FreelancerLauout;
