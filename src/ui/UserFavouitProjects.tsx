import React from "react";
import UserFavouritProject from "./UserFavouritProject";

const listOrderSm = {
  oneSm: "sm:grid-cols-1",
  twoSm: "sm:grid-cols-2",
  threeSm: "sm:grid-cols-3",
};

const listOrderMd = {
  oneMd: "md:grid-cols-1",
  twoMd: "md:grid-cols-2",
  threeMd: "md:grid-cols-3",
};

function UserFavouitProjects({ myFavourits, smOrder, mdOrder }) {
  if (myFavourits.length == 0)
    return (
      <div className="flex justify-center">
        <p className="font-bold text-secondery-800">
          هیچ پروژه مورد علاقه ای اضافه نکردید.
        </p>
      </div>
    );
  return (
    <div
      className={`grid grid-cols-1  ${listOrderSm[smOrder]} ${listOrderMd[mdOrder]} gap-3`}>
      {myFavourits.map((myFavourit) => (
        <UserFavouritProject key={myFavourit._id} myFavourit={myFavourit} />
      ))}
    </div>
  );
}

export default UserFavouitProjects;
