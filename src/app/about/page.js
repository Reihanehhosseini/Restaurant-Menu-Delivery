import BackRoute from "@/components/modules/BackRoute";
import Story from "@/components/templates/about/Story";
import AboutRestaurant from "@/components/templates/about/AboutRestaurant";
import React from "react";
import AboutBox from "@/components/templates/about/AboutBox";
import AboutImage from "@/components/templates/about/AboutImage";


export default function page() {
  return (
    <div className="w-full flex flex-col min-h-screen py-6">
      <div className="px-6">
        <BackRoute />
      </div>
      <AboutRestaurant />
      <Story />
      <AboutImage />
      <AboutBox />
    
    </div>
  );
}
