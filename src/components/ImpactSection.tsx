import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ImpactSection.css"; // CSS check kar lena

gsap.registerPlugin(ScrollTrigger);

export default function ImpactSection() {
  const mainRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  let ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "+=1100", 
        scrub: 0.5,       
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (self.progress > 0.03) {
            gsap.set(".circle-card", { pointerEvents: "none" });
          } else {
            gsap.set(".circle-card", { pointerEvents: "auto" });
          }
        }
      },
    });

    tl.to(".card-inner", { opacity: 0, duration: 0.5 }, 0);

    tl.to(".is--01", { xPercent: 50, yPercent: 50, duration: 1, ease: "power2.inOut" }, 0)
      .to(".is--02", { xPercent: -50, yPercent: 50, duration: 1, ease: "power2.inOut" }, 0)
      .to(".is--03", { xPercent: 50, yPercent: -50, duration: 1, ease: "power2.inOut" }, 0)
      .to(".is--04", { xPercent: -50, yPercent: -50, duration: 1, ease: "power2.inOut" }, 0);

    tl.to(".green-circle", { 
      scale: 0.75, 
      duration: 1.5, 
      ease: "power2.inOut" 
    }, 0.8);

    tl.to(".circle-card", { opacity: 0, duration: 0.1 }, 1.5);

    tl.to(".accent-text", { 
      opacity: 1, 
      y: 0, 
      duration: 0.6, 
      ease: "power2.out" 
    }, 1.7);

  }, mainRef);

  return () => ctx.revert();
}, []);

  return (
    <div ref={mainRef} className="impact-section-wrapper">
      <section className="impact-section">
        <div className="impact-container">
          
          {/* Left Side: Text */}
          <div className="impact-left">
            <div className="section_chips">
              <img src="/path-to-icon.svg" alt="" className="chips_icon" />
              The impact
            </div>
            <h2 className="impact-title">
              What changes <span className="text-grad">when Zig runs</span>
            </h2>
            <p className="impact-sub">
              What happens when the rep finally has a team.
            </p>
          </div>

          {/* Right Side: Stage Container */}
          <div className="impact-stage">
            
            <div className="circle-card is--01">
              <div className="card-inner">
                <div className="num">60+</div>
                <div className="desc">Hours back. Per rep. Every month.</div>
              </div>
            </div>

            <div className="circle-card is--02">
              <div className="card-inner">
                <div className="num">95%</div>
                <div className="desc">CRM accuracy. Zero manual entry.</div>
              </div>
            </div>

            <div className="circle-card is--03">
              <div className="card-inner">
                <div className="num">30%</div>
                <div className="desc">Faster from first touch to close.</div>
              </div>
            </div>

            <div className="circle-card is--04">
              <div className="card-inner">
                <div className="num">3x</div>
                <div className="desc">
                  Revenue impact. Measured across real deployments.
                </div>
              </div>
            </div>

            {/* Solid Massive Green Circle Layer */}
            <div className="green-circle">
              <p className="accent-text">
                The longer it runs, the wider the gap between you and everyone
                starting fresh.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}