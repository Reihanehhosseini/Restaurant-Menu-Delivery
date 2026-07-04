import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";

export default function SearchFood() {
  return (
    <div className="flex p-6 items-center justify-between px-2 gap-1">
      <div className=" flex-1 min-w-0 h-11 sm:h-12 gap-1 border border-[#2a2738] bg-[#1c1c1c]  rounded-full flex items-center px-2 shadow-[3px_3px_6px_#0000001a,-3px_-3px_6px_#000,inset_2px_2px_4px_#00000040];">
        <IoIosSearch className=" size-4 iphon11:size-5" />
        <input
          type="search"
          placeholder="search"
          className="flex items-center border-none outline-none focus:outline-none placeholder:text-[13px]  placeholder:text-[#9999] sm:placeholder:text-[14px]"
        />
      </div>
      <div className="relative shrink-0 h-11 w-11 sm:w-12 sm:h-12  flex items-center justify-center rounded-full border border-[#2a2738] bg-[#1c1c1c]">
        <Link href={"/"}>
          <CiShoppingCart className="size-5 sm:size-6" />
          <span className="w-4 h-4 bg-line p-3 absolute -top-1 z-100 -right-1 flex items-center justify-center rounded-full">0</span>
        </Link>
      </div>
    </div>
  );
}
