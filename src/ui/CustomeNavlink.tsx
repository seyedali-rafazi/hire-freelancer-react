import { NavLink } from "react-router-dom";

export default function CustomeNavlink({ children, path }) {
  const sidebarStyles =
    "flex items-center gap-x-3 text-secondery-600 hover:bg-primary-100/50 hover:text-primary-700 py-2.5 px-3 transition-all duration-300 rounded-xl font-medium text-sm";
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? `${sidebarStyles} bg-primary-100/80 text-primary-600`
            : `${sidebarStyles}`
        }>
        {children}
      </NavLink>
    </li>
  );
}
