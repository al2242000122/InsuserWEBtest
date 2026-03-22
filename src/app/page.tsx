import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { FinancialScores } from "@/components/FinancialScores";
import { Testimonials } from "@/components/Testimonials";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";

export default function Home() {
  return (
    <main className="pb-20">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <FinancialScores />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
      <BottomNav />
    </main>
  );
}
