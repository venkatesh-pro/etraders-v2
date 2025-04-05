import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="">
      {/* <NavbarPolicyAndTerms /> */}
      <Navbar isPolicyAndTerms={true} />
      <div className="h-[100vh] bg-"></div>
      <Footer />
    </div>
  );
};

export default page;
