import BackRoute from "@/components/modules/BackRoute";
import FormReserve from "@/components/templates/reserve/FormReserve";
import ReserveImage from "@/components/templates/reserve/ReserveImage";
import React from "react";

export default function page() {
  return (
    <div className="relative w-full flex flex-col min-h-screen py-6 gap-5 ">
      <div className="px-6 z-10">
        <BackRoute />
      </div>
      <div className="absolute top-0 right-0 left-0 px-1.5 ">
        <ReserveImage />
        <FormReserve/>
      </div>
    </div>
  );
}
