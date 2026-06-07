import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

function DarkmodeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>
      <button onClick={toggleDarkMode} className="items-center flex">
        {isDarkMode ? (
          <HiOutlineSun className="icon text-primary-900 h-6 w-6" />
        ) : (
          <HiOutlineMoon className="icon text-primary-900 h-6 w-6" />
        )}
      </button>
    </div>
  );
}

export default DarkmodeToggle;
