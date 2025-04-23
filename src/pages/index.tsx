
import type { NextPage } from 'next';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";
import Letter from "@/components/Letter";
import Offer from "@/components/Offer";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const Home: NextPage = () => {
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
      <FAQ />
      <CallToAction />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Home;
