import React from "react";

const Section4 = () => {
  return (
    <div className="w-full px-[20px] lg:px-[192px] pt-[96px] pb-[96px] md:pb-[144px] desktop:h-[1055px]">
      <div className="">
        <h2 className="text-soft text-[40px] font-[400]">Take a closer look</h2>
        <p className="text-medium text-[18px] mt-[24px] font-[400]">
          Available in two sizes and five stunning exterior finishes.
        </p>
      </div>

      <div className="flex md:flex-row flex-col mt-[48px]">
        <div className="desktop:w-[716px] desktop:h-[632px]">
          <img
            src="/space-one/section4.0.jpg"
            className="h-full w-full object-cover md:object-contain rounded-[16px] aspect-[1/1] sm:aspect-auto "
            alt="image"
          />
        </div>
        <div className="md:ml-[40px] mt-[20px] md:mt-0 h-[402px] sm:h-full  desktop:w-[540px] desktop:h-[632px]">
          <img
            src="/space-one/section4.1.jpg"
            className="h-full w-full object-cover md:object-contain rounded-[16px] aspect-[1/1] sm:aspect-auto "
            alt="image"
          />
        </div>
      </div>

      {/* video */}
      <div className="mt-[96px] mx-[-20px] md:mx-0">
        <video
          src="/space-one/section4.2.mp4"
          className="md:rounded-[16px]"
          controls={false}
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div className="flex  flex-col md:flex-row w-full mt-[48px] h-full">
        <div className="w-full">
          <h2 className="font-[400] text-[40px] text-soft">Grand entrance</h2>
          <p className="font-[400] text-[18px] mt-[24px] text-medium">
            Futuristic wraparound facade with a spacious deck and durable
            eco-timber composite panelling seamlessly blends with nature.
          </p>
        </div>
        {/* <div className="md:w-[3.5px] h-[1.5px]  md:h-auto w-full bg-[#e1e1e1] mx-[0] md:mx-[96px]  my-[48px] md:my-[0px]"></div> */}
        <div className="md:w-[2.4px] md:min-w-[2.4px] h-[2px] md:h-auto w-full bg-[#e1e1e1] mx-0 md:mx-[96px] my-[48px] md:my-0"></div>

        <div className="w-full">
          <h2 className="font-[400] text-[12px] text-soft100 tracking-letterSpacing1px">
            FEATURES
          </h2>
          <p className="text-soft mt-[20px]">Spacious deck</p>
          <p className="text-soft mt-[10px]">Integrated steel base</p>
          <p className="text-soft mt-[10px]">Sliding door entry</p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
