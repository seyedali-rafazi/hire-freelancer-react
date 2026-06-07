import React from "react";
import AppLayout from "../../ui/AppLayout";
import SideBar from "../../ui/SideBar";
import CustomeNavlink from "../../ui/CustomeNavlink";
import { HiCollection, HiHome } from "react-icons/hi";

function FreelancerLauout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomeNavlink path="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomeNavlink>
        <CustomeNavlink path="projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomeNavlink>
        <CustomeNavlink path="proposals">
          <HiCollection />
          <span>درخواست ها</span>
        </CustomeNavlink>
      </SideBar>
    </AppLayout>
  );
}

export default FreelancerLauout;
