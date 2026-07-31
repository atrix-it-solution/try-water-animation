import { useEffect, useRef, useState, ReactNode } from 'react';
// import './ScrollImageReveal.css';

interface ScrollImageRevealProps {
  heading: string;
  description: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  sectionHeight?: number; // in vh, controls scroll distance (default 250)
}

const ScrollImageReveal = ({
  heading,
  description,
  imageSrc,
  imageAlt = 'Product',
  sectionHeight = 250,
}: ScrollImageRevealProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollable = section.offsetHeight - viewportHeight;

      if (scrollable <= 0) {
        setProgress(1);
        ticking = false;
        return;
      }

      let raw = -rect.top / scrollable;
      raw = Math.min(Math.max(raw, 0), 1);
      setProgress(raw);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Image: niche se upar aata hai (translateY 100% -> 0) with slight scale-up
  const imageTranslateY = 100 - progress * 100;
  const imageScale = 0.85 + progress * 0.15;
  const imageOpacity = Math.min(progress * 2.2, 1);

  // Text: thoda fade + upar shift hota hai jaise image reveal hoti hai
  const textOpacity = 1 - Math.min(progress * 1.6, 1) * 0.5;
  const textTranslateY = -progress * 50;

  return (
    <div
      className="scroll-reveal-section"
      ref={sectionRef}
      style={{ height: `${sectionHeight}vh` }}
    >
      <div className="scroll-reveal-sticky">
        <div
          className="scroll-reveal-text"
          style={{
            opacity: textOpacity,
            transform: `translateY(${textTranslateY}px)`,
          }}
        >
          <h1 className="scroll-reveal-heading">{heading}</h1>
          <p className="scroll-reveal-description">{description}</p>
        </div>

        <div className="scroll-reveal-image-wrapper">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="scroll-reveal-image"
            style={{
              transform: `translateY(${imageTranslateY}%) scale(${imageScale})`,
              opacity: imageOpacity,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollImageReveal;