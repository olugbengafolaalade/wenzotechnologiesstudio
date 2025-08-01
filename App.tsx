import { useState, useEffect } from "react";
import { HeroSection } from "./components/HeroSection";
import { EmpoweringEntrepreneurs } from "./components/EmpoweringEntrepreneurs";
import { StudioModel } from "./components/StudioModel";
import { WhoWeWorkWith } from "./components/WhoWeWorkWith";
import { Testimonials } from "./components/Testimonials";
import { Careers } from "./components/Careers";
import { CallToAction } from "./components/CallToAction";
import { Navigation } from "./components/Navigation";
import { PageBackground } from "./components/PageBackground";
import { CareersPage } from "./components/CareersPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Simple routing based on hash
    const handleHashChange = () => {
      const path = window.location.pathname;
      if (path === "/careers") {
        setCurrentPage("careers");
      } else {
        setCurrentPage("home");
      }
    };

    // Handle navigation clicks
    const handleNavigation = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A") {
        const href = target.getAttribute("href");
        if (href === "/careers") {
          e.preventDefault();
          window.history.pushState(null, "", "/careers");
          setCurrentPage("careers");
        } else if (href === "/" || href === "") {
          e.preventDefault();
          window.history.pushState(null, "", "/");
          setCurrentPage("home");
        }
      }
    };

    window.addEventListener("popstate", handleHashChange);
    document.addEventListener("click", handleNavigation);
    handleHashChange(); // Check initial state

    return () => {
      window.removeEventListener("popstate", handleHashChange);
      document.removeEventListener("click", handleNavigation);
    };
  }, []);

  if (currentPage === "careers") {
    return (
      <div className="min-h-screen bg-black text-white relative font-exo">
        <PageBackground />
        <Navigation />
        <CareersPage />
        <CallToAction />
      </div>
    );
  }

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