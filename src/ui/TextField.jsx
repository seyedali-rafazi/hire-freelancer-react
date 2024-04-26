import React from "react";

function TextField({
  label,
  name,
  register,
  validationSchema,
  type = "text",
  required,
  errors,
  value,
  onChange,
  className,
  placeholder,
}) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-secondery-700" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        id={name}
        autoComplete="off"
        className={`${className} rounded-lg bg-red-50`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
