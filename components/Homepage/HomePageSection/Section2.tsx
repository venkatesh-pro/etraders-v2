"use client";
import React from "react";

const Section2 = () => {
  return (
    <div id="section1">
      <div className="min-h-[100vh] w-full desktop:min-h-[1024px] bg-[url('/homepageImages/section-2.png')]  bg-cover bg-center flex md:items-center">
      <div className="text-white mx-[20px] md:mx-[48px] w-full flex md:block items-center flex-col pt-[144px] md:pt-0">
          <h1 className="text-[56px] font-[400]">Space Lounge</h1>
          <p className="text-[18px] font-[400] mt-[16px]">
            Reimagining the charging experience.{" "}
          </p>
          <div className="flex mt-[32px]">
            <button className="rounded-[100px] px-[20px] py-[12px] bg-white text-black text-[14px] font-[400]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
