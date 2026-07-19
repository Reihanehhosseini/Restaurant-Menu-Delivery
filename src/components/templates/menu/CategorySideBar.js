// components/menu/CategorySidebar.tsx
"use client";
import CategoryItem from "./CategoryItem";

export default function CategorySidebar({ categories, activeId, onChange,  }) {

  
  return (
    <aside className="relative flex min-h-screen w-[25%] shrink-0 flex-col  items-center justify-center  px-1  sm:w-50 sm:px-3">
      <div className="w-full flex justify-center items-center"></div>
      <nav className="mt-4 flex w-full flex-1 flex-col items-center justify-start gap-20  py-4 scrollbar-none">
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
