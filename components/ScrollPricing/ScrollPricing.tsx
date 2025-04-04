import { formatNumberToCurrency } from "@/utils/functions";
import { useState, useEffect } from "react";
import { TabState } from "../ConfiguratorPage/Configurator/ConfiguratorParent";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap/dist/gsap";

const ScrollPricing = ({
  totalPrice,
  activeTab,
}: {
  totalPrice: number;
  activeTab: TabState;
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const endSection = document.getElementById("endOfPricing");
    if (!endSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection Observer triggered:", entry.isIntersecting);
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null, // Observe relative to the viewport
        threshold: 0.1, // Trigger when 10% of #section5 is visible
      }
    );

    observer.observe(endSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  // // gsap animation when activeTab changes
  // const scrollPricingRef = useRef<HTMLDivElement>(null);

  // useGSAP(() => {
  //   if (scrollPricingRef.current) {
  //     // Fade out, then fade in
  //     gsap
  //       .timeline()
  //       .to(scrollPricingRef.current, {
  //         opacity: 0,
  //         duration: 0.3,
  //         ease: "power2.inOut",
  //       })
  //       .to(scrollPricingRef.current, {
  //         opacity: 1,
  //         duration: 0.3,
  //         ease: "power2.inOut",
  //       });
  //   }
  // }, [activeTab]); // Trigger animation when activeTab changes

  return (
    <div
      className={`w-full desktop:w-[438px] desktopG:w-full z-[10001] transition-opacity duration-500 ${
        isVisible ? "fixed opacity-100" : "opacity-0 hidden pointer-events-none"
      } fixed bottom-0 left-0 md:sticky md:bottom-0`}
    >
      <div className="md:mx-[23px] bg-[#D4D4D4]/30 backdrop-blur-2xl h-[91px] rounded-tl-[12px] rounded-tr-[12px] px-[24px] py-[20px]">
        <div className="flex justify-between">
          <div>
            <p className="text-[24px] font-[450] text-silver">
              {/* {formatNumberToCurrency(totalPrice)} */}
              {`${
                activeTab === "cash"
                  ? formatNumberToCurrency(totalPrice)
                  : `${formatNumberToCurrency(totalPrice)}/wk`
              }`}
            </p>
            <p className="text-[14px] font-[400] text-light-silver">
              Est. Price
            </p>
          </div>
          <div>
            <button>
              <img src="/images/chatbox.svg" alt="image" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollPricing;
