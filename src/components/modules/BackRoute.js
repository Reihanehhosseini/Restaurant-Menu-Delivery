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
    <div className="w-full " onClick={backFunction}>
      <span className="w-10 h-10  rounded-full flex items-center justify-center bg-line ">
        <IoChevronBackOutline className="fill-black! stroke-black"/>
      </span>
    </div>
  );
}
