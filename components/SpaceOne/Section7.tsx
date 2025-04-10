import React from "react";

const Section7 = () => {
  return (
    <div>
      <div
        className="h-[700px] relative sm:min-h-[100vh] w-full desktop:min-h-[1024px] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `
        url('/space-one/section7.jpg')
      `,
        }}
      >
        <div className="bg-[rgba(0,0,0,0.3)] text-[#e1e1e1] backdrop-blur-2xl h-[196px] sm:h-[162px] w-full mx-[20px] sm:mx-0 sm:w-[480px] p-[32px] flex flex-col rounded-[16px] justify-center mb-[48px] sm:mb-0 sm:absolute bottom-[48px] sm:left-[20px] desktop:bottom-[96px] desktop:left-[192px]">
          <p className="font-[400] text-[26px] leading-[1.10]">Power your environment</p>
          <p className="font-[400]  mt-[16px] leading-[1.10]">
            <span className="text-[14px]">
              Power Space One with solar energy or grid electricity. Use your
              stored energy to charge your electric vehicle, power devices and
              appliances day and night, even during outages.
            </span>
            <span>
              <sup className="font-[500]  text-[8px] ml-[1.4px] relative -top-[5px]">
              4
              </sup>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section7;
