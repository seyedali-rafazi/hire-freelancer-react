import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface SelectOption {
  value: string;
  label: string;
}

interface RHFSelectProps<T extends FieldValues = FieldValues> {
  label: string;
  name: string;
  register: UseFormRegister<T>;
  options: SelectOption[];
  required?: boolean;
  errors?: Record<string, { message?: string }>;
}

function RHFSelect<T extends FieldValues = FieldValues>({
  label,
  name,
  register,
  options,
  required,
}: RHFSelectProps<T>) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondery-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select {...register(name as Path<T>)} id={name} className="textfield__input">
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
