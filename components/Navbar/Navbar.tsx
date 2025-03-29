"use client";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const mobileMenuRef = useRef(null);

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

    if (mobileMenuRef.current) {
      const tl = gsap.timeline();

      tl.to(".isShowMobileMenu", {
        height: "100%",
        position: "fixed",
        display: "block",
        opacity: 1,
        duration: 1,
      });
      if (isShowMobileMenu) {
        tl.play();
      } else {
        tl.reverse();
      }
    }
  }, [isShowMobileMenu]);

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
      {!isShowMobileMenu && (
        <div
          id="homepage-navbar"
          className="w-full z-10 px-[20px] md:px-[30px] desktop:px-[48px] h-[42px] bg-[#000000]/30 flex justify-between items-center fixed top-[0px]"
        >
          <Link href="/">
            <img src="/logo.svg" className="w-[70px] invert" alt="Logo" />
          </Link>

          <div className="hidden md:flex text-white">
            <Link href={"/"}>SPACE ONE</Link>
            <Link href={"/"} className="ml-[40px]">
              SPACE LOUNGE
            </Link>
            <Link href={"/"} className="ml-[40px]">
              SPACE LAUNDROMAT{" "}
            </Link>
          </div>
          <div></div>
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
          >
            <img
              src="/images/hamburger.svg"
              className="w-[18px]"
              alt="Open Menu"
            />
          </div>
        </div>
      )}

      <div
        ref={mobileMenuRef}
        className={`h-[0vh] w-full fixed hidden text-white bg-[#000000]/30 z-[100] backdrop-blur-2xl top-[0px] opacity-0 ${
          isShowMobileMenu && "isShowMobileMenu"
        }`}
      >
        <div
          onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
          className="h-[42px] flex  flex-col items-end justify-center mx-[20px] cursor-pointer"
        >
          <img
            src="/images/cancel-icon-navbar.svg"
            alt="Close Menu"
            className=""
          />
        </div>
        <div className="flex flex-col mx-[20px] mt-[101px]">
          <Link href={"/"} className="text-[26px] font-[400]">
            SPACE ONE
          </Link>
          <Link href={"/"} className="text-[26px] mt-[15px] font-[400]">
            SPACE LOUNGE
          </Link>
          <Link href={"/"} className="text-[26px] mt-[15px] font-[400]">
            SPACE LAUNDROMAT
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
