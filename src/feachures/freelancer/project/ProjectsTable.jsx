import React from "react";
import Table from "../../../ui/Table";
import Loading from "../../../ui/Loading";
import Empty from "../../../ui/Empty";
import useProjects from "../../../hooks/useProjects";
import ProjectRow from "./ProjectRow";
import ProjectHeader from "../../projects/ProjectHeader";

export default function ProjectsTable() {
  const { isLoading, projects } = useProjects();
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!projects.length) {
    return (
      <div>
        <Empty resourceName="هیچ پروژه ای یافت نشد" />
        <ProjectHeader />
      </div>
    );
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
