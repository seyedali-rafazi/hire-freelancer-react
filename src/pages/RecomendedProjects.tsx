"use client";
import { Suspense } from "react";
import Loading from "../ui/Loading";
import RecomendedProjectsLayout from "../feachures/recomended-projects/RecomendedProjectsLayout";

function RecomendedProjects() {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<Loading />}>
        <RecomendedProjectsLayout />
      </Suspense>
    </div>
  );
}

export default RecomendedProjects;
