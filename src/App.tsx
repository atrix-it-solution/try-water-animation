import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import ImpactSection from "./components/ImpactSection";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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

      {/* Modal */}
      {/* <div data-modal="cta" className="modal-component">
        <div data-modal="close" className="form-modal__bg"></div>
        <div className="modal_wrapp">
          <div data-modal="close" className="modal__close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 24 24"
              fill="none"
              className="close--icon"
            >
              <path
                d="M21 21L3 3M21.0001 3L3 21.0001"
                stroke="#15171A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="hubspot_form w-embed w-script">
            <div
              className="hs-form-frame"
              data-region="na2"
              data-form-id="b9003760-92fc-4558-85ce-1668b1feb822"
              data-portal-id="244756941"
            ></div>
          </div>
        </div>
      </div> */}
       <Navbar/>
      <HeroVideo/>
      
      {/* Navbar */}
     

      {/* Main */}
      <main className="main_wrapp"> 
        {/* Hero Section */}
         {/* <Herosec/> */}
          
        {/* Impact Section */}
         <ImpactSection />
         <HeroAnimation/>
         <ScrollVideoSection/>
         {/* <NanoBubbleSection/> */}

  <SalesSection/>
      
      
        {/* Footer Section */}
          <Footer/>
          
      </main>

    </div>
  );
};

export default App;