import React, { useEffect, useRef, useState } from "react";
import video from "../../public/Videos/bottel2.mp4";

export const ScrollVideoSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const maxScroll = height - windowHeight;
      const currentScroll = Math.max(0, -top);
      const rawProgress = Math.min(1, Math.max(0, currentScroll / maxScroll));
      targetProgressRef.current = rawProgress;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    let animationFrameId: number;
    let lastFrameTime = performance.now();
    const SMOOTHING_STRENGTH = 0.22;
    const SEEK_THRESHOLD = 0.016; 
    const renderLoop = (now: number) => {
      const deltaMs = now - lastFrameTime;
      lastFrameTime = now;
      const smoothing = 1 - Math.pow(1 - SMOOTHING_STRENGTH, deltaMs / 16.67);
      currentProgressRef.current +=
        (targetProgressRef.current - currentProgressRef.current) * smoothing;
      const video = videoRef.current;
      if (
        video &&
        video.duration &&
        !isNaN(video.duration) &&
        video.readyState >= 2
      ) {
        const targetTime = currentProgressRef.current * video.duration;
        if (
          !video.seeking &&
          Math.abs(video.currentTime - targetTime) > SEEK_THRESHOLD
        ) {
          video.currentTime = targetTime;
        }
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };
    animationFrameId = requestAnimationFrame(renderLoop);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  const handleVideoReady = () => {
    const video = videoRef.current;
    if (!video) return;
    video
      .play()
      .then(() => video.pause())
      .catch(() => {});

    setIsLoaded(true);
  };

  return (
    <div className="video-scroll-wrapper container" ref={sectionRef}>
      <div className="video-sticky-viewport ">
        <section className="video-section-container">
          <div className="video-grid">
            {/* Left Side: Text Content */}
            <div className="video-text-content">
              <div className="section_chips is--blue">
                <span className="icon_chips_wave">🫧</span>
                <div>Nano Bubble Technology</div>
              </div>

              <h2 className="video-heading">
                Pure Water.
                <br />
                <span className="text-green">Better Every Drop.</span>
              </h2>

              <p className="video-subtext">
                Experience cleaner, fresher, and oxygen-rich water powered by
                billions of nano bubbles that stay suspended for longer.
              </p>

              <div className="video-actions">
                <a href="#start" className="button btn-solid-blue">
                  <div>Explore Water</div>
                </a>

                <a href="#demo" className="button btn-outline-black">
                  <div>Contact Us</div>
                </a>
              </div>
            </div>
            {/* Right Side: Video */}
            <div className="video-media-content">
              <div
                className={`video-player-wrapper ${isLoaded ? "is-loaded" : ""}`}
              >
                <video
                  ref={videoRef}
                  className="scroll-video"
                  src={video}
                  muted
                  playsInline
                  preload="auto"
                  onLoadedMetadata={handleVideoReady}
                  onLoadedData={handleVideoReady}
                ></video>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
