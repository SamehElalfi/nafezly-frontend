import React from "react";
import Header from "components/layout/header/Header";
import HowItWorks from "components/layout/howItWorks/HowItWorks";
import WhyUs from "components/layout/whyUs/WhyUs";
import Faq from "components/layout/faq/Faq";
import StartNow from "components/layout/startNow/StartNow";

function HomePage() {
  return (
    <div>
      <Header></Header>
      <HowItWorks></HowItWorks>
      <WhyUs></WhyUs>
      <Faq></Faq>
      <StartNow></StartNow>
    </div>
  );
}

export default HomePage;
