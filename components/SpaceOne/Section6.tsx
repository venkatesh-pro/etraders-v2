import React from "react";

const Section6 = () => {
  return (
    <div className="w-full px-[20px] md:px-[48px] lg:px-[100px] lapL:px-[192px] pt-[96px] pb-[96px] md:pb-[144px]">
      <div className="">
        <h2 className="text-soft text-[40px] font-[400] leading-[1.10]">Functional layouts</h2>
        <p className="text-medium text-[18px] mt-[24px] font-[400]">
          Raised ceiling height and extra width allows for greater flexibility.
        </p>
      </div>

      <div className="flex md:flex-row flex-col mt-[48px]">
        <div className="desktop:w-[716px] desktop:h-[632px]">
          <img
            src="/spaceone/section6.0.jpg"
            className="h-full w-full object-cover md:object-contain rounded-[16px] aspect-[1/1] sm:aspect-auto "
            alt="image"
          />
        </div>
        <div className="md:ml-[40px] mt-[20px] md:mt-0 h-[402px] sm:h-full  desktop:w-[540px] desktop:h-[632px]">
          <img
            src="/spaceone/section6.1.jpg"
            className="h-full w-full object-cover md:object-contain rounded-[16px] aspect-[1/1] sm:aspect-auto "
            alt="image"
          />
        </div>
      </div>

      {/* video */}
      <div className="mt-[96px] mx-[-20px] md:mx-0">
        {/* <video
          src="/spaceone/section4.2.mp4"
          className="md:rounded-[16px]"
          controls={false}
          autoPlay
          loop
          muted
        ></video> */}

        <img
          src="/spaceone/section6.2.jpg"
          className="h-full w-full object-cover md:object-contain md:rounded-[16px] aspect-[1/1] sm:aspect-auto "
          alt="image"
        />
      </div>

      <div className="flex  flex-col md:flex-row w-full mt-[48px] h-full">
        <div className="w-full">
          <h2 className="font-[400] text-[40px] text-soft leading-[1.10]">
            Immersive technology
          </h2>

          <p className="font-[400] mt-[24px] text-medium ">
            <span className="text-[18px]">
              Refined materials and interior hardware integrate seamlessly with
              a 10-inch control panel to create an environment that reimagines
              the way you interact with your space.
            </span>
            <span>
              <sup className="font-[500]  text-[12px] ">3</sup>
            </span>
          </p>
        </div>
        {/* <div className="md:w-[3.5px] h-[1.5px]  md:h-auto w-full bg-[#e1e1e1] mx-[0] md:mx-[96px]  my-[48px] md:my-[0px]"></div> */}
        <div className="md:w-[1px] md:min-w-[1px] h-[1px] md:h-auto w-full bg-[#e1e1e1] mx-0 md:mx-[96px] my-[48px] md:my-0"></div>
        <div className="w-full">
          <h2 className="font-[400] text-[12px] text-soft100 tracking-letterSpacing1px">
            CONTROLS
          </h2>
          <p className="text-soft mt-[20px]">Music streaming</p>
          <p className="text-soft mt-[10px]">Weather forecasting</p>
          <p className="text-soft mt-[10px]">Customize lighting</p>
        </div>
      </div>
    </div>
  );
};

export default Section6;
