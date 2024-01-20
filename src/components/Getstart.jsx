import React from "react";
import styles from "../style";
import { arrowUp } from "../assets/index";

function Getstartd() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient text-white p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium leading-[23px] text-[18px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="Arrowup" />
        </div>
        <p className="font-poppins font-medium leading-[23px] text-[18px]">
            <span className="text-gradient">Started</span>
          </p>
      </div>
    </div>
  );
}

export default Getstartd;
