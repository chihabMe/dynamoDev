import Navbar from "@/components/layout/Navbar";
import HeroSection from "./_components/HeroSection";
import PricingSection from "./_components/PricingSection";

export default function Home() {
  return (

    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <HeroSection/>
      <PricingSection/>
      </main>
  );
}
