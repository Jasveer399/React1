import React from "react";
import { Button } from "../components/index";
import styles, { layout } from "../style";
import { features } from "../contants";

const FeatureCard =({icon , index , content, title})=>(
  <div className={`flex flex-row p-4 feature-card rounded-3xl ${index === features.length-1?'mb0':'mb-4'}`}>
    <div className={`w-[64px] h-[64px] ${styles.flexCenter} rounded-full bg-dimBlue`}>
    <img src={icon} alt="" className="w-[50%] h-[50%] object-contain"/>
  </div>

  <div className="flex-1 flex flex-col ml-3">
    <h4 className="text-white font-poppins font-semibold text-[20px] mb-1">
      {title}
    </h4>
    <p className="text-gray-500 font-poppins text-[13px] mb-1">
      {content}
    </p>
  </div>
  </div>
)

function Business() {
  return (
    <section id="features" className={`${layout.section} sm:px-20`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button className={"font-poppins bg-blue-gradient"} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} index={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default Business;
