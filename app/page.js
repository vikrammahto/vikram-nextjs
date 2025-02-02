import React from "react";
import CtaBanner from "./components/CtaBanner";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Skills/>
      <Services/>
      <CtaBanner />
    </React.Fragment>
  );
}
