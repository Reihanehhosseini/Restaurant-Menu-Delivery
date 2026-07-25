// components/BrandHeader.tsx
"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function BrandHeader() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <header className="flex flex-col items-center gap-7 px-1.25 ">
      <div className="space-y-3" data-aos="fade-up">
        <h1 className="text-center text-2xl iphon11:text-3xl font-medium tracking-[0.18em] text-white font-serif! sm:text-4xl sm:tracking-[0.26em] md:text-5xl">
          Digital Menu
        </h1>
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <span className="h-px w-8 bg-linear-to-r from-lightGold to-gold sm:w-10" />
          <p className="text-[11px] font-medium tracking-[0.5em] text-gold sm:text-xs mt-2">
            SMART RESTAURANT MENU
          </p>
          <span className="h-px w-8 bg-linear-to-r from-lightGold to-gold sm:w-10" />
        </div>
      </div>

      <p
        className="max-w-xs text-[14px] iphon11:text-[16px] px-4 text-center text-base font-light text-neutral-400 sm:max-w-sm sm:text-lg"
        data-aos="fade-up"
      >
       Elegant design, Seamless ordering
      </p>

      <div className="flex items-center gap-3" data-aos="fade-up">
        <span className="h-px w-14 bg-gold sm:w-20" />
        <span className="h-1.5 w-1.5 rotate-45 border border-gold" />
        <span className="h-px w-14 bg-gold sm:w-20" />
      </div>
    </header>
  );
}
