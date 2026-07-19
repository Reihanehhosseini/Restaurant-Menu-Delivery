import React from "react";
import AboutItem from "./AboutItem";
import { LuLeaf } from "react-icons/lu";
import { PiChefHatLight } from "react-icons/pi";
import { BiDish } from "react-icons/bi";

export default function AboutBox() {
  return (
    <div className="w-full flex flex-col items-center justify-between px-8 533:px-5 mt-10 gap-3 533:flex-row">
      <AboutItem
        icons={<LuLeaf className="size-5 stroke-gold" />}
        titr="FRESH INGREDIENTS"
        desc="We Source premium seasonal ingredients from trusted local and international suppliers to ensure every plat"
      />
      <AboutItem
        icons={<PiChefHatLight className="size-5 stroke-gold fill-gold" />}
        titr="AWARD-WINING CHEFS"
        desc="Our chefs combine classic techniques contemporary creativity, transforming every recipe into an elegant culinary masterpiece"
      />
      <AboutItem
        icons={<BiDish className="size-5 stroke-gold fill-gold" />}
        titr="PREMIUM EXPERIENCE"
        desc="From the warm ambiance to personalized service , every visit is designed to make you feel welcomed, relaxed, and inspired"
      />
    </div>
  );
}
