"use client";
import CategorySidebar from "@/components/templates/menu/CategorySideBar";
import React, { useEffect, useState } from "react";
import MenuPanel from "@/components/templates/menu/MenuPanel";
import SearchFood from "@/components/templates/menu/SearchFood";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function MenuClient({ products }) {
  const { totalItem, totalPrice } = useCart();
  const [activeCategory, setaAtiveCategory] = useState(products[0].id);
  const [showCart, setShowCart] = useState(false);
  const changeCategory = (id) => {
    setaAtiveCategory(id);
    setSelectedFood(null);
  };
  const current = products.find((c) => c.id === activeCategory);
  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => {
    setShowCart(true);
    const timer = setTimeout(() => {
      setShowCart(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [totalItem]);

  return (
    <div className="relative flex flex-col  h-full w-full font-sans bg-black">
      <div className="w-full flex items-center justify-center">
        <SearchFood products={products} onSelectedFood={setSelectedFood} />
      </div>
      <div className="w-full flex">
        <CategorySidebar
          categories={products}
          activeId={activeCategory}
          onChange={changeCategory}
        />
        <MenuPanel category={current} selectedFood={selectedFood} />
      </div>
      {showCart && (
        <Link
          href={"/shopping"}
          className="z-10 fixed border border-bordertest/30  shadow-[0_0_0_3px_rgba(217,178,107,.08)] bg-black rounded-xl bottom-3 inset-x-10 flex items-center justify-between p-2"
        >
          <div className="flex gap-2">
            <span className="text-gold text-[12px] iphon11:text-sm">
              View Cart
            </span>
            <span className="text-gold text-[12px] iphon11:text-sm">
              ({totalItem})
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gold text-[12px] iphon11:text-sm">
              ${totalPrice}
            </span>
            <span className="text-gold ">
              <MdKeyboardArrowRight className="size-5 iphon11:size-6" />
            </span>
          </div>
        </Link>
      )}
    </div>
  );
}
