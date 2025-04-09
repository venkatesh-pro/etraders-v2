import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const SpaceOne = () => {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default SpaceOne;
