"use client";

import { useFormikContext } from "formik";

const SubmitButton = () => {
  const { isSubmitting } = useFormikContext();


  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full rounded-[10px] px-2 border border-bordertest/30 bg-[#D8B26A] text-[#1B1205] font-serif py-3 text-[14px] shadow-[0_8px_20px_rgba(217,178,107,.25)] transition hover:opacity-90 disabled:opacity-50"
    >
      {isSubmitting ? "Loading..." : "Confirm Reservation"}
    </button>
  );
};
export default SubmitButton;
