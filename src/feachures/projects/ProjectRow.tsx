import React, { useState } from "react";
import Table from "../../ui/Table";
import { toPersianNumbersWithComma } from "../../utils/formatNumber";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { truncateText } from "../../utils/truncateText";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removePproject } = useRemoveProject();
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center max-w-[200px]">
          {project.tags.map((tag) => (
            <span key={tag} className="badge badge--secondary">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <button onClick={() => setIsEditOpen(true)}>
          <TbPencilMinus className="icon icon--edit" />
        </button>
        <Modal
          title={`ویرایش ${project.title}`}
          open={isEditOpen}
          onClose={() => setIsEditOpen(false)}>
          <CreateProjectForm
            projectToEdit={project}
            onClose={() => setIsEditOpen(false)}
          />
        </Modal>
        <button onClick={() => setIsDeleteOpen(true)}>
          <HiOutlineTrash className="icon icon--error" />
        </button>
        <Modal
          title={`حذف ${project.title}`}
          open={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}>
          <ConfirmDelete
            resurse={project.title}
            onClose={() => setIsDeleteOpen(false)}
            onConfirm={() =>
              removePproject(project._id, {
                onSuccess: () => setIsDeleteOpen(false),
              })
            }
            disabled={false}
          />
        </Modal>
      </td>
      <td>
        <Link className="flex justify-center" to={project._id}>
          <HiEye className="icon icon--primary " />
        </Link>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
