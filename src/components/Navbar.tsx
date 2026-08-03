import { useState, useEffect } from "react";
import logo from "../../public/images/logo.png";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background Color Logic
      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/Show Logic
      if (currentScrollY <= 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isVisible ? "nav-visible" : "nav-hidden"} ${isScrolled ? "nav-white-bg" : "nav-transparent"}`}>
      <div className="container">
        {/* Left: Logo */}
        <a href="/" className="nav-logo">
          <img src={logo} alt="RYVR Logo" />
        </a>
        {/* Center: Links Pill */}
        <nav className="nav-links">
          <div className="nav-links-content">
            <a href="/how-it-works" className="nav-link">How It Works</a>
            <a href="/pricing" className="nav-link">Pricing</a>
            <a href="/about" className="nav-link">About RYVR</a>
            <a href="/blog" className="nav-link">Blog</a>
          </div>
        </nav>
        {/* Right: Action Buttons */}
        <div className="nav-buttons">
          <a href="/contact" className="btn btn-solid">Contact Us</a>
        </div>
        {/* Mobile Hamburger */}
        <div className="menu-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36" fill="none">
            <path d="M4.5 12.75H31.5M4.5 23.25H31.5" stroke="#15171A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Navbar;