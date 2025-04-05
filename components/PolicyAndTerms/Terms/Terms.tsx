"use client";
import React, { useState } from "react";
import PolicyAndTermsContents from "../PolicyAndTermsContents";
import { termsData } from "../termsData";

const Terms = () => {
  const [termsDataState, setTermsDataState] = useState(termsData);
  return (
    <div className="overflow-x-hidden">
      <div className="mx-[192px] my-[144px] min-h-[100vh] text-[#4f4749]">
        <div className="flex items-center justify-center flex-col ]">
          <h1 className="text-center text-[40px] font-[400]">
            Space Website Terms of Use
          </h1>
          <p className="text-center text-[16px] font-[400] mt-[24px]">
            Legal Information & Notices
          </p>
        </div>
        <hr className="mt-[60px] border-[1px] border-[#e1e1e1]" />
        <div>
          {termsDataState.map((term, i) => {
            return <PolicyAndTermsContents key={i} term={term} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Terms;
