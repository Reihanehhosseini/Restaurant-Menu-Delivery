// components/menu/MenuPanel.tsx
"use client";

import MenuItemCard from "./MenuItemCard";

export default function MenuPanel({ category, selectedFood }) {
  const foods = selectedFood ? [selectedFood] : category.items;
  console.log(selectedFood);

  return (
    <div className="flex flex-1 px-5 flex-col pt-8  border-l border-l-bordertest/30 bg-inherit gap-5">
      <h2 className=" font-serif  font-semibold text-white text-2xl ">
        {selectedFood ? selectedFood.name : category.label}
      </h2>
      {!selectedFood && (
        <h4 className="font-serif text-[15px] text-textgray pb-1 font-normal">
          {`Discover our signature ${selectedFood ? selectedFood.name : category.label} beverages`}
        </h4>
      )}
      <div className="relative h-0.5 w-full">
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-line to-transparent"></div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center pt-5">
        {foods.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
