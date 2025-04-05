"use client";
import React, { useState } from "react";
import { termsData } from "../termsData";
import { privacyPolicyData } from "../privacyPolicyData";
import TermsContents from "../TermsContents";
import PrivacyPolicyContents from "../PrivacyPolicyContents";

const PrivacyPolicyAndTerms = ({ page }) => {
  const [privacyPolicyAndTermsDataState, setPrivacyPolicyAndTermsDataState] =
    useState();

  useState(() => {
    if (page === "terms-of-use") {
      setPrivacyPolicyAndTermsDataState(termsData);
    } else {
      setPrivacyPolicyAndTermsDataState(privacyPolicyData);
    }
  }, [page]);

  return (
    <div className="overflow-x-hidden">
      <div className="mx-[192px] my-[144px] min-h-[100vh] text-[#4f4749]">
        <div className="flex items-center justify-center flex-col ]">
          <h1 className="text-center text-[40px] font-[400]">
            {page === "terms-of-use"
              ? "Space Website Terms of Use"
              : "Space Privacy Policy"}
          </h1>
          <p className="text-center text-[16px] font-[400] mt-[24px]">
            {page === "terms-of-use"
              ? "Legal Information & Notices"
              : "Space Privacy Policy describes how Space collects, uses, and shares your personal data."}
          </p>
        </div>
        <hr className="mt-[60px] border-[1px] border-[#e1e1e1]" />
        <div>
          {page === "terms-of-use" &&
            privacyPolicyAndTermsDataState?.map((term, i) => {
              return <TermsContents key={i} term={term} />;
            })}
          {page === "privacy-policy" &&
            privacyPolicyAndTermsDataState?.map((privacyPolicy, i) => {
              return <PrivacyPolicyContents key={i} privacyPolicy={privacyPolicy} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyAndTerms;
