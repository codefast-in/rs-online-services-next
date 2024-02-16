"use client";

import React, {useEffect, useState} from "react";

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/button";
import {Image} from "@nextui-org/image";
import {products} from "@/Data";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

function TrendyProducts() {
  return (
    <div className="flex flex-col items-stretch  justify-center w-screen my-16 px-0 md:px-20 ">
      <div className="flex flex-row items-center justify-center px-8">
        <span className="h-px w-full bg-gray-700"></span>
        <h1 className="font-bold text-4xl w-1/2 text-center ">
          Trandy Products
        </h1>
        <span className="h-px w-full bg-gray-700"></span>
      </div>

      <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 mt-10 px-8">
        {products.slice(0, 16).map((item, index) => (
          <Card
          
            shadow="md"
            className="w-full"
            key={index}
            // isPressable
            // onPress={() => window.}
            >
            <CardBody className="overflow-visible w-full p-0  items-center">
              <Image
                shadow="sm"
                radius="lg"
                width={1000}
                height={1000}
                alt={item.title}
                className="w-full object-cover h-[200px] rounded-b-none aspect-video"
                src={item.thumbnail}
              />
              <CardHeader className="  flex-row items-center justify-between rounded-none py-2">
                <div className=" flex flex-col items-start justify-center ">
                  <span className="text-tiny text-black uppercase font-bold ">
                    New
                  </span>
                  <h4 className="text-black font-medium text-2xl ">
                    {item.title.slice(0, 18)}
                  </h4>
                </div>
                <Button
                  isIconOnly
                  color="warning"
                  variant="light"
                  aria-label="AddToCart">
                  <ShoppingCartRoundedIcon className="text-yellow-500" />
                </Button>
              </CardHeader>
              <CardFooter className=" bg-white/30 border-t-1 border-zinc-100/50  py-2 items-center justify-between">
                <div className=" flex justify-center flex-col items-start">
                  <div>
                    <StarRoundedIcon className="text-yellow-500" />
                    <span className="text-left font-semibold text-black">
                      {item.rating}
                    </span>
                  </div>

                  {/* <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span> */}
                  <div>
                    <span className="text-left font-semibold text-default-500 underline">
                      73 reviews
                    </span>
                  </div>
                </div>

                <div>
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
                </div>
              </CardFooter>
              <div className="w-full p-2">
                <Button
                  className="w-full text-white border-1 border-zinc-100/50"
                  color="success"
                  variant="solid"
                  href={`/products/${item.title}`}
                  >
                  Buy Now
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TrendyProducts;
