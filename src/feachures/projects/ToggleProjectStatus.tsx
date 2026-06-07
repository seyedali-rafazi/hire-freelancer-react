import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import useToggelProjectStatus from "./useToggelProjectStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const enabled = project.status === "OPEN" ? true : false;

  const { isUpdating, toggelProjectStatus } = useToggelProjectStatus();

  const toggleHandeler = () => {
    const newStatus = project.status == "OPEN" ? "CLOSED" : "OPEN";
    toggelProjectStatus({
      id: project._id,
      data: { status: newStatus },
    });
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading height={20} width={50} />
      ) : (
        <Toggle
          enabled={enabled}
          label={project.status == "OPEN" ? "باز" : "بسته"}
          onChange={toggleHandeler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
