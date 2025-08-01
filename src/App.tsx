import { HeroSection } from "./components/HeroSection";
import { EmpoweringEntrepreneurs } from "./components/EmpoweringEntrepreneurs";
import { StudioModel } from "./components/StudioModel";
import { WhoWeWorkWith } from "./components/WhoWeWorkWith";
import { Testimonials } from "./components/Testimonials";
import { Careers } from "./components/Careers";
import { CallToAction } from "./components/CallToAction";
import { Navigation } from "./components/Navigation";
import { PageBackground } from "./components/PageBackground";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative font-exo">
      <PageBackground />
      <Navigation />
      <HeroSection />
      <EmpoweringEntrepreneurs />
      <StudioModel />
      <WhoWeWorkWith />
      <Testimonials />
      <Careers />
      <CallToAction />
    </div>
  );
}