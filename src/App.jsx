import React from "react";
import styles from "./style";

import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Client,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className=" bg-primary overflow-hidden w-full">
      <div className={`${(styles.paddingX, styles.flexCenter)}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary${styles.flexStart}${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Client />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
