import React, { useState } from "react";
import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";
import { HiPlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";
import ProjectHeader from "./ProjectHeader";
import Empty from "../../ui/Empty";
function ProjectsTabel() {
  const { projects, isLoading } = useOwnerProjects();
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
    <div>
      <ProjectHeader />
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>دسته بندی پروژه</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>تگ ها</th>
          <th>فریلنسر</th>
          <th>وضعیت پروژه</th>
          <th>عملیات</th>
          <th> درخواست ها</th>
        </Table.Header>
        <Table.Body>
          {projects.map((project, index) => (
            <ProjectRow key={project._id} project={project} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProjectsTabel;
