"use client";
import React, { useEffect, useState } from "react";
import { TermsData, termsData } from "../termsData";
import { PrivacyPolicyData, privacyPolicyData } from "../privacyPolicyData";
import TermsContents from "../TermsContents";
import PrivacyPolicyContents from "../PrivacyPolicyContents";
import { pageType } from "../pageType";

const PrivacyPolicyAndTerms = ({ page }: { page: pageType }) => {
  type DataState =
    | { type: "terms"; data: TermsData }
    | { type: "privacy"; data: PrivacyPolicyData }
    | undefined;
  const [privacyPolicyAndTermsDataState, setPrivacyPolicyAndTermsDataState] =
    useState<DataState>();

  useEffect(() => {
    if (page === "terms-of-use") {
      setPrivacyPolicyAndTermsDataState({ type: "terms", data: termsData });
    } else {
      setPrivacyPolicyAndTermsDataState({
        type: "privacy",
        data: privacyPolicyData,
      });
    }
  }, [page]);

  return (
    <div className="overflow-x-hidden">
      <div className="mx-[20px] md:mx-[48px] lg:mx-[192px] my-[144px] min-h-[100vh] text-[#4f4749]">
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
            privacyPolicyAndTermsDataState?.type === "terms" &&
            privacyPolicyAndTermsDataState?.data.map((term, i) => {
              return <TermsContents key={i} term={term} />;
            })}
          {page === "privacy-policy" &&
            privacyPolicyAndTermsDataState?.type === "privacy" &&
            privacyPolicyAndTermsDataState?.data.map((privacyPolicy, i) => {
              return (
                <PrivacyPolicyContents key={i} privacyPolicy={privacyPolicy} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyAndTerms;
