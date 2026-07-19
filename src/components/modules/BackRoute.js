"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

export default function BackRoute() {
  const router = useRouter();
 

  const backFunction = () => {
    router.back()
  };

  return (
    <div className="" onClick={backFunction}>
      <span className="h-9 w-9 iphon11:h-11 iphon11:w-11  rounded-xl flex items-center justify-center border border-[#2a2738] bg-inherit sm:w-12 sm:h-12">
        <IoChevronBackOutline className=" stroke-white" />
      </span>
    </div>
  );
}
