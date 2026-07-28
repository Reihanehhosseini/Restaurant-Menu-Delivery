"use client";

import Image from "next/image";
import { FaShoppingBag } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function MenuItemCard({ item }) {
  const { addToCart } = useCart();
  return (
    <div className="w-50 group relative flex flex-col md:flex-row md:w-100 overflow-hidden rounded-2xl bg-inherit backdrop-blur-xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0),inset_0_1px_0_rgba(255,255,255)]  iphon11:w-68 sm:w-80 ">
      <div className="relative flex md:flex-2 justify-center items-center h-40 w-full overflow-hidden sm:h-44">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex items-center justify-between px-4 py-3 md:flex-1 md:flex-col md:items-start md:justify-evenly md:gap-3">
        <div className="flex flex-col gap-1">
          <p className=" text-[14px]  text-white sm:text-base font-serif">
            {item.name}
          </p>
          <p className="text-[14px] font-serif text-textgray">{item.desc}</p>
          <p className="mt-0.5 text-sm font-semibold text-white md:hidden">
            {item.price.toFixed(2)} $
          </p>
        </div>

        <div className="md:w-full md:flex md:justify-between">
          <div className="hidden  md:flex items-center md:justify-between text-gold">
            {item.price.toFixed(2)} $
          </div>
          <button
            aria-label={`Add ${item.name} to cart`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-md transition-all duration-200 hover:bg-amber-500 hover:scale-110 active:scale-95"
            onClick={() => addToCart(item)
              
              
            }
          >
            <FaShoppingBag className="size-4 fill-[#171717]" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
