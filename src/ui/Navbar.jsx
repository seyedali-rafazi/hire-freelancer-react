import React, { useEffect } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { HiOutlineX } from "react-icons/hi";

function Navbar({ open, onClose, children }) {
  const modalRef = useOutsideClick(onClose);

  // Add a class to the body when the modal is open to prevent scrolling
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    <div
      className={`${
        open
          ? "lg:hidden backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-secondery-800 bg-opacity-30 z-50 "
          : ""
      }`}>
      <div
        className={`backdrop-blur-sm max-w-sm fixed top-0 left-0 right-0 bottom-0 w-4/6 h-screen bg-secondery-800 bg-opacity-30 z-50 navbar
  ${open ? "open" : ""}`}>
        <div
          ref={modalRef}
          className="bg-white h-screen w-full">
          <div className="flex justify-end p-5 bg-secondery-0 ">
            <button onClick={onClose}>
              <HiOutlineX className="w-6 h-6 text-secondery-900" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
