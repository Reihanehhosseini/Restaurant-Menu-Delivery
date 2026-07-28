import React from "react";
import Image from "next/image";
import { IoTrashOutline } from "react-icons/io5";
import { useCart } from "@/context/CartContext";

export default function ItemCart(props) {
  const {increase, decrease, removeFromCart } = useCart();

  return (
    <div className="w-full rounded-[10px] border border-bordertest/30 bg-linear-to-b from-[#151515] to-[#101010] shadow-[0_0_0_1px_rgba(217,178,107,.08)] h-auto p-2 flex gap-3">
      <div className="border overflow-hidden  border-bordertest/30 rounded-[10px] relative flex  justify-center items-center h-40 w-full  ">
        <Image
          src={props.image}
          alt={props.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl border "
        />
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="font-serif text-gold">{props.name}</div>
        <div className="font-serif text-textgray text-[12px] iphon11:text-sm sm:text-[16px]">
          {props.desc}
        </div>
        <div className="font-serif">$ {props.price}</div>
        <div className="flex items-center justify-between mt-3">
          <div className=" flex gap-3 items-center justify-evenly">
            <span
              className="w-7 h-7 rounded-full bg-inherit border border-bordertest/30 flex items-center justify-center"
              onClick={() => decrease(props.id)}
            >
              -
            </span>
            <span className="">{props.quantity}</span>
            <span
              className="w-7 h-7 rounded-full bg-inherit border border-bordertest/30 flex items-center justify-center"
              onClick={() => increase(props.id)}
            >
              +
            </span>
          </div>
          <div className=" ">
            <span
              className="w-7 h-7 rounded-full border border-bordertest/30 bg-inherit flex items-center justify-center"
              onClick={() => removeFromCart(props.id)}
            >
              <IoTrashOutline />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
