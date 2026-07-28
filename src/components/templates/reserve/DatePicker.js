"use client";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";

import { useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReservationDatePicker = () => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <div className="space-y-3">
      <h3 className="text-gold text-[15px] font-serif">Select Date</h3>
      <div className="flex rounded-[10px] border border-bordertest/30 bg-inherit shadow-[0_0_0_1px_rgba(217,178,107,.08)] items-center pr-2">
        <DatePicker
          selected={values.date}
          onChange={(date) => setFieldValue("date", date)}
          minDate={new Date()}
          dateFormat="MMMM d, yyyy"
          placeholderText="Choose Your date"
          className="w-full text-[12px]  px-4 py-2 text-textgray outline-none focus:border-border placeholder:text-[12px]"
        />
        <HiOutlineCalendarDateRange className="size-6 stroke-gold" />
      </div>
    </div>
  );
};
export default ReservationDatePicker;
