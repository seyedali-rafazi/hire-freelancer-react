"use client";
import React from "react";
import useUsers from "../useUsers";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import UsersRow from "./UsersRow";

function UsersTable() {
  const { isLoading, users } = useUsers();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>شماره تلفن</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {users?.map((user, index) => (
          <UsersRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UsersTable;
