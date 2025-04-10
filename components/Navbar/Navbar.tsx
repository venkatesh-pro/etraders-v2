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

const Navbar = ({
  isPolicyAndTerms = false,
}: {
  isPolicyAndTerms?: boolean;
}) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

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
      { threshold: 0.7 }
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

  // Scroll listener to toggle background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        // Trigger after scrolling 10px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        id="homepage-navbar"
        className={`w-full  z-10 pl-[20px] md:px-[30px] desktop:px-[48px] h-[56px] transition-all duration-300 ${
          isPolicyAndTerms ? "" : ""
        } ${
          isScrolled
            ? isPolicyAndTerms
              ? "bg-[rgba(255,255,255,0.3)] backdrop-blur-2xl"
              : "bg-[#000000]/30 backdrop-blur-2xl"
            : "bg-none"
        }  flex md:justify-center justify-between items-center fixed `}
      >
        <Link href="/" id="logo" className="">
          <img
            src="/logo.svg"
            className={`w-[70.33px] invert h-[14px] absolute top-[21px] left-[20px] md:left-[48px] absolute ${
              isPolicyAndTerms && "invert-0"
            }`}
            alt="Logo"
          />
        </Link>

        {/* Desktop Navbar with Active Link Highlighting */}
        <div className="hidden md:flex text-white">
          {sections.map(({ id, label }, index) => (
            <Link
              href={`/#${id}`}
              key={id}
              onClick={() =>
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                marginLeft: index === 0 ? "0px" : "40px",
              }}
              className={`text-[12px] font-[400] transition-colors duration-300 tracking-letterSpacing1px ${
                isPolicyAndTerms ? "hover:text-[#000000]" : "hover:text-white"
              } ${
                isPolicyAndTerms
                  ? activeSection === id
                    ? "text-[#4f4749]" // there will be no activeSection in the terms page
                    : "text-[#4f4749]"
                  : activeSection === id
                  ? "text-white"
                  : "text-[#e1e1e1]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        {/* <div></div> */}
        {/* Mobile Menu Toggle */}
        <div
          id="hamburger"
          className="md:hidden cursor-pointer px-[20px] h-[56px] flex items-center  "
          onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
        >
          <img
            src="/images/hamburger.svg"
            className={`w-[18px] ${isPolicyAndTerms && "invert"}`}
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
          className="flex flex-col mx-[20px] mt-[114px]"
        >
          {sections.map(({ id, label }) => (
            <Link
              href={`/#${id}`}
              key={id}
              onClick={() => {
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsShowMobileMenu(false);
              }}
              className={`cursor-pointer text-[26px] mt-[15px] font-[400] tracking-letterSpacing1px transition-colors duration-300  hover:text-white ${
                activeSection === id ? "text-white" : "text-[#E1E1E1]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
