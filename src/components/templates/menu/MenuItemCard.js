// components/menu/MenuItemCard.tsx
"use client";

import Image from "next/image";
import { FaShoppingBag } from "react-icons/fa";
// import type { MenuItem } from "@/data/menuData";



export default function MenuItemCard({ item }) {
  return (
    <div className="w-50 iphon11:w-68 sm:w-80 group relative flex flex-col overflow-hidden rounded-2xl bg-white/4 backdrop-blur-xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0),inset_0_1px_0_rgba(255,255,255)]  ">
      {/* Image */}
      <div className="relative flex justify-center items-center h-40 w-full overflow-hidden sm:h-44">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Info row */}
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <p className=" text-sm  text-white sm:text-base">{item.name}</p>
          <p className="mt-0.5 text-sm font-semibold text-line">
            {item.price.toFixed(2)} $
          </p>
        </div>

        {/* Add to cart */}
        <button
          aria-label={`Add ${item.name} to cart`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-md transition-all duration-200 hover:bg-amber-500 hover:scale-110 active:scale-95"
        >
          <FaShoppingBag className="size-4 fill-[#171717]" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}