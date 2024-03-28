import React from "react";

function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="textfield__input  py-2 px-10 text-xs bg-secondery-0 border-secondery-200 rounded-lg ">
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
