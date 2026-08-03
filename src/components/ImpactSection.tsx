import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ImpactSection() {
  const mainRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // 🔥 100% FIX FOR VITE/NETLIFY: Hook ke andar register karein!
    // Ab bundler is line ko delete nahi kar payega.
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
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
            },
          },
        });

        tl.to(".card-inner", { opacity: 0, duration: 0.5 }, 0);

        tl.to(".is--01", { xPercent: 50, yPercent: 50, duration: 1, ease: "power2.inOut" }, 0)
          .to(".is--02", { xPercent: -50, yPercent: 50, duration: 1, ease: "power2.inOut" }, 0)
          .to(".is--03", { xPercent: 50, yPercent: -50, duration: 1, ease: "power2.inOut" }, 0)
          .to(".is--04", { xPercent: -50, yPercent: -50, duration: 1, ease: "power2.inOut" }, 0);

        tl.to(".green-circle", { scale: 0.75, duration: 1.5, ease: "power2.inOut" }, 0.8);
        tl.to(".circle-card", { opacity: 0, duration: 0.1 }, 1.5);
        tl.to(".accent-text", { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 1.7);
      });
    }, mainRef);

    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", handleLoad);

    return () => {
      ctx.revert();
      window.removeEventListener("load", handleLoad);
    };
  }, []); // Empty array

  return (
    <div ref={mainRef} className="impact-section-wrapper">
      <section className="impact-section">
        <div className="impact-container">
          {/* Left Side: Text */}
          <div className="impact-left">
            <div className="section_chips is--blue">
              <span className="icon_chips_wave">🫧</span>
              <div>Nano Benefits</div>
            </div>

            <h2 className="impact-title">
              Experience the Power of <span className="text-grad">Nano Bubble Water</span>
            </h2>

            <p className="impact-sub">
              Discover the next generation of hydration with Nano Bubble Water. Infused with billions of microscopic oxygen-rich bubbles, it helps maintain exceptional freshness, supports cleaner and better-quality water, and delivers a refreshing experience with every sip.
            </p>
          </div>

          {/* Right Side: Stage Container */}
          <div className="impact-stage">
            <div className="circle-card is--01">
              <div className="card-inner">
                <div className="num">99.9%</div>
                <div className="desc">Advanced purity with nano bubble technology.</div>
              </div>
            </div>
            <div className="circle-card is--02">
              <div className="card-inner">
                <div className="num">24/7</div>
                <div className="desc">Long-lasting nano bubbles inside the water.</div>
              </div>
            </div>
            <div className="circle-card is--03">
              <div className="card-inner">
                <div className="num">100%</div>
                <div className="desc">Fresh, clean, and oxygen-enriched hydration.</div>
              </div>
            </div>
            <div className="circle-card is--04">
              <div className="card-inner">
                <div className="num">∞</div>
                <div className="desc">Innovation inspired by next-generation water technology.</div>
              </div>
            </div>

            <div className="green-circle">
              <p className="accent-text">
                Every sip is enhanced with billions of nano bubbles for a cleaner, fresher, and healthier hydration experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}