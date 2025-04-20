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
      <div className="bg-white">
        <Hero />
      </div>
      <div className="bg-gray-50">
        <LogoSection />
      </div>
      <div className="bg-white">
        <Letter />
      </div>
      <div className="bg-gray-50">
        <Offer />
      </div>
      <div className="bg-brand-blue text-white">
        <Testimonials />
      </div>
      <div className="bg-white">
        <ProductPresentation />
      </div>
      <div className="bg-gray-50">
        <Pricing />
      </div>
      <div className="bg-brand-blue text-white">
        <Guarantee />
      </div>
      <div className="bg-white">
        <SecondLogoSection />
      </div>
      <div className="bg-gray-50">
        <FAQ />
      </div>
      <div className="bg-brand-blue text-white">
        <CallToAction />
      </div>
      <div className="bg-gray-800 text-white">
        <Footer />
      </div>
    </div>
  );
};

export default Index;