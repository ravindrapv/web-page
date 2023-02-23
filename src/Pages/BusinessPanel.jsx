import React from "react";
import BringBusiness from "../components/BringBusiness";
import Business from "../components/Business";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import PanelStrenth from "../components/PanelStrenth";
import ProcesFlow from "../components/ProcesFlow";
import Skills from "../components/Skills";
import Whychoose from "../components/Whychoose";

export default function BusinessPanel() {
  return (
    <div>
      <Business />
      <CTA />
      <Whychoose />
      <ProcesFlow />
      <Skills />
      <PanelStrenth />
      <BringBusiness />
      <Footer />
    </div>
  );
}
