"use client";
import React from "react";

const Section1 = () => {
  return (
    <div id="section1">
      <div className="min-h-[100vh] w-full desktop:min-h-[1024px] bg-[url('/homepageImages/section-1.png')]  bg-cover bg-center flex md:items-center">
        <div className="text-white mx-[20px] md:mx-[48px] w-full flex md:block items-center flex-col pt-[144px] md:pt-0">
          <h1 className="text-[56px] font-[400]">Space One</h1>
          <p className="text-[18px] font-[400] mt-[16px]">
            From $59,990 or $395/wk for 12 mo.1
          </p>
          <div className="flex mt-[32px]">
            <button className="rounded-[100px] min-w-[108px] max-w-[108px] bg-[#3788F7] text-[14px] font-[400] min-h-[41px] max-h-[41px] text-center">
              Order Now
            </button>
            <button className="rounded-[100px] ml-[16px] min-w-[111px] max-w-[111px] px-[20px] bg-white text-black text-[14px] min-h-[41px] font-[400] max-h-[41px] text-center">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
