import React from "react";

function RHFSelect({ label, name, register, options, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondery-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} id={name} className="textfield__input">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RHFSelect;
