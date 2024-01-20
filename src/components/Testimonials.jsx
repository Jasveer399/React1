import React from "react";
import styles from "../style";
import { FeedbackCard } from "./index";
import { feedbacks } from "../contants/index";

function Testimonials() {
  return (
    <section
      id="clients"
      className={`${
        (styles.paddingY, styles.flexCenter)
      } flex-col relative sm:px-20`}
    >
      <div className="w-full flex justify-between sm:items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <p
          className={`font-poppins font-normal text-dimWhite max-w-[450px]  pl-2`}
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z[1]">
        {feedbacks.map((feedback, index) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
