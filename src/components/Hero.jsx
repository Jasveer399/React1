import React from "react";
import style from "../style";
import { discount, robot } from "../assets/index";
import Getstarted from "./Getstart";

function Hero() {
  return (
    <section
      id="home"
      className='flex md:flex-row flex-col sm:py-10 py-2'
    >
      <div
        className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* A disCount Container */}
        <div className="bg-discount-gradient rounded-lg flex flex-row py-[6px] px-4 mb-2 gap-1">
          <img src={discount} alt="Discount" className="w-[32px] h-[32px]" />
          <p className={`${style.paragraph}`}>
            <span className="text-white">20%</span> Dicount For{" "}
            <span className="text-white">1 Month</span>Account
          </p>
        </div>

        {/* A Next Generation Payment Method Container */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <Getstarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Payment Method.
        </h1>

        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`${style.flexCenter} flex-1 flex-row my-10 relatives`}>
        <img src={robot} alt="Robot" className="w-full h-full relative z-[5]" />
        <div className="absolute z-0 w-[40%] h-[40%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[40%] h-[40%] bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`${style.flexCenter} ss:hidden`}>
        <Getstarted/>
      </div>
    </section>
  );
}

export default Hero;
