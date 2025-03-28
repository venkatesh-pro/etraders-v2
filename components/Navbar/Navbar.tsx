import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full z-10 px-[20px] md:px-[30px] desktop:px-[48px] h-[42px] bg-[#000000]/30 flex justify-between items-center fixed">
      <Link href="/">
        <img src="/logo.svg" className="w-[70px] invert" alt="Logo" />
      </Link>
      <div className="flex text-white ">
        <Link href={"/"}>Space One</Link>
        <Link href={"/"} className="ml-[40px]">
          Space Lounge
        </Link>
        <Link href={"/"} className="ml-[40px]">
          Space Laundromat
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
