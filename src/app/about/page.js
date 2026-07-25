import BackRoute from "@/components/modules/BackRoute";
import Story from "@/components/templates/about/Story";
import AboutRestaurant from "@/components/templates/about/AboutRestaurant";
import React from "react";
import AboutBox from "@/components/templates/about/AboutBox";
import AboutImage from "@/components/templates/about/AboutImage";
import ReserveAbout from "@/components/templates/about/ReserveAbout";

export default function page() {
  return (
    <div className="relative w-full flex flex-col min-h-screen py-6 gap-5 ">
      <div className="px-6 z-10">
        <BackRoute />
      </div>
      <div className="absolute top-0 left-0 right-0 flex flex-col gap-5">
        <AboutRestaurant />
        <Story />
        <AboutImage />
        <AboutBox />
        <ReserveAbout />
      </div>
    </div>
  );
}
