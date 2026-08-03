
import video from "../../public/Videos/hero.mp4"

const HeroVideo = () => {
  return (
    <section className="hero-video-section">
      {/* Dark Overlay taaki text clear dikhe */}
      <div className="video-overlay"></div>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline // Mobile me fullscreen hone se rokne aur autoplay ke liye zaroori
        className="bg-video"
      >
        {/* Yahan apni video ka path daalein (public folder me rakhein) */}
        <source src={video} />
        Your browser does not support the video tag.
      </video>

      {/* Center Content */}
      <div className="hero-video-content">
        <span className="hero-subheading">Welcome to the Future</span>
        
        <h1 className="hero-heading">
          Transform Your Digital <br />
          <span className="text-highlight">Experience</span>
        </h1>
        
        <p className="hero-description">
          We build high-performance, interactive web experiences that engage your audience and drive growth. Elevate your brand with our cutting-edge solutions.
        </p>
        
        {/* Buttons using your Master CSS classes */}
        <div className="hero-actions">
          <a href="/get-started" className="btn btn-solid-blue">
            Get Started
          </a>
          <a href="/portfolio" className="btn btn-outline-white">
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;