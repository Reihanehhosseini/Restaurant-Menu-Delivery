"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import Link from "next/link";

export default function ReserveAbout() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <div className="w-full px-5 " data-aos="fade-left">
      <div className="rounded-lg gap-2 533:gap-5 border border-bordertest/30 relative w-full h-50 max-[552px]:h-30 overflow-hidden flex flex-col items-center justify-center bg-[url(/images/reserve.PNG)] bg-no-repeat bg-cover bg-center">
        <div className="text-center">
          <span className=" font-serif text-[14px] 533:text-[16px]">
            Every meal is more than a recipe
          </span>
          <br />
          <span className=" font-serif text-[14px] 533:text-[16px] ">
            {" "}
            its a{" "}
          </span>
          <span className=" font-serif text-[14px] 533:text-[16px]  text-gold">
            memory
          </span>
          <span className=" font-serif text-[14px] 533:text-[16px] ">
            {" "}
            waiting to be created{" "}
          </span>
        </div>
        <Link href={"/reserve"} className="border rounded-md py-1 533:py-2 533:mt-2 px-4 text-gold bg-black text-[10px] cursor-pointer">
          RESERVE YOUR TABLE TODAY
        </Link>
      </div>
    </div>
  );
}
