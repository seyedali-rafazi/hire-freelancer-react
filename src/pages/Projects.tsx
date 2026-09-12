"use client";
import React, { Suspense } from "react";
import ProjectsTabel from "../feachures/projects/ProjectsTabel";
import Loading from "../ui/Loading";

function Projects() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <ProjectsTabel />
      </Suspense>
    </div>
  );
}

export default Projects;
