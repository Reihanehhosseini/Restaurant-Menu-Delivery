"use client";

import { ErrorMessage, Field } from "formik";

const TextArea = ({  name,  placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <Field
        as="textarea"
        rows={5}
        name={name}
        placeholder={placeholder}
        className="w-full resize-none rounded-[10px] border text-[12px] border-bordertest/30 bg-linear-to-b from-[#151515] to-[#101010] shadow-[0_0_0_1px_rgba(217,178,107,.08)] px-3 py-2 text-white placeholder:text-[#777] placeholder:text-[12px] outline-none transition focus:border-border"
      />
      <ErrorMessage
        name={name}
        component="span"
        className="text-sm text-red-500"
      />
    </div>
  );
};
export default TextArea;