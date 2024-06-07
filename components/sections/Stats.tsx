import React from "react";

const Stats = () => {
  return (
    <section className="relative text-black">
      {/* BG Image */}
      {/* <img
        src="https://assets.website-files.com/646603af5972c5339c9b35dc/64663a56dbf56a2c0cc7e257_Background%20Image1.svg"
        alt=""
        className="absolute -z-10 inline-block h-full w-full object-cover"
      /> */}
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-24">
        {/* Heading Content */}
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
          <h2 className="mb-4 mt-6 text-heading2-bold font-extrabold text-black md:text-5xl">
            Backed up by real data
          </h2>

          <p className="mx-auto mt-4 max-w-[528px] text-[#636262]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
        </div>
        {/* Facts */}
        <div className="py- lg:grid-cols-48 mx-auto grid w-full max-w-[1020px] grid-cols-1 place-items-center gap-5 px-16 sm:grid-cols-2 md:grid-cols-3 md:gap-12 lg:grid-cols-4">
          {/* Fact Item */}
          <div className="flex flex-col items-start gap-4">
            <p>Eyewear Sold</p>
            <h2 className="mb-4 mt-6 text-3xl font-extrabold md:text-4xl">
              50 lakhs<span className="text-[#c9fd02]">+</span>
            </h2>
          </div>
          {/* Fact Item */}
          <div className="flex flex-col items-start gap-4">
            <p>Stores</p>
            <h2 className="mb-4 mt-6 text-3xl font-extrabold md:text-4xl">
              10<span className="text-[#c9fd02]">+</span>
            </h2>
          </div>
          {/* Fact Item */}
          <div className="flex flex-col items-start gap-4">
            <p>Happy Customers</p>
            <h2 className="mb-4 mt-6 text-3xl font-extrabold md:text-4xl">
              20 lakhs<span className="text-[#c9fd02]">+</span>
            </h2>
          </div>
          {/* Fact Item */}
          <div className="flex flex-col items-center gap-4">
            <p>Google Rating</p>
            <h2 className="mb-4 mt-6 text-3xl font-extrabold md:text-4xl">
              4.2/5
            </h2>
          </div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
