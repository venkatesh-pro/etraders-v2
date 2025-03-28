"use client";
import React from "react";

const Section3 = () => {
  return (
    <div id="section1">
      <div className="min-h-[100vh] w-full desktop:min-h-[1024px] bg-[url('/homepageImages/section-3.png')]  bg-cover bg-center flex items-center">
        <div className="text-white mx-[48px] ">
          <h1 className="text-[56px] font-[400]">Space Laundromat</h1>
          <p className="text-[18px] font-[400] mt-[16px]">
            Level up your wash game.{" "}
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

export default Section3;
