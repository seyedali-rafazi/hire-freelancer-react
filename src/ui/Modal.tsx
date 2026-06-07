import { useEffect } from "react";
import { createPortal } from "react-dom";
import { HiOutlineX } from "react-icons/hi";
import type { ModalProps } from "../types";

function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-secondery-200 pb-3 mb-6">
          <p className="text-secondery-800 font-bold text-base">{title}</p>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-secondery-100 transition-colors"
            aria-label="بستن"
          >
            <HiOutlineX className="w-5 h-5 text-secondery-500" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
