"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "@/lib/data/products";
import ProductCard from "../ProductCard";
import Autoplay from "embla-carousel-autoplay";

const Frequently = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      {/* Heading Content */}
      <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
        <h2 className="mb-4 mt-6 text-heading2-bold font-extrabold text-black md:text-5xl">
          Frequently bought
        </h2>

        <p className="mx-auto mt-4 max-w-[528px] text-[#636262]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut
          aliquam,purus sit amet luctus magna fringilla urna
        </p>
      </div>
      <Carousel
        className="w-full "
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",

          loop: true,
        }}
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index} className="max-w-xs">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <ProductCard key={product._id} product={product} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Frequently;
