"use client";

import React from "react";
import {Link} from "@nextui-org/link";
import NextImage from "next/image";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/button";
import {Image} from "@nextui-org/image";

// data
const cardData = [
  {
    id: 1,
    src: require("@/assets/promo/01.jpg"),
    heading: "MONEY TRANSFER",
    disc: "IN ONE TOUCH",
    herf: "/",
  },
  {
    id: 2,
    src: require("@/assets/promo/02.png"),
    heading: "DIGITAL WALLET",
    disc: "TRANSACTIONS",
    herf: "/",
  },
  {
    id: 3,
    src: require("@/assets/promo/03.jpg"),
    heading: "PAY BILLS",
    disc: "DIGITALLY",
    herf: "/",
  },
  {
    id: 4,
    src: require("@/assets/promo/04.png"),
    heading: "MONEY TRANSFER",
    disc: "IN ONE TOUCH",
    herf: "/",
  },
  {
    id: 5,
    src: require("@/assets/promo/07.png"),
    heading: "APPLY FOR",
    disc: "PAN CARD",
    herf: "/",
  },
  {
    id: 6,
    src: require("@/assets/promo/06.png"),
    heading: "RECHARGE",
    disc: "IN ONE CLICK",
    herf: "/",
  },
];

{
  /* OUR SERVICES Section */
}

function ServiesSection() {
  return (
    <section className="flex flex-col items-stretch  justify-center w-screen mt-16 px-0 md:px-20 ">
      <div className="flex flex-row items-center justify-center px-8">
        <span className="h-px w-full bg-gray-700"></span>
        <h1 className="font-bold text-4xl w-1/2 text-center ">OUR SERVICES</h1>
        <span className="h-px w-full bg-gray-700"></span>
      </div>
      <span className="text-lg text-center">
        “RS Online Service have a team of experienced professionals who are
        dedicated to providing excellent customer service.”
      </span>

      <div className="max-w-full gap-10  grid grid-cols-12 grid-rows-2 px-8 place-items-center mt-10 ">
        {cardData.map((item, index) => (
          <Card
            key={index}
            isFooterBlurred
            isPressable
            className="w-full min-h-full max-h-[250px] col-span-12 md:col-span-4 sm:col-span-6 ">
            <CardHeader className="absolute z-10 bottom-10 flex-col items-start">
              <p className="text-tiny text-black uppercase font-bold">New</p>
              <h4 className="text-white font-medium text-2xl">
                {item.heading}
              </h4>
            </CardHeader>
            <Image
              as={NextImage}
              removeWrapper
              isBlurred
              alt="Card example background"
              width={1000}
              height={1000}
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-white text-tiny">{item.disc}</p>
              </div>
              {/* <div>

            
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            
              >
              Notify Me
            </Button></div> */}
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10 px-8">
        <Button color="success" variant="shadow" size="lg" className="w-full text-white">
          See More
        </Button>
      </div>
    </section>
  );
}

export default ServiesSection;
