import React from "react";
import Navbar from "components/layout/navbar/Navbar";
import Header from "components/layout/header/Header";
import HowItWorks from "components/layout/howItWorks/HowItWorks";
import WhyUs from "components/layout/whyUs/WhyUs";
import Faq from "components/layout/faq/Faq";
import StartNow from "components/layout/startNow/StartNow";
import Footer from "components/layout/footer/Footer";
import FloatingButton from "components/layout/floatingButton/FloatingButton";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <HowItWorks></HowItWorks>
      <WhyUs></WhyUs>
      <Faq></Faq>
      <StartNow></StartNow>
      <Footer></Footer>
      <FloatingButton> </FloatingButton>
    </div>
  );
}

export default Home;
