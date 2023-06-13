import React, { useEffect } from "react";

import banner from "../../assets/images/computer_banner1.jpg";
import PrimaryButton from "../../Shared/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="relative w-full">
      <img src={banner} className="w-full max-w-full h-full" alt="computer" />
      <div
        data-aos="fade-up"
        className="absolute top-5 lg:top-40 lg:left-20 lg:w-1/2 left-5 right-5"
      >
        <h1 className="text-2xl lg:text-5xl  font-bold">Parts of Computer</h1>
        <p className="py-6 text-[16px] lg:text-xl">
          The main part of any computer is the central processing unit or CPU.
          The CPU does all of the operations and calculations that make a
          computer run.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </div>
  );
};

export default Banner;
