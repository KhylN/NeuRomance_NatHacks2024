import React from "react";
import { Hero } from "./Hero/Hero";
import { Features } from "./Features/Features";
import { HowItWorks } from "./HowItWorks/HowItWorks";
import { CTA } from "./CTA/CTA";
import { Footer } from "./Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="pricing">
        <CTA />
      </section>
      <section id="about">
        <Footer />
      </section>
    </>
  );
}
