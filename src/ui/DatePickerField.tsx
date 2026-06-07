import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { Dispatch, SetStateAction } from "react";
import type { DateObject } from "react-multi-date-picker";

type DateValue = Date | DateObject | null;

interface DatePickerFieldProps {
  label: string;
  data?: DateValue;
  date?: DateValue;
  setDate: Dispatch<SetStateAction<Date>> | ((date: DateValue) => void);
}

function DatePickerField({ label, data, date, setDate }: DatePickerFieldProps) {
  const value = date ?? data;

  return (
    <div>
      <span className="mb-2 block text-secondery-700">{label}</span>
      <DatePicker
        containerClassName="w-full "
        inputClass="textfield__input"
        calendarPosition="bottom-center"
        value={value}
        onChange={(d) => {
          const next = Array.isArray(d) ? d[0] ?? null : d;
          if (typeof setDate === "function") {
            (setDate as (date: DateValue) => void)(next);
          }
        }}
        format="YYYY-MM-DD"
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
}

export default DatePickerField;
