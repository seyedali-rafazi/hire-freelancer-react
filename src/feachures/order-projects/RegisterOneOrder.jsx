import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import CreateProjectForm from "../projects/CreateProjectForm";
import Modal from "../../ui/Modal";
import useUser from "../authentication/useUser";

function RegisterOneOrder() {
  const [open, setOpen] = useState(false);
  const { user } = useUser();

  if (user?.role !== "OWNER") return null;

  return (
    <div>
      <div className="flex justify-between items-center my-3">
        <h2 className="font-bold text-xl">پروژه‌های شما</h2>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-primary-700 px-3 py-2 rounded-2xl hover:bg-primary-500 transition-all duration-300"
        >
          <span className="text-white">ثبت پروژه جدید</span>
          <TbPlus className="w-5 h-5 text-white" />
        </button>
      </div>
      <Modal
        title="اضافه کردن پروژه جدید"
        open={open}
        onClose={() => setOpen(false)}
      >
        <CreateProjectForm onClose={() => setOpen(false)} />
      </Modal>
      <span className="w-full h-0.5 bg-secondery-100 border block rounded-full" />
    </div>
  );
}

export default RegisterOneOrder;
