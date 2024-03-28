import React from "react";

const colors = {
  primary: "bg-primary-100 text-primary-700",
  green: "bg-green-100 text-green-700",
  yellow: "bg-blue-100 text-blue-700",
};
function Stat({ icon, value, title, color }) {
  return (
    <div className="col-span-1 grid grid-rows-2 grid-cols-[6.4rem_1fr] bg-secondery-0 p-4 rounded-lg gap-x-4 ">
      <div
        className={`row-span-2 flex justify-center items-center p-2 aspect-square rounded-full ${colors[color]}`}>
        {icon}
      </div>
      <h5 className="font-bold text-secondery-500 text-lg - self-center">
        {title}
      </h5>
      <p className="text-3xl font-bold text-secondery-900">{value}</p>
    </div>
  );
}

export default Stat;
