"use client";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import React from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useGSAP(() => {
    // Initially show the navbar (set to 0%)
    gsap.set("#homepage-navbar", { yPercent: 0 });

    const showAnim = gsap
      .to("#homepage-navbar", {
        yPercent: -100, // This will be the hidden state
        duration: 0.5,
        paused: true,
      });

    ScrollTrigger.create({
      start: "top top",
      end: "100px top",
      // markers: true,
      onUpdate: (self) => {
        if (self.scroll() <= 10) {
          showAnim.reverse(); // Reverse the animation to show navbar
        } else {
          showAnim.play(); // Play the animation to hide navbar
        }
      },
    });
  }, []);

  return (
    <div
      id="homepage-navbar"
      className="w-full z-10 px-[20px] md:px-[30px] desktop:px-[48px] h-[42px] bg-[#000000]/30 flex justify-between items-center fixed top-[0px]"
    >
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