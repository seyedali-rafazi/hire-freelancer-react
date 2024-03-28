import React from "react";
import { NavLink } from "react-router-dom";

function SidebarNavlink({ children, path }) {
  const sidebarStyles =
    "text-sm text-secondery-800 font-bold p-3 hover:bg-primary-700 hover:text-white transition-all duration-200";

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? `${sidebarStyles} bg-primary-700 text-white`
          : `${sidebarStyles}`
      }>
      {children}
    </NavLink>
  );
}

export default SidebarNavlink;
