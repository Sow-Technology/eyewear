import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-yellow-600  text-white text-sm ">
      <div className=" flex flex-col  max-w-7xl mx-auto p-5 gap-5 ">
        <div className="grid lg:grid-cols-5  md:grid-cols-2 grid-cols-1 gap-5">
          <div className="flex flex-col max-lg:col-span-2 gap-1">
            <h3 className="font-bold text-xl">About Eyewear</h3>
            <p className="text-sm">
              Eyewear, the third major line of consumer business division from
              Titan Company Limited, ventured into the eyewear category in March
              2007. The move was an initiative to redefine the industry and
              straddle the marketplace with exacting quality standards,
              unparalleled in India’s prescription eyewear industry. Benchmarked
              against the best in the world, Titan Eye+ heralds standardization
              in the eyewear industry.
            </p>
          </div>
          <div className="flex flex-col max-lg:flex-1 gap-1">
            {" "}
            <h3 className="font-bold text-xl">EyeGlasses</h3>
            <div className="flex flex-col">
              <Link href="/">Men</Link>
              <Link href="/">Women</Link>
              <Link href="/">Kids</Link>
              <Link href="/">Fastrack</Link>
              <Link href="/">Rimless</Link>
              <Link href="/">Titan</Link>
            </div>
            <h3 className="font-bold text-xl">Contact Lenses</h3>
            <div className="flex flex-col">
              <Link href="/">Men</Link>
              <Link href="/">Women</Link>
              <Link href="/">Kids</Link>
              <Link href="/">Fastrack</Link>
              <Link href="/">Rimless</Link>
              <Link href="/">Titan</Link>
            </div>
          </div>
          <div className="flex flex-col max-lg:flex-1 gap-1">
            {" "}
            <h3 className="font-bold text-xl">EyeGlasses</h3>
            <div className="flex flex-col">
              <Link href="/">Men</Link>
              <Link href="/">Women</Link>
              <Link href="/">Kids</Link>
              <Link href="/">Fastrack</Link>
              <Link href="/">Rimless</Link>
              <Link href="/">Titan</Link>
            </div>
            <h3 className="font-bold text-xl">Contact Lenses</h3>
            <div className="flex flex-col">
              <Link href="/">Men</Link>
              <Link href="/">Women</Link>
              <Link href="/">Kids</Link>
              <Link href="/">Fastrack</Link>
              <Link href="/">Rimless</Link>
              <Link href="/">Titan</Link>
            </div>
          </div>
          <div className="flex-col flex max-lg:flex-1 gap-1">
            {" "}
            <h3 className="font-bold text-xl">EyeGlasses</h3>
            <div className="flex flex-col">
              <Link href="/">Men</Link>
              <Link href="/">Women</Link>
              <Link href="/">Kids</Link>
              <Link href="/">Fastrack</Link>
              <Link href="/">Rimless</Link>
              <Link href="/">Titan</Link>
            </div>
            <h3 className="font-bold text-xl">Contact Lenses</h3>
            <div className="flex flex-col ">
              <Link href="/">Men</Link>
              <Link href="/">Women</Link>
              <Link href="/">Kids</Link>
              <Link href="/">Fastrack</Link>
              <Link href="/">Rimless</Link>
              <Link href="/">Titan</Link>
            </div>
          </div>
          <div className="flex flex-col max-lg:flex-1 gap-1">
            <h3 className="font-bold text-xl">Subscribe Our Newsletter</h3>

            <Input placeholder="Email" />
            <h3 className="font-bold text-xl">Call us on</h3>
            <p>7888-8888-8888</p>
          </div>
        </div>
        <div>
          <div>
            {" "}
            <h3 className="font-bold text-xl">Popular Searches</h3>
          </div>
          <div className="text-sm">
            Glasses | Goggles | Blue cut lens | Goggles for Men | Mirrored
            sunglasses | Glasses for men | Transparent glasses | Goggles for
            Women | Glasses for Women
          </div>
        </div>
        <div className="w-full h-0.5 bg-gray-300/30" />
        <div className="flex flex-wrap flex-row gap-5 items-center ">
          <div className="flex gap-2">
            {" "}
            © 2024 Eeyewear. All Rights Reserved.
            <Link href="/">Terms & Conditions</Link>|<Link href="/">FAQs</Link>|
            <Link href="/">Privacy Policy</Link>
          </div>
          <div className="flex flex-row gap-2">
            <Link href="/">
              <FaFacebookF />
            </Link>
            <Link href="/">
              <IoLogoInstagram />
            </Link>
            <Link href="/">
              <FaXTwitter />
            </Link>
            <Link href="/">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
