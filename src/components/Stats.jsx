import React from "react";
import style from "../style";
import { stats } from "../contants/index";

function Stats() {
  return (
    <section className={`${style.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className="flex flex-1 mx-24 rounded-lg justify-center gap-5 items-center  bg-black/30">
          <h4 className=" text-white xs:text-[40px] text-[30px] font-poppins font-semibold leading-10 xs:leading-[53px]">{stat.value}</h4>
          <p className="font-poppins font-semibold leading-6 xs:leading-[30px] text-gradient">{stat.title}</p>
        </div>
      ))}
    </section>
  );c
}

export default Stats;
