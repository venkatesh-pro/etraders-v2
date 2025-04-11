import React, { useRef } from "react";
import Configurator from "./Configurator";
import { ConfiguratorData } from "@/data";
import { TabState } from "./ConfiguratorParent";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";

interface ConfiguratorTabsProps {
  activeTab: TabState;
  handleActiveTab: (state: TabState) => void;
}
const ConfiguratorTabs: React.FC<ConfiguratorTabsProps> = ({
  activeTab,
  handleActiveTab,
}) => {
  return (
    <div>
      <ul className="flex justify-between w-full text-center">
        <li
          className={`w-full ${
            activeTab === "cash"
              ? "border-b-[#0071e3] border-b-[2px] text-[#0071e3]"
              : "border-b-[#c4c4c4] border-b-[1px] text-[#5c5e62]"
          }`}
        >
          <button
            className="text-[17px]  font-[450] text-center w-full"
            onClick={() => {
              handleActiveTab("cash");
            }}
          >
            Cash
          </button>
        </li>
        <li
          className={`w-full  ${
            activeTab === "lease"
              ? "border-b-[#0071e3] border-b-[2px] text-[#0071e3]"
              : "border-b-[#c4c4c4] border-b-[1px] text-[#5c5e62]"
          } ml-[16px]`}
        >
          <button
            className="text-[17px] font-[450] text-center w-full"
            onClick={() => {
              handleActiveTab("lease");
            }}
          >
            Lease
          </button>
        </li>
      </ul>
    </div>
  );
};

interface ConfiguratorTabsParentProps {
  activeTab: TabState;
  setActiveTab: React.Dispatch<React.SetStateAction<TabState>>;
  currentModel: string;
  isMirrored: boolean;
  configuratorData: ConfiguratorData;
  setConfiguratorData: (data: ConfiguratorData) => void;
  setSliderImages: (images: string[]) => void;
  setIsImageChangeScroll: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpenCarousel: React.Dispatch<React.SetStateAction<boolean>>;
  generateSliderImagesForInterior: (image: string) => string[];
  generateSolarImages: (image: string) => string[];
  generateEssentialImages: (image: string) => string[];
  totalPrice: number;
}

const ConfiguratorTabsParent: React.FC<ConfiguratorTabsParentProps> = ({
  activeTab,
  setActiveTab,
  currentModel,
  isMirrored,
  configuratorData,
  setConfiguratorData,
  setSliderImages,
  setIsImageChangeScroll,
  generateSliderImagesForInterior,
  generateSolarImages,
  generateEssentialImages,
  setIsModalOpen,
  setIsModalOpenCarousel,
  totalPrice,
}) => {
  const configuratorRef = useRef<HTMLDivElement>(null);

  const handleActiveTab = (state: TabState) => {
    setActiveTab(state);
  };

  useGSAP(() => {
    if (configuratorRef.current) {
      // Fade out, then fade in
      gsap
        .timeline()
        .to(configuratorRef.current, {
          opacity: 0.2,
          duration: 0.3,
          ease: "power2.inOut",
        })
        .to(configuratorRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
    }
  }, [activeTab]); // Trigger animation when activeTab changes
  return (
    <div>
      <span className="text-dark-red text-[17px]">New</span>
      <h1 className="text-mobile-header-lg font-[450] leading-[1.10] mt-[10px]">
        Customize your Space One
      </h1>
      <p className="text-desktop-body-xl font-[450] mt-[30px]">
        <span>Make it yours.</span>
        <span className="text-light-silver">
          {" "}
          Configure your exterior and interior layout.
        </span>
      </p>

      {/* tabs */}
      <div className="mt-[60px]">
        <ConfiguratorTabs
          activeTab={activeTab}
          handleActiveTab={handleActiveTab}
        />
      </div>
      <div ref={configuratorRef}>
        <Configurator
          activeTab={activeTab}
          currentModel={currentModel}
          isMirrored={isMirrored}
          configuratorData={configuratorData}
          setConfiguratorData={setConfiguratorData}
          setSliderImages={setSliderImages}
          setIsImageChangeScroll={setIsImageChangeScroll}
          generateSliderImagesForInterior={generateSliderImagesForInterior}
          generateSolarImages={generateSolarImages}
          generateEssentialImages={generateEssentialImages}
          setIsModalOpen={setIsModalOpen}
          setIsModalOpenCarousel={setIsModalOpenCarousel}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
};

export default ConfiguratorTabsParent;
