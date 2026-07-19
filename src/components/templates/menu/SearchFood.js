"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import BackRoute from "@/components/modules/BackRoute";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function SearchFood({ products, onSelectedFood }) {

  const {  totalItem } = useCart();

  const inputRef = useRef(null);
  const [activeSearch, setActiveAearch] = useState(false);
  const [search, setSearch] = useState("");

  const allFoods = products.flatMap((category) => category.items);
  const result = allFoods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase()),
  );
  console.log(result);

  const selectSearch = (food) => {
    onSelectedFood(food);
    setActiveAearch(false);
  };

  useEffect(() => {
    if (activeSearch) {
      inputRef.current?.focus();
    }
  }, [activeSearch]);

  useEffect(() => {
    if (search.trim() === "") {
      onSelectedFood(null);
    }
  }, [search]);

  const seachFunc = () => {
    setActiveAearch(!activeSearch);
  };
  return (
    <>
      <div
        className={`${activeSearch ? "hidden" : "false"} w-full flex flex-col `}
      >
        <div className="w-full flex pt-6 pb-4 items-center justify-between px-5 gap-1 sm:gap-3 border-b border-b-bordertest/30">
          <BackRoute />
          <div className="flex flex-col items-center">
            <span className="font-myfont text-2xl sm:text-2xl tex">Menu</span>
          </div>
          <div className="flex gap-2">
            <div
              className=" h-9 w-9 iphon11:h-11 iphon11:w-11 sm:w-12 sm:h-12  flex items-center justify-center rounded-xl border border-[#2a2738] bg-inherit"
              onClick={seachFunc}
            >
              <IoIosSearch className="size-5 sm:size-6 fill-white" />
            </div>
            <div className="relative shrink-0 h-9 w-9 iphon11:h-11 iphon11:w-11 sm:w-12 sm:h-12  flex items-center justify-center rounded-xl border border-[#2a2738] bg-inherit">
              <Link href={"/shopping"}>
                <CiShoppingCart className="size-5 sm:size-6" />
                <span className="w-2 h-2 iphon11:w-4 iphon11:h-4 bg-line p-3 absolute -top-1 z-100 -right-1 flex items-center justify-center rounded-full">
                  {totalItem}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${activeSearch ? "false" : "hidden"} w-full flex flex-col `}
      >
        <div className="w-full relative flex pt-6 pb-4 items-center justify-center px-5 gap-1 sm:gap-3 border-b border-b-border/30  ">
          <div className="flex items-center justify-between border  w-full rounded-xl  border-[#2a2738] bg-inheritl p-2">
            <div className="w-full flex gap-2 items-center">
              <IoIosSearch className="size-5.5" />
              <input
                ref={inputRef}
                type="search"
                placeholder="Search Dishes ..."
                className="focus:outline-none w-full placeholder:text-[12px]"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            <div onClick={seachFunc}>
              <IoIosClose className="size-5" />
            </div>
          </div>
          {search.trim() && (
            <div className="h-auto absolute right-5 left-5 z-40 top-16 flex items-center justify-between   rounded-xl   bg-inheritl py-4 px-5  backdrop-blur-xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0),inset_0_1px_0_rgba(255,255,255)]">
              <div className="flex flex-col gap-3">
                {result.length > 0 ? (
                  result.map((food) => (
                    <div key={food.id} className="flex gap-3">
                      <Image
                        src={food.image}
                        alt={food.name}
                        width={30}
                        height={30}
                        className="rounded-sm"
                      />

                      <span key={food.id} onClick={() => selectSearch(food)}>
                        {food.name}
                      </span>
                    </div>
                  ))
                ) : (
                  <span>Not Found</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
