"use client";

import { useFormikContext } from "formik";

const GuestCounter = () => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <div className="w-full flex items-center justify-between gap-1 rounded-[10px] border border-bordertest/30 bg-inherit shadow-[0_0_0_1px_rgba(217,178,107,.08)] px-5 py-2">
      <div className="w-full">
        <h3 className="text-gold font-serif">Guests</h3>
        <p className="text-[12px] text-[#888]">Number of Guests</p>
      </div>
      <div className="w-full flex items-center gap-4 justify-center">
        <button
          type="button"
          onClick={() =>
            values.guests > 1 && setFieldValue("guests", values.guests - 1)
          }
          className="h-10 w-10 rounded-full border border-[#444] text-white"
        >
          -
        </button>
        <span className="text-[16px] text-white">{values.guests}</span>
        <button
          type="button"
          onClick={() => setFieldValue("guests", values.guests + 1)}
          className="h-10 w-10 rounded-full border border-[#444] text-white"
        >
          +
        </button>
      </div>
    </div>
  );
};
export default GuestCounter;
