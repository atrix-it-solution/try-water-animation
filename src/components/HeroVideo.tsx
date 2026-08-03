import video from "../../public/Videos/hero.mp4";

const HeroVideo = () => {
  return (
    <section className="hero-video-section">
      {/* Dark Overlay */}
      <div className="video-overlay"></div>
      
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={video} />
        Your browser does not support the video tag.
      </video>

      {/* Center Content */}
      <div className="hero-video-content">
        <span className="hero-subheading">Pure. Premium. Naturally Elevated</span>
        <h1 className="hero-heading">
          Nanobubble-Enriched <br />Himalayan Water
        </h1>
        <p className="hero-description">
          Experience the purity of Himalayan water enhanced with advanced nanobubble technology for a cleaner, fresher, and more refreshing hydration experience.
        </p>
        
        {/* Buttons */}
        <div className="hero-actions">
          <a href="/get-started" className="btn btn-solid-blue">Get Started</a>
          <a href="/portfolio" className="btn btn-outline-white">View Portfolio</a>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;