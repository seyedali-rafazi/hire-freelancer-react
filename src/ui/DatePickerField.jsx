import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function DatePickerField({ label, data, setDate }) {
  return (
    <div>
      <span className="mb-2 block text-secondery-700">{label}</span>

      <DatePicker
        containerClassName="w-full "
        inputClass="textfield__input"
        calendarPosition="bottom-center"
        value={data}
        onChange={(date) => setDate(date)}
        format="YYYY-MM-DD"
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
}

export default DatePickerField;
