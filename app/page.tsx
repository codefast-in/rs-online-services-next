"use client";
import React, {useEffect, useState} from "react";
import SliderSection from "@/components/myComponents/sliderSection";
import ServiesSection from "@/components/myComponents/serviesSection";
import TrendyProducts from "@/components/myComponents/trendyProducts";
import NewArrival from "@/components/myComponents/newArrival";

import NewsSection from "@/components/myComponents/newsSection";

const isLogin = false;
export default function Home() {
  return (
    <>
      <SliderSection />
      <ServiesSection />
      <TrendyProducts />
      <NewArrival />
      <NewsSection />
    </>
  );
}
