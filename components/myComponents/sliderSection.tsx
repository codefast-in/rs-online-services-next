"use client";

import Image from "next/image";

// import Swiper JS
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// data

const slider = [
  {
    id: 1,
    path: require("@/assets/banners/01.jpg"),
  },
  {
    id: 2,
    path: require("@/assets/banners/02.jpg"),
  },
  {
    id: 3,
    path: require("@/assets/banners/03.jpg"),
  },
];

export default function SliderSection() {
  return (
    <>
      {/* slider section */}
      <section className="flex items-stretch justify-center w-screen aspect-video h-[80vh]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          draggable={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Pagination, Navigation]}
          className="w-full mx-auto object-cover aspect-video  ">
          {slider.map((item, index) => (
            <SwiperSlide
              key={index}
              className="text-center bg-white aspect-video  flex justify-center items-center">
              <Image
                width={100000000000000}
                height={100000000000000}
                className="w-full h-full aspect-video object-cover"
                alt="NextUI hero Image with delay"
                src={item.path}
                // src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
              />
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
         
            <Image
              className="w-screen h-screen"
              alt="NextUI hero Image with delay"
              src={ban1}
            />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide> */}
        </Swiper>
      </section>
    </>
  );
}
