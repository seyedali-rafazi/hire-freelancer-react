import React from "react";
import useUsers from "../useUsers";
import Empty from "../../../ui/Empty";
import Table from "../../../ui/Table";
import UsersRow from "./UsersRow";
import Loading from "../../../ui/Loading";

function UsersTable() {
  const { isLoading, users } = useUsers();
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!users.length) {
    return (
      <div>
        <Empty resourceName="هیچ کاربری یافت نشد" />
      </div>
    );
  }
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UsersRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UsersTable;
