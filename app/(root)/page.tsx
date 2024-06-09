import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import CallToAction from "@/components/sections/CallToAction";
import Frequently from "@/components/sections/Frequently";
import { HomeCarousel } from "@/components/sections/HomeCarousel";
import Stats from "@/components/sections/Stats";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <Collections />
      <Stats />
      <Frequently />
      <CallToAction />
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";
