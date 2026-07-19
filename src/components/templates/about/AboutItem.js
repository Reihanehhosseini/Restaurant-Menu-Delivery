import React from "react";
import { LuLeaf } from "react-icons/lu";

export default function AboutItem(props) {
  return (
    <div className="rounded-lg border border-bordertest/30 py-3 gap-2 px-1 flex flex-col items-center justify-between">
      <span>
        {props.icons} 
      </span>
      <span className="text-center text-[12px] text-gold font-serif">
       {props.titr}
      </span>
      <p className="text-center text-[10px] text-gray-200">
        We Source premium seasonal ingredients from trusted local and international suppliers to ensure every plate 
      </p>
    </div>
  );
}
