import Link from "next/link";
import React from "react";
import { GoChevronRight } from "react-icons/go";

export default function Button({ title, icon, link }) {
  return (
    <Link
      href={link}
      className="w-60 iphon11:w-70 text-[10px] iphon11:text-[13px] sm:text-[16px] sm:w-80 bg-linear-to-r from-gold via-lightGold to-gold flex items-center justify-between px-5 rounded-3xl py-3  gap-2"
    >
      <span>{icon}</span>
      <span className="w-full text-black  font-geistSans! flex justify-start ml-5!">
        {title}
      </span>
      <span className="flex justify-center items-center">
        <GoChevronRight className="fill-black w-5 h-5" />
      </span>
    </Link>
  );
}
