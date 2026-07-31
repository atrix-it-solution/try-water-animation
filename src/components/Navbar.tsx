import { useState, useEffect } from "react";
import logo from "../../public/images/logo.png";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Agar user page ke bilkul top par hai -> SHOW
      if (currentScrollY === 0) {
        setIsVisible(true);
      }
      // 2. Agar user NEECHE (Scroll Down) kar raha hai aur 50px se zyada cross kar chuka hai -> HIDE
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } 
      // 3. Agar user UPAR (Scroll Up) kar raha hai -> SHOW
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${isVisible ? "nav-visible" : "nav-hidden"}`}>
      <div className="nav-container">
        
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
          <a href="/book-a-meeting" className="btn btn-outline">Book a demo</a>
          <a href="/login" className="btn btn-solid">Login</a>
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