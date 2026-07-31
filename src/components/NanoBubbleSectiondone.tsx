import React, { useEffect, useRef, useState } from 'react';
// import './NanoBubbleSection.css';

export const NanoBubbleSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // --- Scroll Logic ---
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const maxScroll = height - windowHeight;
      const currentScroll = Math.max(0, -top);
      let progress = Math.min(1, Math.max(0, currentScroll / maxScroll));
      
      requestAnimationFrame(() => setScrollProgress(progress));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Navbar Hide/Show Logic ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const navElements = document.querySelectorAll('header, nav, .navbar, .nav-bar');
        
        navElements.forEach((el) => {
          const navElement = el as HTMLElement;
          navElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          
          if (entry.isIntersecting) {
            navElement.style.opacity = '0';
            navElement.style.pointerEvents = 'none';
            navElement.style.transform = 'translateY(-100%)';
          } else {
            navElement.style.opacity = '1';
            navElement.style.pointerEvents = 'auto';
            navElement.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.05 } 
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      const navElements = document.querySelectorAll('header, nav, .navbar, .nav-bar');
      navElements.forEach((el) => {
        const navElement = el as HTMLElement;
        navElement.style.opacity = '1';
        navElement.style.pointerEvents = 'auto';
        navElement.style.transform = 'translateY(0)';
      });
    };
  }, []);

  // --- New Sequenced Animation Timings ---
  
  // 1. (0% - 35%) Bottle Draw
  const drawProgress = Math.min(1, scrollProgress / 0.35);
  const strokeOffset = 1000 - (drawProgress * 1000); 
  const lineOpacity = drawProgress > 0.01 ? 1 : 0;
  const glassOpacity = scrollProgress < 0.20 ? 0 : Math.min(1, (scrollProgress - 0.20) / 0.15);

  // 2. (30% - 65%) Water Fill
  const fillProgress = scrollProgress < 0.30 
    ? 0 
    : Math.min(1, (scrollProgress - 0.30) / 0.35);

  const liquidOpacity = fillProgress > 0 ? 1 : 0;
  const maxFillCap = 0.87; 
  const currentFillPercentage = fillProgress * maxFillCap;

  // 3. (55% - 70%) Label Slide & Fade in
  const labelProgress = scrollProgress < 0.55 
    ? 0 
    : Math.min(1, (scrollProgress - 0.55) / 0.15);

  // 4. (70% - 85%) Side Info Text Fades In First
  const textProgress = scrollProgress < 0.70 
    ? 0 
    : Math.min(1, (scrollProgress - 0.70) / 0.15);

  // 5. (80% - 95%) Connected Lines Draw In
  const linesDrawProgress = scrollProgress < 0.80 
    ? 0 
    : Math.min(1, (scrollProgress - 0.80) / 0.15);
    
  const infoLineOffset = 100 - (linesDrawProgress * 100);
  const dotOpacity = linesDrawProgress > 0.95 ? 1 : (linesDrawProgress > 0.85 ? (linesDrawProgress - 0.85) * 6.6 : 0);

  return (
    <div className="nano-bubble-scroll-section" ref={containerRef}>
      <div className="sticky-canvas">
        <div className="bottle-master-wrapper">
          
          {/* Extended viewBox width to 1200 so text and lines fit naturally beside the bottle */}
          <svg className="hyper-glass-svg" viewBox="0 0 1200 750" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="glassGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient id="glassOutlineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="30%" stopColor="#c5f2ff" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#70d6ff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
              </linearGradient>

              <linearGradient id="glassShine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="10%" stopColor="#ffffff" stopOpacity="0.05" />
                <stop offset="90%" stopColor="#ffffff" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
              </linearGradient>

              <linearGradient id="liquidGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#0041c2" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#0072ff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.3" />
              </linearGradient>

              <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dcdcdc" />
                <stop offset="30%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#e8e8e8" />
                <stop offset="100%" stopColor="#b3b3b3" />
              </linearGradient>

              <linearGradient id="labelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dcdcdc" />
                <stop offset="15%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#f5f5f5" />
                <stop offset="85%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#dcdcdc" />
              </linearGradient>

              <clipPath id="bottleClip">
                <path d="M 600 710 C 540 710, 500 690, 500 630 L 500 250 C 500 140, 545 110, 555 80 L 555 40 L 645 40 L 645 80 C 655 110, 700 140, 700 250 L 700 630 C 700 690, 660 710, 600 710 Z" />
              </clipPath>
            </defs>


            {/* ======================================= */}
            {/* 1. INFO TEXTS (Fades in before lines) */}
            {/* ======================================= */}
            
            {/* LEFT SIDE TEXT (Teal Color) */}
     <g style={{ opacity: textProgress }}>
  <text x="50" y="240" fill="#07B79E" fontSize="22" fontFamily="'Montserrat', 'Helvetica Neue', Arial, sans-serif" letterSpacing="0.5">
    <tspan x="50" dy="0" fontWeight="300">Billions of nano bubbles.</tspan>
    <tspan x="50" dy="32" fontWeight="500">Suspended in every drop.</tspan>
  </text>

  <text x="50" y="420" fill="#07B79E" fontSize="22" fontFamily="'Montserrat', 'Helvetica Neue', Arial, sans-serif" letterSpacing="0.5">
    <tspan x="50" dy="0" fontWeight="300">Advanced oxygen infusion</tspan>
    <tspan x="50" dy="32" fontWeight="500">for fresher hydration.</tspan>
  </text>

  <text x="50" y="580" fill="#07B79E" fontSize="22" fontFamily="'Montserrat', 'Helvetica Neue', Arial, sans-serif" letterSpacing="0.5">
    <tspan x="50" dy="0" fontWeight="300">Ultra-fine bubbles improve</tspan>
    <tspan x="50" dy="32" fontWeight="500">water quality naturally.</tspan>
  </text>
</g>

            {/* RIGHT SIDE TEXT (Soft Blue Color) */}
        <g style={{ opacity: textProgress }}>
  <text x="1150" y="240" fill="#729BBD" fontSize="22" fontFamily="'Montserrat', 'Helvetica Neue', Arial, sans-serif" textAnchor="end" letterSpacing="0.5">
    <tspan x="1150" dy="0" fontWeight="300">Cleaner, fresher water</tspan>
    <tspan x="1150" dy="32" fontWeight="500">with lasting purity.</tspan>
  </text>

  <text x="1150" y="420" fill="#729BBD" fontSize="22" fontFamily="'Montserrat', 'Helvetica Neue', Arial, sans-serif" textAnchor="end" letterSpacing="0.5">
    <tspan x="1150" dy="0" fontWeight="300">Innovative nano technology</tspan>
    <tspan x="1150" dy="32" fontWeight="500">designed for every sip.</tspan>
  </text>

  <text x="1150" y="580" fill="#729BBD" fontSize="22" fontFamily="'Montserrat', 'Helvetica Neue', Arial, sans-serif" textAnchor="end" letterSpacing="0.5">
    <tspan x="1150" dy="0" fontWeight="300">Premium hydration powered</tspan>
    <tspan x="1150" dy="32" fontWeight="500">by nano bubble science.</tspan>
  </text>
</g>


            {/* ======================================= */}
            {/* 2. LINES & DOTS (Draws from text to bottle) */}
            {/* ======================================= */}

            {/* LEFT LINES (Draws left to right) */}
            <g stroke="#07B79E" strokeWidth="1.5" fill="none" style={{ opacity: linesDrawProgress > 0 ? 1 : 0 }}>
              <path d="M 50 295 L 350 295 L 500 350" pathLength="100" strokeDasharray="100" strokeDashoffset={infoLineOffset} />
              <path d="M 50 475 L 350 475 L 500 475" pathLength="100" strokeDasharray="100" strokeDashoffset={infoLineOffset} />
              <path d="M 50 635 L 350 635 L 500 580" pathLength="100" strokeDasharray="100" strokeDashoffset={infoLineOffset} />
              
              <g fill="#07B79E" stroke="none" style={{ opacity: dotOpacity, transition: 'opacity 0.2s ease' }}>
                <circle cx="500" cy="350" r="4.5" />
                <circle cx="500" cy="475" r="4.5" />
                <circle cx="500" cy="580" r="4.5" />
              </g>
            </g>

            {/* RIGHT LINES (Draws right to left) */}
            <g stroke="#729BBD" strokeWidth="1.5" fill="none" style={{ opacity: linesDrawProgress > 0 ? 1 : 0 }}>
              <path d="M 1150 295 L 850 295 L 700 350" pathLength="100" strokeDasharray="100" strokeDashoffset={infoLineOffset} />
              <path d="M 1150 475 L 850 475 L 700 475" pathLength="100" strokeDasharray="100" strokeDashoffset={infoLineOffset} />
              <path d="M 1150 635 L 850 635 L 700 580" pathLength="100" strokeDasharray="100" strokeDashoffset={infoLineOffset} />
              
              <g fill="#729BBD" stroke="none" style={{ opacity: dotOpacity, transition: 'opacity 0.2s ease' }}>
                <circle cx="700" cy="350" r="4.5" />
                <circle cx="700" cy="475" r="4.5" />
                <circle cx="700" cy="580" r="4.5" />
              </g>
            </g>


            {/* ======================================= */}
            {/* 3. CENTER BOTTLE (Offset to Center X:600) */}
            {/* ======================================= */}
            <g style={{ opacity: glassOpacity, transition: 'opacity 0.2s ease-out' }}>
              <path
                d="M 600 710 C 540 710, 500 690, 500 630 L 500 250 C 500 140, 545 110, 555 80 L 555 40 L 645 40 L 645 80 C 655 110, 700 140, 700 250 L 700 630 C 700 690, 660 710, 600 710 Z"
                fill="url(#glassShine)"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeOpacity="0.4"
              />

              <path d="M 515 620 L 515 260 C 515 160, 550 120, 560 90" stroke="#ffffff" strokeWidth="4" fill="none" opacity="0.6" filter="blur(1px)" />
              <path d="M 685 620 L 685 260 C 685 160, 650 120, 640 90" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.3" filter="blur(2px)" />

              <rect x="550" y="15" width="100" height="25" rx="5" fill="url(#capGrad)" />
              <rect x="553" y="10" width="94" height="6" rx="2" fill="url(#capGrad)" />
            </g>

            {/* WATER FILLING ANIMATION */}
            <g clipPath="url(#bottleClip)">
              <g 
                style={{ 
                  opacity: liquidOpacity,
                  transform: `translateY(${(1 - currentFillPercentage) * 650}px)`
                }}
              >
                <rect x="450" y="50" width="300" height="700" fill="url(#liquidGrad)" />

                <g stroke="rgba(255, 255, 255, 0.75)" strokeWidth="0.8" fill="rgba(255, 255, 255, 0.15)">
                  <circle cx="550" cy="200" r="3" className="bubble b1" />
                  <circle cx="630" cy="250" r="2" className="bubble b2" />
                  <circle cx="580" cy="300" r="4" className="bubble b3" />
                  <circle cx="650" cy="350" r="2.5" className="bubble b1" />
                  <circle cx="540" cy="400" r="3.5" className="bubble b2" />
                  <circle cx="610" cy="450" r="2" className="bubble b3" />
                  <circle cx="560" cy="500" r="4" className="bubble b1" />
                  <circle cx="625" cy="550" r="3" className="bubble b2" />
                  <circle cx="580" cy="600" r="2.5" className="bubble b3" />
                  <circle cx="640" cy="650" r="3.5" className="bubble b1" />
                </g>
              </g>
            </g>

            {/* RYVR PREMIUM LABEL */}
            <g 
              transform={`translate(0, ${(1 - labelProgress) * 30})`}
              style={{ opacity: labelProgress }}
            >
              <rect x="501.5" y="395" width="197" height="90" fill="url(#labelGrad)" opacity="0.95" />
              <rect x="501.5" y="395" width="197" height="2" fill="#ffffff" />
              <rect x="501.5" y="483" width="197" height="2" fill="#a0a0a0" />

              <text 
                x="600" y="447" 
                textAnchor="middle" dominantBaseline="middle" 
                fontFamily="'Montserrat', 'Helvetica Neue', Arial, sans-serif" 
                fontSize="42" fontWeight="900" fill="#0a1128" letterSpacing="8"
              >
                RYVR
              </text>
              <text 
                x="602" y="470" 
                textAnchor="middle" dominantBaseline="middle" 
                fontFamily="'Montserrat', 'Helvetica Neue', Arial, sans-serif" 
                fontSize="9" fontWeight="700" fill="#00d2ff" letterSpacing="4"
              >
                NANO WATER
              </text>
            </g>

            {/* BOTTLE LEFT & RIGHT OUTLINE */}
            <path
              d="M 600 710 C 540 710, 500 690, 500 630 L 500 250 C 500 140, 545 110, 555 80 L 555 40 L 600 40"
              fill="none" stroke="url(#glassOutlineGrad)" strokeWidth="3.5" strokeLinecap="round" filter="url(#glassGlow)"
              pathLength="1000"
              style={{ opacity: lineOpacity, strokeDasharray: 1000, strokeDashoffset: strokeOffset }}
            />
            <path
              d="M 600 710 C 660 710, 700 690, 700 630 L 700 250 C 700 140, 655 110, 645 80 L 645 40 L 600 40"
              fill="none" stroke="url(#glassOutlineGrad)" strokeWidth="3.5" strokeLinecap="round" filter="url(#glassGlow)"
              pathLength="1000"
              style={{ opacity: lineOpacity, strokeDasharray: 1000, strokeDashoffset: strokeOffset }}
            />

          </svg>
        </div>
      </div>
    </div>
  );
};