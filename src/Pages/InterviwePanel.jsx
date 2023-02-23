import React from "react";
import CTA from "../components/CTA";
import Interview from "../components/Interview";
import ProcesFlow from "../components/ProcesFlow";
import Whychoose from "../components/Whychoose";
import Footer from "../components/Footer";
import Skills from "../components/Skills";

const InterviwePanel = () => {
  return (
    <div>
      <Interview />
      <CTA />
      <Whychoose />
      <ProcesFlow />
      <Skills />
      <Footer />
    </div>
  );
};

export default InterviwePanel;
