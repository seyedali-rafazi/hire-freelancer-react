import React from "react";
import RadioInput from "./RadioInput";

function RadioInputGroup({ register, watch, errors, config }) {
  const { name, validationSchema = {}, options } = config;
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className="flex items-center justify-center gap-x-4">
        {options.map(({ label, value }) => (
          <RadioInput
            key={value}
            label={label}
            value={value}
            register={register}
            id={value}
            name={name}
            watch={watch}
            validationSchema={validationSchema}
            errors={errors}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RadioInputGroup;
