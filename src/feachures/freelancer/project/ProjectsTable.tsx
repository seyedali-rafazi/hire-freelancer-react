import Table from "../../../ui/Table";
import Loading from "../../../ui/Loading";
import Empty from "../../../ui/Empty";
import useProjects from "../../../hooks/useProjects";
import ProjectRow from "./ProjectRow";

export default function ProjectsTable() {
  const { isLoading, projects = [] } = useProjects();

  if (isLoading) return <Loading />;

  if (!projects.length) {
    return <Empty resourceName="هیچ پروژه‌ای یافت نشد" />;
  }

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت پروژه</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
