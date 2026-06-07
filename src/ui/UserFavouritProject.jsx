import { useState } from "react";
import AddtoFavourit from "./AddtoFavourit";
import toLocalDateShort from "../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../utils/formatNumber";
import Modal from "./Modal";
import CreateProposal from "../feachures/freelancer/project/CreateProposal";
import useUser from "../feachures/authentication/useUser";
import toast from "react-hot-toast";

function UserFavouritProject({ myFavourit }) {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const isOpen = myFavourit.status === "OPEN";

  const handleProposal = () => {
    if (!isOpen) {
      toast.error("این پروژه بسته شده و امکان ارسال درخواست وجود ندارد");
      return;
    }
    if (!user) {
      toast.error("برای ارسال درخواست باید وارد سایت شوید");
      return;
    }
    if (user.role !== "FREELANCER") {
      toast.error("فقط فریلنسرها می‌توانند درخواست ارسال کنند");
      return;
    }
    setOpen(true);
  };

  return (
    <div className="project-card">
      <div className="flex gap-2 items-center w-full justify-between mb-4">
        <div className="flex gap-3 items-center">
          <div className="h-12 w-12 rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/default-project-photo.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="font-bold text-secondery-800">{myFavourit.title}</h2>
            <span className="text-secondery-400 text-sm">
              دسته {myFavourit.category.title}
            </span>
            <span className="block text-secondery-400 text-sm">
              بودجه: {toPersianNumbersWithComma(myFavourit.budget)} تومان
            </span>
          </div>
        </div>
        <AddtoFavourit project={myFavourit} />
      </div>

      <div className="border-t border-secondery-200 pt-4 flex justify-between items-center">
        <p className="text-secondery-400 text-sm">
          {toLocalDateShort(myFavourit.createdAt)}
        </p>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`درخواست انجام پروژه ${myFavourit.category.title}`}
        >
          <CreateProposal
            projectId={myFavourit._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button
          onClick={handleProposal}
          disabled={!isOpen}
          className={`py-2 px-4 rounded-xl font-bold transition-all ${
            isOpen
              ? "btn-action"
              : "bg-secondery-200 text-secondery-500 cursor-not-allowed text-sm"
          }`}
        >
          {isOpen ? "ارسال درخواست" : "بسته"}
        </button>
      </div>
    </div>
  );
}

export default UserFavouritProject;
