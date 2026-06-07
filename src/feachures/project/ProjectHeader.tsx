import React from "react";
import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

function ProjectHeader({ project }) {
  const moveBack = useMoveBack();
  return (
    <div className="flex items-center gap-x-4 mb-4">
      <button onClick={moveBack}>
        <HiArrowRight className="icon text-secondery-500" />
      </button>
      <h1 className="font-black text-secondery-700 text-xl">
        لیست درخواست های {project.title}
      </h1>
    </div>
  );
}

export default ProjectHeader;
