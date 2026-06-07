import useProject from "../feachures/project/useProject";
import Loading from "../ui/Loading";
import ProjectHeader from "../feachures/project/ProjectHeader";
import ProposalsTable from "../feachures/project/ProposalsTable";
import Empty from "../ui/Empty";

function Project() {
  const { isLoading, project, proposals } = useProject();

  if (isLoading) return <Loading />;
  if (!project) return <Empty resourceName="پروژه" />;

  return (
    <div className="space-y-6 animate-fade-in-up">
      <ProjectHeader project={project} />
      <ProposalsTable proposals={proposals} />
    </div>
  );
}

export default Project;
