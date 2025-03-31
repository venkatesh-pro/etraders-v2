"use client";
import React from "react";

const Section3 = () => {
  return (
    <div id="laundromat">
      <div className="min-h-[100vh] w-full desktop:min-h-[1024px] bg-[url('/homepageImages/section-3.png')]  bg-cover bg-center flex md:items-center">
        <div className="text-white mx-[20px] md:mx-[48px] w-full flex md:block items-center flex-col pt-[144px] md:pt-0">
          <h1 className="text-[56px] font-[400]">
            <span className="hidden md:inline">Space</span> Laundromat
          </h1>
          <p className="text-[18px] font-[400] mt-[16px]">
            Modular self-serve laundromat.
          </p>
          <div className="flex mt-[32px]">
            <button className="hover:opacity-[90%] transition-opacity duration-300 rounded-[100px] min-w-[108px] max-w-[108px] min-h-[41px] max-h-[41px] bg-white text-black text-[14px] font-[400]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
