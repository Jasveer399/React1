import React from "react";
import { quotes } from "../assets/index";
import styles from "../style";

function FeedbackCard({ content, name, title, img }) {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-3xl max-w-96 md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="quotes" className="w-[27px] h-[27px] " />

      <p className="mt-10 font-poppins text-[18px] text-white">
        Money is only a tool. It will take you wherever you wish, but it will
        not replace you as the driver.
      </p>

      <div className="flex items-center gap-8">
        <img src={img} alt="UserImag" className="mt-10 w-[50px]  h-[50px]" />
        <div className=" mt-10 ">
          <h4 className="text-white font-poppins text-[18px]">{name}</h4>
          <p className='text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
