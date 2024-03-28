import { useState } from "react";
import Table from "../../../ui/Table";
import { toPersianNumbersWithComma } from "../../../utils/formatNumber";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { truncateText } from "../../../utils/truncateText";
import { MdAssignment } from "react-icons/md";
import Modal from "../../../ui/Modal";
import CreateProposal from "./CreateProposal";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectRow({ project, index }) {
  const { status, title, budget, deadline } = project;
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className} `}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`درخواست انجام پروژه ${title}`}>
          <CreateProposal
            projectId={project._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignment className="icon icon--primary" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
