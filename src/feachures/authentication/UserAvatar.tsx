import React, { useState } from "react";
import useUser from "./useUser";
import { RiUserLine } from "react-icons/ri";
import { RxCaretDown } from "react-icons/rx";
import AccounDropDown from "../../ui/AccounDropDown";
import Login from "./Login";
import Loading from "../../ui/Loading";

function UserAvatar() {
  const { isLoading, user } = useUser();
  const [open, setOpen] = useState(false);

  if (isLoading) {
    return <Loading width="24" />;
  }

  return user ? (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center text-secondery-0 bg-primary-900 rounded-2xl p-2 hover:bg-primary-700 transition-all duration-300 "
      >
        <RiUserLine className="w-6 h-6" />
        <RxCaretDown className="w-6 h-6" />
      </button>
      <AccounDropDown user={user} open={open} onClose={() => setOpen(false)} />
    </div>
  ) : (
    <Login />
  );
}

export default UserAvatar;
