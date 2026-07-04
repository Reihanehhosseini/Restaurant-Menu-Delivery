// components/menu/MenuPanel.tsx
"use client";

import MenuItemCard from "./MenuItemCard";
import SearchFood from "./SearchFood";

export default function MenuPanel({ category }) {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <SearchFood />
      <div className="flex-1 overflow-y-auto px-4 pb-6 pt-2 scrollbar-none ">
        <h2 className="my-6! font-sans text-lg font-semibold text-white">
          {category.label}
        </h2>
        <div className="relative mt-3 mb-8 h-0.5 w-full">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-[#D9B45C] to-transparent"></div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          {category.items.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
