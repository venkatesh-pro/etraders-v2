import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-[20px] md:px-[48px] py-[40px] text-white min-h-[385px] bg-black">
      <p className="text-[#949192] text-[12px] font-[400]">
        1. These are estimated weekly payments if you participate in Space
        leasing. These estimates are subject to change and contingent on lease
        approval and other factors. The calculator does not include taxes or
        fees. Your applicable taxes and fees will be confirmed for you closer to
        time of delivery. Early termination fees apply. Fees may be charged for
        excessive wear plus any overage of damage. Late payments will incur a 5%
        fee. Lease does not include maintenance or insurance. Complete terms
        will be included in Modular Building Lease Agreement.
      </p>

      <div className="grid mt-[60px] md:grid-cols-3 gap-10">
        <div className="my-[30px]">
          <p className="text-[12px] text-[#949192] font-[400] tracking-letterSpacing1px">
            LINEUP
          </p>
          <div className="mt-[15px] ">
            <p className="text-[18px] font-[400] hover:opacity-[90%] transition-opacity duration-300 cursor-pointer">Space One</p>
            <p className="text-[18px] mt-[10px] font-[400] hover:opacity-[90%] transition-opacity duration-300 cursor-pointer">Space Lounge</p>
            <p className="text-[18px] mt-[10px] font-[400] hover:opacity-[90%] transition-opacity duration-300 cursor-pointer">Space Laundromat</p>
          </div>
        </div>
        <div className="my-[30px]">
          <p className="text-[12px] text-[#949192] font-[400] tracking-letterSpacing1px">
            COMPANY
          </p>
          <div className="mt-[15px] ">
            <p className="text-[18px] font-[400] hover:opacity-[90%] transition-opacity duration-300 cursor-pointer">About</p>
            <p className="text-[18px] mt-[10px] font-[400] hover:opacity-[90%] transition-opacity duration-300 cursor-pointer">Careers</p>
            <p className="text-[18px] mt-[10px] font-[400] hover:opacity-[90%] transition-opacity duration-300 cursor-pointer">Newsroom</p>
            <p className="text-[18px] mt-[10px] font-[400] hover:opacity-[90%] transition-opacity duration-300 cursor-pointer">Contact</p>
          </div>
        </div>
        <div className="my-[30px]">
          <p className="text-[12px] text-[#949192] font-[400] tracking-letterSpacing1px">
            CONNECT
          </p>
          <div className="mt-[15px] ">
            <p className="text-[18px] font-[400] hover:opacity-[90%] transition-opacity duration-300 cursor-pointer">Instagram</p>
            <p className="text-[18px] mt-[10px] font-[400] hover:opacity-[90%] transition-opacity duration-300 cursor-pointer">YouTube</p>
            <p className="text-[18px] mt-[10px] font-[400] hover:opacity-[90%] transition-opacity duration-300 cursor-pointer">X</p>
          </div>
        </div>
      </div>

      <div className="mt-[40px] flex justify-between md:items-center md:flex-row flex-col">
        {/* for mobile */}
        <Link
          className="text-[12px] block text-[#949192] font-[400] md:hidden"
          href={"/"}
        >
          Privacy Policy
        </Link>
        <Link
          className="text-[12px] block text-[#949192] font-[400] mt-[8px] md:hidden"
          href={"/"}
        >
          Terms of Service
        </Link>
        <p className="text-[12px] text-[#949192] mt-[8px] font-[400]">
          Space © All Rights Reserved
        </p>
        {/* for desktop */}
        <div className="hidden md:block ">
          <Link className="text-[12px]  text-[#949192] font-[400]" href={"/"}>
            Privacy Policy
          </Link>
          <Link
            className="text-[12px] text-[#949192] sm:ml-[40px] ml-[20px] font-[400] "
            href={"/"}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
