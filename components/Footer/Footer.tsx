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
        <div className="">
          <p className="text-[12px] text-[#949192] font-[400]">LINEUP</p>
          <div className="mt-[15px] ">
            <p className="text-[18px] font-[400]">Space One</p>
            <p className="text-[18px] mt-[10px] font-[400]">Space Lounge</p>
            <p className="text-[18px] mt-[10px] font-[400]">Space Laundromat</p>
          </div>
        </div>
        <div>
          <p className="text-[12px] text-[#949192] font-[400]">COMPANY</p>
          <div className="mt-[15px] ">
            <p className="text-[18px] font-[400]">About</p>
            <p className="text-[18px] mt-[10px] font-[400]">Careers</p>
            <p className="text-[18px] mt-[10px] font-[400]">Newsroom</p>
            <p className="text-[18px] mt-[10px] font-[400]">Contact</p>
          </div>
        </div>
        <div>
          <p className="text-[12px] text-[#949192] font-[400]">CONNECT</p>
          <div className="mt-[15px] ">
            <p className="text-[18px] font-[400]">Instagram</p>
            <p className="text-[18px] mt-[10px] font-[400]">YouTube</p>
            <p className="text-[18px] mt-[10px] font-[400]">X</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mobile380:items-center mt-[60px] mobile380:flex-row flex-col">
        <p className="text-[12px] text-[#949192] font-[400]">
          Space © All Rights Reserved
        </p>
        {/* for mobile */}
        <Link
          className="text-[12px] block text-[#949192] font-[400] mt-[10px] mobile380:hidden"
          href={"/"}
        >
          Privacy Policy
        </Link>
        <Link
          className="text-[12px] block text-[#949192] font-[400] mt-[10px] mobile380:hidden"
          href={"/"}
        >
          Terms of Service
        </Link>
        {/* for desktop */}
        <div className="hidden mobile380:block ">
          <Link className="text-[12px]  text-[#949192] font-[400]" href={"/"}>
            Privacy Policy
          </Link>
          <Link className="text-[12px] text-[#949192] sm:ml-[40px] ml-[20px] font-[400] " href={"/"}>
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
