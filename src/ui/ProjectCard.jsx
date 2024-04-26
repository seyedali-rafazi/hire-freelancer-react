import React, { useState } from "react";
import { toPersianNumbersWithComma } from "../utils/formatNumber";
import toLocalDateShort from "../utils/toLocalDateShort";
import AddtoFavourit from "./AddtoFavourit";
import Modal from "./Modal";
import CreateProposal from "../feachures/freelancer/project/CreateProposal";
import useUser from "../feachures/authentication/useUser";
import toast from "react-hot-toast";

function ProjectCard({ project }) {
  const { user } = useUser();
  const [open, setOpen] = useState(false);

  const handelOpenProject = () => {
    if (user) {
      if (user.role == "FREELANCER") {
        setOpen(true);
      }
    } else {
      toast.error("برای ارسال درخواست باید وارد سایت بشوید");
    }
  };
  return (
    <div
      key={project._id}
      className="flex w-3xl flex-col justify-center border rounded-lg shadow-sm py-4 px-3 "
    >
      <div className="flex felx-col flex-wrap gap-5">
        <div className="flex gap-2 items-center w-full justify-between">
          <div className="flex gap-1 items-center">
            <div className="h-12 w-12">
              <img
                className="w-full h-full object-cover"
                src="/default-project-photo.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-wrap justify-start pr-1 ">
              <h2 className=" font-bold text-secondery-800 block w-full pl-3">
                {project.title}
              </h2>
              <span className="block w-full text-secondery-400 text-sm">
                دسته {project.category.title}
              </span>
              <span className="block w-full text-secondery-400 text-sm">
                بودجه : {toPersianNumbersWithComma(project.budget)} تومان
              </span>
            </div>
          </div>
          <AddtoFavourit project={project} />
        </div>

        <span className="w-full rounded-3xl h-0.5 bg-secondery-200 block"></span>

        <div className="flex justify-between items-center w-full">
          <p className="text-secondery-400">
            {toLocalDateShort(project.createdAt)}
          </p>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title={`درخواست انجام پروژه ${project.category.title}`}
          >
            <CreateProposal
              projectId={project._id}
              onClose={() => setOpen(false)}
            />
          </Modal>
          <button
            onClick={handelOpenProject}
            className="bg-primary-900 text-secondery-0 py-2 px-3 rounded-xl hover:bg-primary-800 transition-all duration-300"
          >
            ارسال درخواست
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
