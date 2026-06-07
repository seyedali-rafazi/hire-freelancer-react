import React, { useState } from "react";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ChangeUserStatus from "./ChangeUserStatus";

const userStatus = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function UsersRow({ user, index }) {
  const { email, name, phoneNumber, role, status } = user;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{role}</td>
      <td>
        <span className={`badge ${userStatus[status].className} `}>
          {userStatus[status].label}
        </span>
      </td>
      <td>
        <Modal
          title="تغییر وضعیت کاربر"
          open={open}
          onClose={() => setOpen(false)}>
          <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
        <button
          className="hover:text-primary-600 transition-all duration-300"
          onClick={() => setOpen(true)}>
          تغییر وضعیت
        </button>
      </td>
    </Table.Row>
  );
}

export default UsersRow;
