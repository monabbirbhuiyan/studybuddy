import Comparison from "@/components/landing/comparison";
import CTA from "@/components/landing/cta";
import FAQ from "@/components/landing/faq";
import Feature from "@/components/landing/feature";
import { Footer } from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import HowItWork from "@/components/landing/how-it-work";
import Navbar from "@/components/landing/navbar";
import Pricing from "@/components/landing/pricing";
import Stats from "@/components/landing/stats";
import UseCase from "@/components/landing/use-case";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background overflow-hidden">
        {/* BG Effect */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        </div>
        <Navbar />
        <main className="pt-16 relative">
          <Hero />
          <Stats />
          <HowItWork />
          <Feature />
          <UseCase />
          <Comparison />
          <Pricing />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
