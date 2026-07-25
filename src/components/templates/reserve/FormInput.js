"use client";

import { ErrorMessage, Field } from "formik";

const FormInput = ({ label, name, type = "text", placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="text-sm text-white">
          {label}
        </label>
      )}
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-[10px] border border-bordertest/30 bg-linear-to-b from-[#151515] to-[#101010] shadow-[0_0_0_1px_rgba(217,178,107,.08)] px-3 py-2 text-white text-[12px] placeholder:text-[#777] placeholder:text-[12px] outline-none transition focus:border-border"
      />
      <ErrorMessage
        name={name}
        component="span"
        className="text-sm text-red-400"
      />
    </div>
  );
};
export default FormInput;