import React, { useState } from "react";
import useUser from "./useUser";
import useOutsideClick from "../../hooks/useOutsideClick";
import { HiOutlinePencil } from "react-icons/hi";
import { RiUserLine } from "react-icons/ri";
import { RxCaretDown } from "react-icons/rx";
import { TbHome, TbReportSearch } from "react-icons/tb";
import Logout from "./Logout";
import AccounDropDown from "../../ui/AccounDropDown";
import Loading from "../../ui/Loading";

function UserAvatar() {
  const { user, isLoading } = useUser();
  const [open, setOpen] = useState(false);

  if (isLoading) return <Loading />;

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center text-secondery-0 bg-primary-900 rounded-2xl p-2 hover:bg-primary-700 transition-all duration-300 ">
        <RiUserLine className="w-6 h-6" />
        <RxCaretDown className="w-6 h-6" />
      </button>
      <AccounDropDown user={user} open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default UserAvatar;
