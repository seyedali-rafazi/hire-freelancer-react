import React, { useState } from "react";
import UserAvatar from "../feachures/authentication/UserAvatar";
import useUser from "../feachures/authentication/useUser";
import DarkmodeToggle from "./DarkmodeToggle";
import { FaBars } from "react-icons/fa";
import Navbar from "./Navbar";

function Header({ children }) {
  const [open, setOpen] = useState(false);
  const { isLoading, user } = useUser();

  const handelClick = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-secondery-0 py-4 border-b border-secondery-200">
      <div
        className={`container xl: max-w-screen-xl flex items-center justify-between gap-x-8 lg:justify-end ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <button onClick={handelClick}>
          <FaBars className="w-6 h-6 text-primary-700 lg:hidden" />
        </button>
        <Navbar children={children} open={open} onClose={() => setOpen(false)} />
        <div className="flex justify-between items-center gap-4">
          <DarkmodeToggle />
          <UserAvatar />
        </div>
      </div>
    </div>
  );
}

export default Header;