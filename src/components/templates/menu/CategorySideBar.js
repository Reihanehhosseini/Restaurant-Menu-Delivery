// components/menu/CategorySidebar.tsx
"use client";

import Link from "next/link";
// import { ArrowLeft } from "lucide-react";
import CategoryItem from "./CategoryItem";

export default function CategorySidebar({ categories, activeId, onChange }) {
  return (
    <aside className="relative p-6 flex h-full w-[30%] shrink-0 flex-col  items-center justify-center  px-1 sm:px-5 md:w-57.5">
      <div className="w-full flex justify-center items-center">
        <Link
          href="/"
          className="w-full flex items-center justify-center font-myfont  rounded-full pr-1 text-[15px] sm:text-[20px] font-medium  text-primary "
        >
          <span className="w-full flex items-center justify-center font-serif   text-line">
            ROYAL TASTE
          </span>
        </Link>
      </div>
      <nav className="mt-4 flex w-full flex-1 flex-col items-center justify-between overflow-y-auto py-4 scrollbar-none">
        {categories.map((cat) => (
          <CategoryItem
            key={cat.id}
            category={cat}
            isActive={activeId === cat.id}
            onClick={() => onChange(cat.id)}
          />
        ))}
      </nav>
    </aside>
  );
}
