import type {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface TextFieldProps<T extends FieldValues = FieldValues> {
  label?: string;
  name: string;
  register: UseFormRegister<T>;
  validationSchema?: RegisterOptions<T>;
  type?: string;
  required?: boolean;
  errors?: FieldErrors<T>;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  placeholder?: string;
}

function TextField<T extends FieldValues = FieldValues>({
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
}: TextFieldProps<T>) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-secondery-700" htmlFor={name}>
          {label} {required && <span className="text-error">*</span>}
        </label>
      )}
      <input
        {...register(name as Path<T>, validationSchema)}
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
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
}

export default TextField;
