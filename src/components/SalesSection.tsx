import React, { useEffect, useRef } from 'react';

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

          // Starting Phantom Lines
          if (index < 2) {
            const offsetMultiplier = 2 - index; 
            targetX = (baseLeft + cardWidth / 2) - ((cardWidth + gap) * offsetMultiplier);
          } 
          // Real Cards
          else if (index >= 2 && index < 7) {
            const cardEl = cardRefs.current[index - 2];
            if (cardEl) {
              const rect = cardEl.getBoundingClientRect();
              targetX = (rect.left - stickyRect.left) + rect.width / 2;
              targetY = (rect.top - stickyRect.top);
            }
          } 
          // End Phantom Line
          else if (index === 7) {
            const lastCard = cardRefs.current[4];
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
          {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
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
              
              <div className="sales-card" ref={(el) => { cardRefs.current[0] = el; }}>
                <div className="title--s is--green">Step 01</div>
                <div className="title--xs">
                  Water is infused with billions of ultra-fine nano bubbles.
                </div>
              </div>

              <div className="sales-card" ref={(el) => { cardRefs.current[1] = el; }}>
                <div className="title--s is--green">Step 02</div>
                <div className="title--xs">
                  Nano bubbles remain suspended for long-lasting freshness.
                </div>
              </div>

              <div className="sales-card" ref={(el) => { cardRefs.current[2] = el; }}>
                <div className="title--s is--green">Step 03</div>
                <div className="title--xs">
                  Enhanced oxygen helps improve water quality naturally.
                </div>
              </div>

              <div className="sales-card" ref={(el) => { cardRefs.current[3] = el; }}>
                <div className="title--s is--green">Step 04</div>
                <div className="title--xs">
                  Enjoy a cleaner, fresher, and premium hydration experience.
                </div>
              </div>

              <div className="sales-card is--cta" ref={(el) => { cardRefs.current[4] = el; }}>
                <div className="title--s cta-title">
                  Experience the future of hydration with Nano Bubble Water.
                </div>
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