"use client";

import React, {useRef, useState} from "react";
// import Image  from "next/image";

// import Swiper JS
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode,Navigation, Pagination} from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/button";
import {Image} from "@nextui-org/image";
import {products} from "@/Data";
import StarRoundedIcon from "@mui/icons-material/StarRounded";



function NewArrival() {
  return (

    <div className="flex flex-col items-stretch  justify-center w-screen px-0 md:px-20 bg-gray-700 ">
      <div className="flex flex-row items-center justify-center px-8 my-10 ">
        <span className="h-px w-full bg-gray-100"></span>
        <h1 className="font-bold text-4xl w-1/2 text-center text-white ">New Arrival</h1>
        <span className="h-px w-full bg-gray-100"></span>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        freeMode={true}        
        modules={[FreeMode]}
        className="w-full f-full mx-auto object-cover mb-10 ">
        {products.slice(0, 10).map((item, index) => (
          <SwiperSlide
            key={index}
            className="text-center  flex justify-center items-center bg-gray-700 cursor-grabbing">
            <Card
              shadow="md"
              className="w-full"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible w-full p-0  items-center">
                <Image
                  shadow="sm"
                  radius="lg"
                  width={1000}
                  height={1000}
                  alt={item.title}
                  className="w-full object-cover h-[250px] rounded-b-none"
                  src={item.thumbnail}
                />
                <CardHeader className="  flex-row items-center justify-between rounded-none py-2">
                  <div className=" flex flex-col items-start justify-center ">
                    <span className="text-tiny text-black uppercase font-bold ">
                      New
                    </span>
                    <h4 className="text-black font-medium text-xl ">
                      {item.title.slice(0, 10)}
                    </h4>
                  </div>
                  {/* <Button
                    isIconOnly
                    color="warning"
                    variant="shadow"
                    aria-label="AddToCart">
                    <ShoppingCartRoundedIcon className="text-white" />
                  </Button> */}
                  <div className=" flex justify-center flex-col items-start">
                    <div>
                      <StarRoundedIcon className="text-yellow-500" />
                      <span className="text-left font-semibold text-black">
                        {item.rating}
                      </span>
                    </div>
                    <div>
                      <span className="text-left font-semibold text-default-500 underline">
                        73 reviews
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardFooter className=" bg-white/30 border-t-1 border-zinc-100/50  py-2 items-center justify-between">
                  <p className="text-black text-tiny font-bold">
                    <span className="text-danger-500 font-bold text-xl">
                      -{Math.floor(item.discountPercentage)}%
                    </span>
                    Listed <s>{item.price}</s>
                  </p>

                  <p className="text-black font-bold text-xl">
                    Only ₹&nbsp;
                    {item.price -
                      Math.floor(
                        (item.price / 100) * Math.floor(item.discountPercentage)
                      )}
                  </p>
                </CardFooter>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NewArrival;
