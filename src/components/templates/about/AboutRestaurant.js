import React from "react";

export default function AboutRestaurant() {
  return (
    <div className="relative w-full h-112.5 max-[552px]:h-80 overflow-hidden flex flex-col bg-[url(/images/aboutus.PNG)] bg-no-repeat bg-cover bg-center">
      <div className="absolute  top-0 left-0 right-0 h-24 bg-linear-to-b from-black to-transparent"></div>
      <div>
        <h1 className=" text-[12px] font-serif text-gold mt-11 sm:mt-17 pl-5 533:pl-10 font-bold min-[552px]:text-[18px]">
          ABOUT US 
        </h1>
        <p className="pl-5 533:pl-10 mt-8 iphon11:mt-4 font-serif w-[70%] iphon11:w-[50%] text-[18px] min-[552px]:leading-relaxed min-[552px]:text-[30px]">
          Where Culinary Art
        </p>
        <p className="pl-5 533:pl-10 mt-2 font-serif w-[60%] iphon11:w-[50%] text-[18px] min-[552px]:leading-relaxed text-gold min-[552px]:text-[30px] ">
          Meets Timeless Elegance
        </p>
        <p className="w-[60%] iphon11:w-[50%] text-[12px] text-gray-200 mt-4 iphon11:mt-3 pl-5 533:pl-10 absolute z-10 min-[552px]:text-[14px]">
          Every dishes tells a story of passion, craftsmanship, and
          unforgettable flavors
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-26 bg-linear-to-t from-black to-transparent"></div>
    </div>
  );
}
