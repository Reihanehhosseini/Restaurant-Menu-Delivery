"use client";
import CategorySidebar from "@/components/templates/menu/CategorySideBar";
import React, { useState } from "react";
import menuCategories from "@/data/data";
import MenuPanel from "@/components/templates/menu/MenuPanel";

export default function page() {
  const [activeCategory, setaAtiveCategory] = useState(menuCategories[0].id);

  const current = menuCategories.find((c) => c.id === activeCategory);
  return (
    <div className="flex h-dvh w-full font-sans  bg-[#101010] bg-[linear-gradient(45deg,#1A1A1A_30%,#121212_40%,#0B0B0B_100%)]">
      <CategorySidebar
        categories={menuCategories}
        activeId={activeCategory}
        onChange={setaAtiveCategory}
      />
      <MenuPanel category={current} />
    </div>
  );
}
// bg-[url(/images/wallstar.png)]