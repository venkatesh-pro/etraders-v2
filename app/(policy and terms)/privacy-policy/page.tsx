import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PrivacyPolicyAndTerms from "@/components/PolicyAndTerms/PrivacyPolicyAndTerms/PrivacyPolicyAndTerms";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Navbar isPolicyAndTerms={true} />
      <PrivacyPolicyAndTerms page={'privacy-policy'}/>

      <Footer isPolicyAndTerms={true} />
    </div>
  );
};

export default page;
