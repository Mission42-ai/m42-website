import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";
import Letter from "@/components/Letter";
import Offer from "@/components/Offer";
import Impact from "@/components/Impact";
import TextWithImage from "@/components/TextWithImage";
import Framework from "@/components/Framework";
import Testimonials from "@/components/Testimonials";
import ProductPresentation from "@/components/ProductPresentation";
import Guarantee from "@/components/Guarantee";
import SecondLogoSection from "@/components/SecondLogoSection";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing"; // Added import for Pricing component
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LogoSection />
      <Letter />
      <Offer />
      <Testimonials />
      <Pricing />
      <Guarantee />
      {/*<SecondLogoSection />*/}
      <FAQ />
      <CallToAction />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
