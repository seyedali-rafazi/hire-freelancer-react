import React from "react";
import useProject from "../feachures/project/useProject";
import Loading from "../ui/Loading";
import ProjectHeader from "../feachures/project/ProjectHeader";
import ProposalsTable from "../feachures/project/ProposalsTable";

function Project() {
  const { isLoading, project } = useProject();
  if (isLoading) return <Loading />;
  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
}

export default Project;
