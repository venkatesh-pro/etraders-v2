import Link from "next/link";
import React from "react";

const Section9 = () => {
  return (
    <div className="w-full px-[20px] md:px-[48px] lg:px-[48px] pt-[20px] md:pt-[96px] pb-[20px] md:pb-[48px]">
      <div className="flex md:flex-row flex-col justify-center items-center">
        <div className=" ">
          <div className="relative">
            <img
              src="/spaceone/section9.0.jpg"
              className="h-full w-full object-cover md:object-contain rounded-[16px] aspect-[1/1] sm:aspect-auto "
              alt="image"
            />
            <div className="bg-[rgba(0,0,0,0.3)] text-[#e1e1e1] backdrop-blur-2xl h-[138px]  lapL:w-[480px] p-[32px] flex flex-col rounded-[16px] left-[20px] right-[20px] md:right-auto mx-auto justify-center sm:mb-0 absolute bottom-[24px]">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-[400] text-[12px] tracking-letterSpacing1px leading-[1.10] ">
                    CATALOG
                  </p>
                  <p className="font-[400]  mt-[12px] leading-[1.10]">
                    <span className="text-[20px]">
                      Compare interior layouts
                    </span>
                  </p>
                </div>

                <Link
                  target="_blank"
                  href={"/spaceone/dimensioned-plans.pdf"}
                  className="w-[48px] ml-[10px] h-[48px] flex-shrink-0 rounded-[30px] bg-white flex items-center justify-center cursor-pointer"
                >
                  <img
                    src="/images/arrow-right.svg"
                    className="invert w-[26.17px] h-[19.04px] rotate-90"
                  ></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:ml-[40px] relative  mt-[20px] md:mt-0 h-[402px] sm:h-full  ">
          <img
            src="/spaceone/section9.1.jpg"
            className="h-full w-full object-cover md:object-contain rounded-[16px] aspect-[1/1] sm:aspect-auto "
            alt="image"
          />
          <div className="bg-[rgba(0,0,0,0.3)] text-[#e1e1e1] backdrop-blur-2xl h-[138px]  lapL:w-[480px] p-[32px] flex flex-col rounded-[16px] left-[20px] right-[20px] md:right-auto mx-auto justify-center sm:mb-0 absolute bottom-[24px]  ">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-[400] text-[12px] tracking-letterSpacing1px leading-[1.10]">
                  CONFIGURE
                </p>
                <p className="font-[400]  mt-[12px] leading-[1.10]">
                  <span className="text-[20px]">
                    Lease from $395/wk for 12 mo.
                  </span>
                  <span>
                    <sup>1</sup>
                  </span>
                </p>
              </div>

              <Link
                href={"/configure"}
                className="w-[48px] h-[48px] ml-[10px] flex-shrink-0 rounded-[30px] bg-[#3788f7] flex items-center justify-center cursor-pointer"
              >
                <img
                  src="/images/arrow-right.svg"
                  className=" w-[26.17px] h-[19.04px]"
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
