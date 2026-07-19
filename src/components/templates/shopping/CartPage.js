"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import HeaderShopping from "./HeaderShopping";
import ShoppingItemCart from "./ShoppingItemCart";
import Request from "./Request";
import PromoCode from "./PromoCode";
import Summary from "./Summary";

export default function CartPage() {
  const { cart, increase, decrease, removeFromCart, totalPrice } = useCart();

  return (
    <div className="w-full p-5 flex flex-col gap-5">
      <HeaderShopping />
      <ShoppingItemCart cart={cart} />
      <Request/>
      <PromoCode/>
      <Summary/>
    </div>
  );
}
