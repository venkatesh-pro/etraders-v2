import { formatNumberToCurrency } from "@/utils/functions";
import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import { TabState } from "../ConfiguratorPage/Configurator/ConfiguratorParent";

const ScrollPricing = ({
  totalPrice,
  activeTab,
}: {
  totalPrice: number;
  activeTab: TabState;
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [displayText, setDisplayText] = useState(
    activeTab === "cash"
      ? formatNumberToCurrency(totalPrice)
      : `${formatNumberToCurrency(totalPrice)}/wk`
  ); // State for full text
  const scrollPricingRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for visibility
  useEffect(() => {
    const endSection = document.getElementById("endOfPricing");
    if (!endSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(endSection);
    return () => observer.disconnect();
  }, []);

  // GSAP animation when activeTab or totalPrice changes
  useGSAP(() => {
    if (scrollPricingRef.current) {
      const newText =
        activeTab === "cash"
          ? formatNumberToCurrency(totalPrice)
          : `${formatNumberToCurrency(totalPrice)}/wk`;

      gsap
        .timeline()
        .to(scrollPricingRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: () => {
            // Update the displayed text after fade-out
            setDisplayText(newText);
          },
        })
        .to(scrollPricingRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
    }
  }, [activeTab, totalPrice]); // Trigger animation when activeTab or totalPrice changes

  return (
    <div
      className={`w-full desktop:w-[438px]  desktopG:w-full z-[10001] transition-opacity duration-500 ${
        isVisible ? "fixed opacity-100" : "opacity-0 hidden pointer-events-none"
      } fixed bottom-0 left-0 md:sticky md:bottom-0`}
    >
      <div className="md:mx-[23px] bg-[#D4D4D4]/30 backdrop-blur-2xl h-[72px] rounded-tl-[12px] rounded-tr-[12px] px-[24px] py-[12px] flex items-center justify-between">
        <div className="flex justify-between ">
          <div>
            <p
              className="text-[24px] font-[450] text-silver"
              ref={scrollPricingRef}
            >
              {displayText}
            </p>
            <p className="text-[12px] font-[400] text-light-silver">
              Est. Price
            </p>
          </div>
        </div>
        <div>
          <button>
            <img src="/images/chatbox.svg" alt="image" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollPricing;
