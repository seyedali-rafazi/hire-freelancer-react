import React from "react";

function ConfirmDelete({ resurse, onClose, disabled, onConfirm }) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8 ">
        آیا از حذف {resurse} مطمئن هستید؟
      </h2>
      <div className="flex justify-between items-center gap-x-16">
        <button
          onClick={onClose}
          disabled={disabled}
          className="btn btn--primary flex-1">
          لغو
        </button>
        <button
          onClick={onConfirm}
          disabled={disabled}
          className="btn btn--danger flex-1 py-3 hover:bg-rose-700 hover:text-primary-100">
          تایید
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
