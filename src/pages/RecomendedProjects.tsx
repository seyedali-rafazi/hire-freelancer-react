"use client";
import { Suspense } from "react";
import Loading from "../ui/Loading";
import RecomendedProjectsLayout from "../feachures/recomended-projects/RecomendedProjectsLayout";

function RecomendedProjects() {
  return (
    <div className="container lg:max-w-7xl px-4 pb-12">
      <Suspense fallback={<Loading />}>
        <RecomendedProjectsLayout />
      </Suspense>
    </div>
  );
}

export default RecomendedProjects;
