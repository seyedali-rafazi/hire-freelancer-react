"use client";
import React, { Suspense } from "react";
import UsersTable from "../feachures/admin/users/UsersTable";
import Loading from "./Loading";

function Users() {
  return (
    <div>
      <h1 className="font-black text-secondery-700 text-xl mb-8">کاربران</h1>
      <Suspense fallback={<Loading />}>
        <UsersTable />
      </Suspense>
    </div>
  );
}

export default Users;
