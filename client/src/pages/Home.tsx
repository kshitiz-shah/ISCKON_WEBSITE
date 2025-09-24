import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DevoteesCorner from "@/components/DevoteesCorner";
import KrishnaConsciousness from "@/components/KrishnaConsciousness";
import DivineHospitality from "@/components/DivineHospitality";
import DonationSection from "@/components/DonationSection";
import DailySchedule from "@/components/DailySchedule";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DevoteesCorner />
        <KrishnaConsciousness />
        <DivineHospitality />
        <DonationSection />
        <DailySchedule />
        <WhatMakesUsDifferent />
      </main>
      <Footer />
    </div>
  );
}