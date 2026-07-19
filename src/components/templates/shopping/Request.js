import React from "react";

export default function Request() {
  return (
    <div className="w-full  rounded-[10px] border border-bordertest/30 bg-linear-to-b from-[#151515] to-[#101010] shadow-[0_0_0_1px_rgba(217,178,107,.08)]h-auto p-3 flex flex-col gap-3">
      <h3 className="text-[#F2F2F2] text-sm font-serif">Special Request</h3>
      <form action="">
        <input
          type="text"
          name=""
          id=""
          placeholder="Add cooking performance or special instruction..."
          className="border border-bordertest/30 w-full rounded-[10px] focus:outline-none px-2  text-sm h-8 placeholder:text-[text-[#8B8B8B] placeholder:text-[10px]"
        />
      </form>
    </div>
  );
}
