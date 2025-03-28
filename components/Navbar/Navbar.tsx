"use client";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  useGSAP(() => {
    gsap.set("#homepage-navbar", { yPercent: 0 });

    const showAnim = gsap.to("#homepage-navbar", {
      yPercent: -100,
      duration: 0.5,
      paused: true,
    });

    ScrollTrigger.create({
      start: "top top",
      end: "100px top",
      onUpdate: (self) => {
        if (self.scroll() <= 10) {
          showAnim.reverse();
        } else {
          showAnim.play();
        }
      },
    });
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isShowMobileMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isShowMobileMenu]);

  // Close mobile menu if screen size exceeds md (768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsShowMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        id="homepage-navbar"
        className="w-full z-10 px-[20px] md:px-[30px] desktop:px-[48px] h-[42px] bg-[#000000]/30 flex justify-between items-center fixed top-[0px]"
      >
        <Link href="/">
          <img src="/logo.svg" className="w-[70px] invert" alt="Logo" />
        </Link>

        <div className="hidden md:flex text-white">
          <Link href={"/"}>Space One</Link>
          <Link href={"/"} className="ml-[40px]">
            Space Lounge
          </Link>
          <Link href={"/"} className="ml-[40px]">
            Space Laundromat
          </Link>
        </div>
        <div></div>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
        >
          {isShowMobileMenu ? (
            <img src="/images/cancel-icon-navbar.svg" alt="Close Menu" />
          ) : (
            <img
              src="/images/hamburger.svg"
              className="w-[18px]"
              alt="Open Menu"
            />
          )}
        </div>
      </div>

      {isShowMobileMenu && (
        <div className="h-[calc(100vh-42px)] w-full fixed text-white bg-[#000000]/30 z-[100] backdrop-blur-2xl top-[42px] ">
          <div className="flex flex-col mx-[20px] mt-[101px]">
            <Link href={"/"} className="text-[26px] font-[400]">
              Space One
            </Link>
            <Link href={"/"} className="text-[26px] mt-[15px] font-[400]">
              Space Lounge
            </Link>
            <Link href={"/"} className="text-[26px] mt-[15px] font-[400]">
              Space Laundromat
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
