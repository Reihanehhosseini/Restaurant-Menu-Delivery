import React from 'react'
import Image from "next/image";

export default function HeroSection() {
  return (
      <div className=" relative h-100 min-h-90 w-full ">
        <Image
          src="/images/hero-land2.PNG"
          alt="Sliced grilled chicken breast garnished"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/30 to-black"></div>
      </div>
  )
}
