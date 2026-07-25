import React from "react";
import { LuLeaf } from "react-icons/lu";

export default function AboutItem(props) {
  return (
    <div className="  flex  items-center justify-between gap-3">
      <span className="rounded-[10px] border border-bordertest/30 bg-linear-to-b from-[#151515] to-[#101010] shadow-[0_0_0_1px_rgba(217,178,107,.08)] p-1">
        {props.icons}
      </span>
      <div className="flex flex-col">
        <span className=" text-[12px] text-gold font-serif">
          {props.titr}
        </span>
        <p className=" text-[10px] text-gray-200">{props.desc}</p>
      </div>
    </div>
  );
}
