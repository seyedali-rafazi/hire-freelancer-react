"use client";
import React, { Suspense } from "react";
import ProjectsHeader from "../feachures/freelancer/project/ProjectsHeader";
import ProjectsTable from "../feachures/freelancer/project/ProjectsTable";
import Loading from "../ui/Loading";

function SubmitedProjects() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <ProjectsHeader />
        <ProjectsTable />
      </Suspense>
    </div>
  );
}

export default SubmitedProjects;
