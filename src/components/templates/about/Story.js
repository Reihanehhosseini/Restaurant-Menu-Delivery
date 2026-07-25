"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";

export default function Story() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="fade-right"
      className="w-full flex flex-col gap-3 items-center px-5 533:px-10 "
    >
      <h1 className="text-gold font-serif">OUR STORY</h1>
      <p className="text-[12px] text-center leading-loose text-gray-200">
        Our journey began with a simple belief: that great food has the power to
        bring people together and create lasting memories. Today, we continue
        this tradition by delivering extraordinary cuisine , warm hospitality,
        and an ambiance that turns every visit into a special occasion
      </p>
    </div>
  );
}
