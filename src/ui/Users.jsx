import React from "react";
import UsersTable from "../feachures/admin/users/UsersTable";

function Users() {
  return (
    <div>
      <h1 className="font-black text-secondery-700 text-xl mb-8">کاربران</h1>
      <UsersTable />
    </div>
  );
}

export default Users;
