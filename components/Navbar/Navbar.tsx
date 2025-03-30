"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: "spaceone", label: "SPACE ONE" },
  { id: "lounge", label: "SPACE LOUNGE" },
  { id: "laundromat", label: "SPACE LAUNDROMAT" },
];

const Navbar = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuLinksRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuTl = useRef<gsap.core.Timeline | null>(null);

  // Intersection Observer for highlighting active link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sectionElements = sections.map(({ id }) =>
      document.getElementById(id)
    );
    sectionElements.forEach((el) => el && observer.observe(el));

    return () => sectionElements.forEach((el) => el && observer.unobserve(el));
  }, []);

  // Mobile menu GSAP animation
  useEffect(() => {
    if (mobileMenuRef.current && mobileMenuTl.current === null) {
      mobileMenuTl.current = gsap.timeline({ paused: true });
      mobileMenuTl.current.to("#logo", { opacity: 0, duration: 0.3 });
      mobileMenuTl.current.to("#hamburger", { opacity: 0, duration: 0.3 }, "<");

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

      if (mobileMenuLinksRef.current) {
        mobileMenuTl.current.from(
          mobileMenuLinksRef.current.children,
          {
            opacity: 0,
            y: -20,
            stagger: (index) => index * 0.1,
            duration: 0.3,
            ease: "power1.out",
          },
          "-=0.1"
        );
      }
    }
  }, []);

  useEffect(() => {
    if (mobileMenuTl.current) {
      if (isShowMobileMenu) {
        mobileMenuTl.current.timeScale(1).play();
      } else {
        mobileMenuTl.current.timeScale(2).reverse();
      }
    }
  }, [isShowMobileMenu]);

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
        className="w-full backdrop-blur-2xl z-10 pl-[20px] md:px-[30px] desktop:px-[48px] h-[56px] bg-[#000000]/30 flex justify-between items-center fixed top-0"
      >
        <Link href="/" id="logo">
          <img
            src="/logo.svg"
            className="w-[70.33px] invert h-[14px]"
            alt="Logo"
          />
        </Link>

        {/* Desktop Navbar with Active Link Highlighting */}
        <div className="hidden md:flex text-white">
          {sections.map(({ id, label }, index) => (
            <button
              key={id}
              onClick={() =>
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`ml-${
                index === 0 ? "0" : "[40px]"
              } text-[12px] font-[400] tracking-letterSpacing1px ${
                activeSection === id ? "text-white" : "text-[#E1E1E1]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div></div>
        {/* Mobile Menu Toggle */}
        <div
          id="hamburger"
          className="md:hidden cursor-pointer px-[20px] h-[56px] flex items-center  "
          onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
        >
          <img
            src="/images/hamburger.svg"
            className="w-[18px]"
            alt="Open Menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="w-full fixed text-white bg-[#000000]/30 z-[100] backdrop-blur-2xl top-0 opacity-0 overflow-hidden"
        style={{ height: 0 }}
      >
        <div className=" flex justify-end">
          <div
            onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
            className="px-[20px] h-[56px] inline-flex items-center justify-center cursor-pointer"
          >
            <img src="/images/cancel-icon-navbar.svg" alt="Close Menu" />
          </div>
        </div>

        <div
          ref={mobileMenuLinksRef}
          className="flex flex-col mx-[20px] mt-[101px]"
        >
          {sections.map(({ id, label }) => (
            <p
              key={id}
              onClick={() => {
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsShowMobileMenu(false);
              }}
              className={` text-[26px] mt-[15px] font-[400] tracking-letterSpacing1px ${
                activeSection === id ? "text-white" : "text-[#E1E1E1]"
              }`}
            >
              {label}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
