import React from "react";
import { IoTicketOutline } from "react-icons/io5";

export default function PromoCode() {
  return (
    <div className="w-full py-4  rounded-[10px] border border-bordertest/30 bg-linear-to-b from-[#151515] to-[#101010] shadow-[0_0_0_1px_rgba(217,178,107,.08)] h-auto p-3 flex items-center justify-between gap-3">
      <div className="flex gap-2 items-center">
        <IoTicketOutline className="fill-gold stroke-gold" />
        <h6 className="font-serif text-[12px] iphon11:text-sm text-gold">Promo Code</h6>
      </div>
      <div className="flex items-center">
        <form action="" className="flex items-center gap-1">
          <input
            type="text"
            placeholder="Enter Promo Code"
            className="border border-bordertest/30 w-full rounded-[10px] focus:outline-none px-2  text-sm h-8 placeholder:text-[#8B8B8B] placeholder:text-[10px]"
          />
          <button className="rounded-[10px] px-2 border border-bordertest/30 bg-[#D8B26A] text-[#1B1205] h-8 text-[10px] shadow-[0_8px_20px_rgba(217,178,107,.25)] transition hover:bg-[#E5C987] ">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
}
