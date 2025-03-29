"use client";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null | null>(null);
  const mobileMenuLinksRef = useRef<HTMLDivElement | null | null>(null);

  const mobileMenuTl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    // Navbar scroll animation
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

  // Initialize timeline only once
  useEffect(() => {
    if (mobileMenuRef.current && mobileMenuTl.current === null) {
      mobileMenuTl.current = gsap.timeline({ paused: true });
      mobileMenuTl.current.to("#logo", { opacity: 0, duration: 0.3 });
      mobileMenuTl.current.to("#hamburger", { opacity: 0, duration: 0.3 }, "<"); // Run at the same time

      mobileMenuTl.current.to(
        mobileMenuRef.current,
        {
          height: "100vh",
          opacity: 1,
          duration: 0.5,
          ease: "power1.inOut",
        },
        "<"
      );
      // Stagger animation for the menu links
      if (mobileMenuLinksRef.current) {
        mobileMenuTl.current.from(
          mobileMenuLinksRef.current.children,
          {
            opacity: 0,
            y: -20,
            stagger: (index) => {
              return index * 0.1;
            },
            duration: 0.3,
            ease: "power1.out",
          },
          "-=0.1" // Overlap slightly with the menu opening
        );
      }
    }
  }, []);

  // Control the timeline on isShowMobileMenu changes
  useEffect(() => {
    if (mobileMenuTl.current) {
      if (isShowMobileMenu) {
        mobileMenuTl.current.play();
      } else {
        mobileMenuTl.current.reverse();
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
      <div
        id="homepage-navbar"
        className="w-full z-10 pl-[20px] md:px-[30px] desktop:px-[48px] h-[42px] bg-[#000000]/30 flex justify-between items-center fixed top-0"
      >
        <Link href="/" id="logo">
          <img src="/logo.svg" className="w-[70px] invert" alt="Logo" />
        </Link>

        <div className="hidden md:flex text-white">
          <Link href={"/"}>SPACE ONE</Link>
          <Link href={"/"} className="ml-[40px]">
            SPACE LOUNGE
          </Link>
          <Link href={"/"} className="ml-[40px]">
            SPACE LAUNDROMAT
          </Link>
        </div>
        <div></div>
        <div
          id="hamburger"
          className="md:hidden cursor-pointer px-[20px] h-[42px] flex items-center  "
          onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
        >
          <img
            src="/images/hamburger.svg"
            className="w-[18px]"
            alt="Open Menu"
          />
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className={`w-full fixed text-white bg-[#000000]/30 z-[100] backdrop-blur-2xl top-0 opacity-0 overflow-hidden`}
        style={{ height: 0 }}
      >
        <div className=" flex justify-end">
          <div
            onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
            className="px-[20px] h-[42px] inline-flex items-center justify-center cursor-pointer"
          >
            <img src="/images/cancel-icon-navbar.svg" alt="Close Menu" />
          </div>
        </div>
        <div
          ref={mobileMenuLinksRef}
          className="flex flex-col mx-[20px] mt-[101px]"
        >
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
