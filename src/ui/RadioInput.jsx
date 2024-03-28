import React from "react";

function RadioInput({
  label,
  value,
  register,
  name,
  id,
  checked,
  validationSchema = {},
  errors,
  watch,
}) {
  return (
    <div className="flex items-center gap-x-2 text-secondery-600">
      <input
        className="cursor-pointer w-4 h-4  form-radio text-primary-900 focus:ring-primary-900text-primary-900"
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
      />
      <label htmlFor={id}>{label}</label>

    </div>
  );
}

export default RadioInput;
