import React from "react";
import { TfiTimer } from "react-icons/tfi";
import { FaApple } from "react-icons/fa";
import { MdOutlineCreditCard } from "react-icons/md";
import { RiCashLine } from "react-icons/ri";
import { useCart } from "@/context/CartContext";

export default function Summary() {
  const { totalPrice } = useCart();
  return (
    <div className="w-full flex  flex-col justify-between gap-6 ">
      <div className="w-full flex  justify-between gap-3 ">
        <div className="flex-1 items-stretch justify-center flex flex-col gap-2 p-3 rounded-[10px] border border-bordertest/30 bg-linear-to-b from-[#151515] to-[#101010] shadow-[0_0_0_1px_rgba(217,178,107,.08)]">
          <h1 className="font-serif text-[12px] iphon11:text-sm text-[#F2F2F2]">
            Order Summary
          </h1>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#8B8B8B]">Subtotal</span>
            <span className="text-[10px]">${totalPrice}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#8B8B8B]">Service Fee</span>
            <span className="text-[10px]">${totalPrice > 0 ? 15.0 : 0}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#8B8B8B]">Tax</span>
            <span className="text-[10px]">${totalPrice > 0 ? 16.2 : 0}</span>
          </div>
          <div className="flex items-center justify-between pb-1">
            <span className="text-[10px] text-[#8B8B8B]">Discount</span>
            <span className="text-[10px]">${totalPrice > 0 ? -10.0 : 0}</span>
          </div>
          <div className="relative h-0.5 w-full">
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-line to-transparent"></div>
          </div>
          <div className="flex items-center justify-between pt-1 ">
            <span className="font-serif text-gold">Total</span>
            <span className="font-serif text-gold">
              ${totalPrice > 0 ? totalPrice + 21 : 0}
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2 items-stretch">
          <div className="flex-1 flex gap-3 items-center justify-evenly p-3 rounded-[10px] border border-bordertest/30 bg-linear-to-b from-[#151515] to-[#101010] shadow-[0_0_0_1px_rgba(217,178,107,.08)]">
            <TfiTimer className="size-7 sm:size-9" />
            <div className="flex flex-col gap-2">
              <span className="font-serif text-[12px] text-[#8B8B8B] iphon11:text-sm">
                Cooking Time
              </span>
              <span className="font-serif text-gold text-[12px] iphon11:text-sm">
                25-30 minutes
              </span>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3  p-1 iphon11:p-3 rounded-[10px] border border-bordertest/30 bg-linear-to-b from-[#151515] to-[#101010] shadow-[0_0_0_1px_rgba(217,178,107,.08)]">
            <h1 className="font-serif text-[12px] iphon11:text-sm">
              Payment Method
            </h1>
            <div className="flex justify-center items-center gap-1 sm:gap-3">
              <span className="flex-1 border border-[#8B8B8B] rounded-[10px] p-3 flex flex-col items-center justify-center gap-1">
                <FaApple className="size-6" />
                <span className="text-[8px] iphon11:text-[10px]">Pay</span>
              </span>
              <span className="flex-1 border border-[#8B8B8B] rounded-[10px] p-3 flex flex-col items-center justify-center gap-1">
                <MdOutlineCreditCard className="size-6" />
                <span className="text-[8px] iphon11:text-[10px]">Credit</span>
              </span>
              <span className="flex-1 border border-[#8B8B8B] rounded-[10px] p-3 flex flex-col items-center justify-center gap-1 focus:border-gold">
                <RiCashLine className="size-6" />
                <span className="text-[8px] iphon11:text-[10px]">Cash</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full flex flex-col gap-3">
          <button className="font-serif w-full rounded-[10px] px-2 border border-bordertest/30 bg-[#D8B26A] text-[#1B1205] py-2 text-[10px] iphon11:text-sm  transition hover:bg-[#E5C987] ">
            Proceed to Checkout
          </button>
          <button className="font-serif w-full rounded-[10px] px-2 border border-bordertest/30 bg-inherit text-[#D8B26A] py-2 text-[10px] iphon11:text-sm  transition hover:bg-[#E5C987] ">
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
}
