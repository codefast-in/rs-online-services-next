import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {Grid, Pagination} from "swiper/modules";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/button";
import Link from "next/link";
// import Image from "next/image";



function NewsSection() {
  const [news, setnews] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=6bb7db1ca79c42fe9a80afd19b652a1d"
      );
      setnews(response.data.articles);
    })();

    //   return () => {
    //     second
    //   }
  }, []);

  return (
    <div className="flex flex-col items-stretch  justify-center w-screen px-0 md:px-20 bg-green-200 pb-8">
      <div className="flex flex-row items-center justify-center px-8 mt-10 ">
        <span className="h-px w-full bg-green-500"></span>
        <h1 className="font-bold text-4xl w-1/2 text-center text-warning ">
          Latest News
        </h1>
        <span className="h-px w-full bg-green-500"></span>
      </div>
      <div className="gap-10 grid grid-cols-1 sm:grid-cols-2  mt-10 px-8">
        {news.slice(0, 6).map((data: any, index: number) => (
          <Card className="pt-4 " isBlurred isFooterBlurred>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">
                {data.publishedAt.slice(0, 10)}
              </p>
              <h4 className="font-bold text-large">{data.title.slice(0,50)}</h4>
              <small className="text-default-500">
                {data.author ? data.author : "Unknown"}
              </small>
            </CardHeader>
            <CardBody className="overflow-hidden p-2 ">
              <Image
                shadow="sm"
                radius="sm"
                width="100%"
                alt={data.title}
                className="w-full object-cover h-[150px]"
                src={data.urlToImage ? data.urlToImage : "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"}
              />
               
            </CardBody>
            <div className=" bg-[#f8f9fa] shadow-sm border py-2 flex items-center justify-between px-4">
              <p className="text-tiny text-black/80">{data.source.name}</p>
              <Button
              as={Link}
              href={data.url}
              target="_blank"
                className="text-tiny text-white"
                variant="solid"
                color="warning"
                radius="lg"
                size="sm">
                Read Full News
              </Button>
            </div>
           
          </Card>
        ))}
      </div>
      {/* <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="w-full h-[600px] mx-auto mb-10">
        {news.map((data:any, index:number) => (
          <SwiperSlide
            key={index}
            className="h-full flex justify-center items-center  mt-0">
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">{data.author}</small>
                <h4 className="font-bold text-large">{data.author}</h4>
              </CardHeader>
              <CardBody className="overflow-hidden py-2">
                 <Image
                shadow="sm"
                radius="lg"
                width={1000}
                height={1000}
                alt={data.title}
                className="w-full object-cover h-[150px] rounded-b-none"
                src={data.urlToImage? data.urlToImage : newsimg }
              />
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}

export default NewsSection;
