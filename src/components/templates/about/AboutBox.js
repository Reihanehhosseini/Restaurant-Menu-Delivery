"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import AboutItem from "./AboutItem";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

export default function AboutBox() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <div className="px-5" data-aos="fade-right">
      <div className="w-full flex flex-col sm:flex-row gap-3 items-start justify-between p-5  rounded-[10px] border border-bordertest/30 bg-linear-to-b from-[#151515] to-[#101010] shadow-[0_0_0_1px_rgba(217,178,107,.08)] ">
        <AboutItem
          icons={<SlLocationPin className="size-5 stroke-gold fill-gold" />}
          titr="ADDRESS"
          desc="Isf, chaharbagh bala street "
        />
        <AboutItem
          icons={<MdOutlinePhone className="size-5 stroke-gold fill-gold" />}
          titr="PHONE"
          desc="+98 913 9593707"
        />
        <AboutItem
          icons={<AiOutlineMail className="size-5 stroke-gold fill-gold" />}
          titr="EMAIL"
          desc="Reihanehh1368@gmail.com"
        />
      </div>
    </div>
  );
}
