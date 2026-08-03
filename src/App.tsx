import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import ImpactSection from "./components/ImpactSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SalesSection } from "./components/SalesSection";
import { ScrollVideoSection } from "./components/ScrollVideoSection";
import HeroAnimation from "./components/HeroAnimation";
import HeroVideo from "./components/HeroVideo";

declare global {
  interface Window {
    Webflow?: any;
    Lenis?: any;
  }
}

export const App: React.FC = () => {
  return (
    <div className="page_wrapp">
      <Navbar />

      <main className="main_wrapp">
        {/* Hero Section */}
        <HeroVideo />
        <ScrollVideoSection />
        <HeroAnimation />
        <ImpactSection />
        <SalesSection />
        {/* Footer Section */}
        <Footer />
      </main>
    </div>
  );
};

export default App;
