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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-white section-transition to-gray">
        <Hero />
      </div>
      <div className="bg-gray-50 section-transition to-white">
        <LogoSection />
      </div>
      <div className="bg-white section-transition to-gray">
        <Letter />
      </div>
      <div className="bg-gray-50 section-transition to-white">
        <Offer />
      </div>
      <div className="bg-white section-transition to-blue">
        <Testimonials />
      </div>
      <div className="section-blue-gradient text-white">
        <ProductPresentation />
      </div>
      <div className="bg-white">
        <Pricing />
      </div>
      <div className="bg-gray-50 section-transition to-white">
        <Guarantee />
      </div>
      <div className="bg-white section-transition to-gray">
        <SecondLogoSection />
      </div>
      <div className="bg-gray-50 section-transition to-white">
        <FAQ />
      </div>
      <div className="bg-white section-transition to-blue">
        <CallToAction />
      </div>
      <div className="bg-brand-blue">
        <Footer />
      </div>
    </div>
  );
};

export default Index;