"use client";
import React from "react";

const Section2 = () => {
  return (
    <div className="w-full px-[20px] md:px-[48px] lg:px-[100px] lapL:px-[192px] pt-[96px] pb-[96px] md:pb-[144px] ">
      <div className="w-full">
        <div className="">
          <img
            src="/spaceone/section2.jpg"
            className="h-full w-full object-cover md:object-contain rounded-[16px] aspect-[1/1] sm:aspect-auto "
            alt="image"
          />
        </div>
        <div className="flex  flex-col md:flex-row w-full mt-[48px] h-full">
          <div className="w-full">
            <h2 className="font-[400] text-[40px] text-soft leading-[1.10]">
              Building of the future
            </h2>
            <p className="font-[400] text-[18px] mt-[24px] text-medium">
              Space One features a biophilic design connecting to the beautiful
              landscape surrounding it. Functional layouts and expansive glass
              provide ample space and let in plenty of natural light.
            </p>
          </div>
          {/* <div className="md:w-[3.5px] h-[1.5px]  md:h-auto w-full bg-[#e1e1e1] mx-[0] md:mx-[96px]  my-[48px] md:my-[0px]"></div> */}
          <div className="md:w-[1px] md:min-w-[1px] h-[1px] md:h-auto w-full bg-[#e1e1e1] mx-0 md:mx-[96px] my-[48px] md:my-0"></div>

          <div className="w-full">
            <h2 className="font-[400] text-[12px] text-soft100 tracking-letterSpacing1px">
              BENEFITS
            </h2>
            <p className="text-soft mt-[20px]">Cleaner construction</p>
            <p className="text-soft mt-[10px]">Solar energy and storage</p>
            <p className="text-soft mt-[10px]">Precision manufacturing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
