import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";

function CardDeal() {
  return (
    <section className={`${layout.section} sm:px-20 sm:gap-[180px] gap-10`}>
      <div>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button className={'bg-blue-gradient'}/>
      </div>
      <div className="max-w-[600px]">
      <img src={card} alt="" className="z-[5] h-full  w-full" />
      </div>
    </section>
  );
}

export default CardDeal;
