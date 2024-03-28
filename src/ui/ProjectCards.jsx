import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const listOrderSm = {
  oneSm: "sm:grid-cols-1",
  twoSm: "sm:grid-cols-2",
  threeSm: "sm:grid-cols-3",
};

const listOrderMd = {
  oneMd: "md:grid-cols-1",
  twoMd: "md:grid-cols-2",
  threeMd: "md:grid-cols-3",
};

function ProjectCards({ projects, smOrder, mdOrder }) {
  if (projects.length == 0)
    return (
      <div className="flex justify-center">
        <p className="font-bold text-secondery-800">هیچ پروژه ای یافت نشد.</p>{" "}
      </div>
    );
    
  return (
    <div
      className={`grid grid-cols-1  ${listOrderSm[smOrder]} ${listOrderMd[mdOrder]} gap-3`}>
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}

export default ProjectCards;
