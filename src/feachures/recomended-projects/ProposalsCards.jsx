import React from "react";
import { toPersianNumbersWithComma } from "../../utils/formatNumber";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید  ",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function ProposalsCards({ proposals }) {
  if (proposals.length == 0)
    return (
      <div className="flex justify-center">
        <p className="font-bold text-secondery-800">هیچ درخواستی یافت نشد.</p>{" "}
      </div>
    );
  return (
    <div>
      {proposals.map((proposal) => (
        <div
          key={proposal._id}
          className="mb-10 border border-secondery-200 rounded-lg p-5 ">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <span className="font-bold block text-secondery-800 ">
                  {proposal.description}
                </span>
                <span className="text-secondery-400 text-sm">
                  بودجه پیشنهادی شما :
                  {toPersianNumbersWithComma(proposal.price)} تومان
                </span>
              </div>
              <div
                className={`badge ${statusStyle[proposal.status].className} `}>
                {" "}
                {statusStyle[proposal.status].label}
              </div>
            </div>
            <span className="block w-full h-1 bg-secondery-200"></span>
            <div>
              <span className="text-secondery-400 text-sm">
                زمان تحویل : {proposal.duration} روز
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProposalsCards;
