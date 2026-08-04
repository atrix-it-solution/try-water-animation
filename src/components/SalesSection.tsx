import React, { useEffect, useRef } from 'react';

// 1. Data Array for mapping
const stepsData = [
  {
    num: "01",
    title: "Source Water",
    desc: "Pure water sourced from protected natural reserves.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-droplets text-white" aria-hidden="true">
        <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
        <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
      </svg>
    )
  },
  {
    num: "02",
    title: "Multi-Stage Filtration",
    desc: "Removes impurities, sediments, and contaminants.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-funnel text-white" aria-hidden="true">
        <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
      </svg>
    )
  },
  {
   
    num: "03",
    title: "Reverse Osmosis",
    desc: "Advanced membrane filtration for molecular-level purity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-waves text-white" aria-hidden="true">
        <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
        <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
        <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
      </svg>
    )
  },
  {
    num: "04",
    title: "UV Purification",
    desc: "Ultraviolet treatment eliminates microorganisms.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles text-white" aria-hidden="true">
        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
        <path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle>
      </svg>
    )
  },
  {
    num: "05",
    title: "Nano Bubble Infusion",
    desc: "Proprietary oxygen infusion at the nano scale.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask-conical text-white" aria-hidden="true">
        <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path>
        <path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path>
      </svg>
    )
  },
  {
    num: "06",
    title: "Quality Testing",
    desc: "Rigorous lab testing ensures premium standards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-white" aria-hidden="true">
        <circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path>
      </svg>
    )
  },
  {
    num: "07",
    title: "Premium Bottling",
    desc: "Sealed in eco-friendly bottles for freshness.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf text-white" aria-hidden="true">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
      </svg>
    )
  }
];

export const SalesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  useEffect(() => {
    // Card Stop Position
    const maxTranslateX = 75;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const maxScroll = height - windowHeight;
      const currentScroll = Math.max(0, -top);
      const rawProgress = Math.min(1, Math.max(0, currentScroll / maxScroll));

      targetProgressRef.current = rawProgress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    let animationFrameId: number;

    const renderLoop = () => {
      currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * 0.14;
      const diff = Math.abs(targetProgressRef.current - currentProgressRef.current);
      const progress = diff > 0.0001 ? currentProgressRef.current : targetProgressRef.current;

      if (trackRef.current) {
        const translateX = -(progress * maxTranslateX);
        trackRef.current.style.transform = `translate3d(${translateX}%, 0, 0)`;
      }

      if (stickyRef.current) {
        const stickyRect = stickyRef.current.getBoundingClientRect();
        const topX = stickyRect.width * 0.90;
        const topY = -80;
        const bottomY = stickyRect.height + 100;

        const firstCard = cardRefs.current[0];
        let baseLeft = 0;
        let baseTop = 0;
        let cardWidth = 350; 
        let gap = 32; 

        if (firstCard) {
          const rect = firstCard.getBoundingClientRect();
          baseLeft = rect.left - stickyRect.left;
          baseTop = rect.top - stickyRect.top;
          cardWidth = rect.width;
          
          const secondCard = cardRefs.current[1];
          if (secondCard) {
            gap = secondCard.getBoundingClientRect().left - rect.right;
          }
        }

        lineRefs.current.forEach((lineEl, index) => {
          if (!lineEl) return;
          let targetX = 0;
          let targetY = baseTop;

          // Starting Phantom Lines (Index 0, 1)
          if (index < 2) {
            const offsetMultiplier = 2 - index; 
            targetX = (baseLeft + cardWidth / 2) - ((cardWidth + gap) * offsetMultiplier);
          } 
          // Real Cards (Index 2 se 9 tak, jo cardRefs 0 se 7 tak connect hongi)
          else if (index >= 2 && index < 10) {
            const cardEl = cardRefs.current[index - 2];
            if (cardEl) {
              const rect = cardEl.getBoundingClientRect();
              targetX = (rect.left - stickyRect.left) + rect.width / 2;
              targetY = (rect.top - stickyRect.top);
            }
          } 
          // End Phantom Line
          else if (index === 10) {
            const lastCard = cardRefs.current[7]; 
            if (lastCard) {
              const rect = lastCard.getBoundingClientRect();
              targetX = (rect.right - stickyRect.left) + gap + (cardWidth / 2);
              targetY = baseTop;
            }
          }

          const slope = (targetX - topX) / (targetY - topY);
          const bottomX = topX + slope * (bottomY - topY);

          lineEl.setAttribute('x1', String(topX));
          lineEl.setAttribute('y1', String(topY));
          lineEl.setAttribute('x2', String(bottomX));
          lineEl.setAttribute('y2', String(bottomY));
        });
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="sales-scroll-wrapper" ref={sectionRef}>
      <div className="sales-sticky-viewport" ref={stickyRef}>
        
        <svg className="sales-lines-svg">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <line
              key={index}
              ref={(el) => { lineRefs.current[index] = el; }}
              className="sales-ray-line"
            />
          ))}
        </svg>

        <section className="section sales-section">
          <div className="container">
            <div className="sales-section_heading">
              <div className="section_heading">
                <div className="section_chips is--blue">
                  <span className="icon_chips_wave">🫧</span>
                  <div>Nano Bubble Technology</div>
                </div>
                <div className="sales-section_title">
                  <h2 className="title--l">
                    <span className="text--grad">Smarter Water.</span> Better Hydration Every Day
                  </h2>
                  <div className="sales-section_sub">
                    <p className="text--l">
                      Experience advanced nano bubble technology designed to deliver cleaner, fresher, and oxygen-rich water in every sip.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sales-cards-viewport">

              <div className="sales-cards_track" ref={trackRef}>
                
                {/* 2. Mapping the 7 steps */}
                {stepsData.map((step, index) => (
                  <div key={index} className={`sales-card`} ref={(el) => { cardRefs.current[index] = el; }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                      <div style={{ background: "#4A90E2", padding: "8px", borderRadius: "8px", display: "flex", color: "#fff" }}>
                        {step.icon}
                      </div>
                      <div style={{ color: "#9ca3af", fontSize: "1.25rem", fontWeight: "600" }}>{step.num}</div>
                    </div>
                    <div>
                      <h4 className="title--s is--green">{step.title}</h4>
                      <p className='title--xs'>{step.desc}</p>
                    </div>
                  </div>
                ))}

                {/* 3. CTA CARD (Kept outside loop since layout is different) */}
                <div className="sales-card is--cta" ref={(el) => { cardRefs.current[stepsData.length] = el; }}>
                  <h4 className="title--s cta-title">
                    Experience the future of hydration with Nano Bubble Water.
                  </h4>
                  <div className="sales-card_btns">
                    <a href="#start" className="button btn-outline">
                      <div>Explore Water</div>
                    </a>
                    <a href="#demo" className="button btn-solid">
                      <div>Contact Us</div>
                    </a>
                  </div>
                </div>
                
                <div className="horizontal-end-spacer"></div>
                
              </div>

          </div>
        </section>
      </div>
    </div>
  );
};