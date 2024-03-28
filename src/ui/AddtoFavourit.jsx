import React from "react";
import { useAddToFavourit } from "../context/AddToFavouitContext";
import { TbHeart, TbHeartFilled } from "react-icons/tb";

function AddtoFavourit({ project }) {
  const { myFavourits, handelMyFavourits, handelDeleteFavourit } =
    useAddToFavourit();
  return (
    <div>
      {myFavourits.some((fav) => fav._id === project._id) ? (
        <button onClick={() => handelDeleteFavourit(project._id)}>
          <TbHeartFilled className="w-6 h-6 text-primary-700" />
        </button>
      ) : (
        <button onClick={() => handelMyFavourits(project)}>
          <TbHeart className="w-6 h-6 text-secondery-800" />
        </button>
      )}
    </div>
  );
}

export default AddtoFavourit;
