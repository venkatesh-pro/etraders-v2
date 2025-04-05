import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Terms from "@/components/PolicyAndTerms/Terms/Terms";
import React from "react";

const page = () => {
  return (
    <div className="">
      {/* <NavbarPolicyAndTerms /> */}
      <Navbar isPolicyAndTerms={true} />
      <Terms />

      <Footer isPolicyAndTerms={true} />
    </div>
  );
};

export default page;
