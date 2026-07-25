"use client"
import React from 'react'
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from 'next/image';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutImage() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <div className="flex flex-col gap-2.5 px-5 " data-aos="fade-left">
      <div className="w-full rounded-lg border border-bordertest/30">
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          className="mySwiper relative h-50 533:h-100 533:min-h-90 w-full rounded-lg border border-bordertest/30"
        >
          <SwiperSlide>
            <Image
              src="/images/restaurant/1.PNG"
              fill
              priority
              sizes="100vw"
              className="object-cover rounded-lg border border-bordertest/30"
              alt="restaurant view"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/restaurant/2.PNG"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              alt="restaurant view"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/restaurant/3.PNG"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              alt="restaurant view"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/restaurant/4.PNG"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              alt="restaurant view"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/restaurant/5.PNG"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              alt="restaurant view"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/restaurant/6.PNG"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              alt="restaurant view"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
