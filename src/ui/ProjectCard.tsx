import { useState } from "react";

import { toPersianNumbersWithComma } from "../utils/formatNumber";

import toLocalDateShort from "../utils/toLocalDateShort";

import AddtoFavourit from "./AddtoFavourit";

import Modal from "./Modal";

import CreateProposal from "../feachures/freelancer/project/CreateProposal";

import useUser from "../feachures/authentication/useUser";

import toast from "react-hot-toast";

import { HiClock, HiCurrencyDollar } from "react-icons/hi2";



function ProjectCard({ project }) {

  const { user } = useUser();

  const [open, setOpen] = useState(false);

  const isOpen = project.status === "OPEN";



  const handleOpenProject = () => {

    if (!isOpen) {

      toast.error("این پروژه بسته شده و امکان ارسال درخواست وجود ندارد");

      return;

    }

    if (!user) {

      toast.error("برای ارسال درخواست باید وارد سایت شوید");

      return;

    }

    if (user.role === "FREELANCER") {

      setOpen(true);

    } else {

      toast.error("فقط فریلنسرها می‌توانند درخواست ارسال کنند");

    }

  };



  return (

    <div className="project-card group">

      <div className="flex gap-3 items-start justify-between mb-4">

        <div className="flex gap-3 items-center">

          <div className="w-12 h-12 rounded-xl overflow-hidden bg-primary-100 flex-shrink-0">

            <img

              className="w-full h-full object-cover"

              src="/default-project-photo.jpg"

              alt=""

            />

          </div>

          <div>

            <h2 className="font-bold text-secondery-800 group-hover:text-primary-800 transition-colors">

              {project.title}

            </h2>

            <span className="text-secondery-400 text-sm">

              {project.category.title}

            </span>

          </div>

        </div>

        <div className="flex flex-col items-end gap-1">

          {!isOpen && (

            <span className="text-xs font-bold px-2 py-1 rounded-lg bg-red-100 text-red-700 badge-closed">

              بسته

            </span>

          )}

          <AddtoFavourit project={project} />

        </div>

      </div>



      <div className="flex gap-4 text-sm text-secondery-500 mb-4">

        <span className="flex items-center gap-1">

          <HiCurrencyDollar className="w-4 h-4 text-primary-600" />

          {toPersianNumbersWithComma(project.budget)} تومان

        </span>

        <span className="flex items-center gap-1">

          <HiClock className="w-4 h-4 text-primary-600" />

          {toLocalDateShort(project.createdAt)}

        </span>

      </div>



      <div className="flex flex-wrap gap-1.5 mb-4">

        {project.tags?.slice(0, 3).map((tag) => (

          <span

            key={tag}

            className="text-xs bg-primary-50 text-primary-700 px-2.5 py-1 rounded-lg"

          >

            {tag}

          </span>

        ))}

      </div>



      <div className="border-t border-secondery-100 pt-4">

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

          onClick={handleOpenProject}

          disabled={!isOpen}

          className={`w-full py-2.5 px-4 rounded-xl font-bold transition-all duration-300 ${

            isOpen

              ? "btn-action !w-full hover:scale-[1.01]"

              : "bg-secondery-200 text-secondery-500 cursor-not-allowed"

          }`}

        >

          {isOpen ? "ارسال درخواست" : "پروژه بسته شده"}

        </button>

      </div>

    </div>

  );

}



export default ProjectCard;


