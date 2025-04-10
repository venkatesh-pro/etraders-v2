"use client";
import React from "react";

const Section3 = () => {
  return (
    <div id="laundromat">
      <div
        className="h-[calc(100vh-56px)] sm:min-h-[100vh] w-full desktop:min-h-[1024px] bg-cover bg-center flex "
        style={{
          backgroundImage: `
          linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 0.5) 100%
          ),
          url('/homepageImages/section-3.png')
        `,
        }}
      >
        <div className="text-[#F7F7F7] mx-[20px] md:mx-[48px] w-full flex  items-center flex-col pt-[100px] pb-[100px] md:pt-[120px] md:pb-0">
          <div className="flex  items-center flex-col">
            <h1 className="md:text-[48px] text-[40px] font-[400]">
              Space Laundromat
            </h1>
            <p className="text-[18px] font-[400] mt-[8px]">
              Simplifying the way we do laundry.
            </p>
          </div>
          <div className="flex mt-[24px]">
            <button className="hover:opacity-[90%] transition-opacity duration-300 rounded-[100px] min-w-[114px] max-w-[114px] min-h-[41px] max-h-[41px] bg-white text-black text-[14px] font-[400] tracking-[.5px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
