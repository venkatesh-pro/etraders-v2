import React from "react";

const Section3 = () => {
  return (
    <div>
      <div
        className="h-[700px] relative sm:min-h-[100vh] w-full desktop:min-h-[1024px] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `
        linear-gradient(
          to top,
          rgba(0, 0, 0, 0) 60%,
          rgba(0, 0, 0, 0.5) 100%
        ),
        url('/space-one/section3.jpg')
      `,
        }}
      >
        <div className="bg-[rgba(0,0,0,0.3)] text-[#e1e1e1] backdrop-blur-2xl h-[196px] sm:h-[162px] w-full mx-[20px] sm:mx-0 sm:w-[480px] p-[32px] flex flex-col rounded-[16px] justify-center mb-[48px] sm:mb-0 sm:absolute bottom-[48px] sm:left-[20px] desktop:bottom-[96px] desktop:left-[192px]">
          <p className="font-[400] text-[26px]">Modular architecture</p>
          <p className="font-[400]  mt-[16px]">
            <span className="text-[14px]">
              Precision-engineered steel structure makes Space One lightweight
              yet incredibly robust, designed to be modular from the ground up
              for safer deployment across various locations and terrains.
            </span>
            <span>
              <sup className="font-[500]  text-[8px] ml-[1.4px] relative -top-[5px]">2</sup>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
