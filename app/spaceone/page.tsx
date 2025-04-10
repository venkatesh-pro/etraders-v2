import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SpaceOne from "@/components/SpaceOne/SpaceOne";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Navbar isPolicyAndTerms={true} />
      <SpaceOne />
      <Footer isPolicyAndTerms={true} />
    </div>
  );
};

export default page;
