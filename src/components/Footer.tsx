import  { useEffect, useRef } from "react";
import logo from "../../public/images/logo.png";
import { FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
// import "./Footer.css"


interface Bubble {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  vx: number;
  vy: number;
  ox: number;
  oy: number;
  opacity: number;
  wobbleSpeed: number;
  wobbleAngle: number;
}

export default function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const footer = footerRef.current;
    if (!canvas || !footer) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = footer.clientWidth);
    let height = (canvas.height = footer.clientHeight);

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 100, // Range for hover effect
    };

    const handleResize = () => {
      if (!footer || !canvas) return;
      width = canvas.width = footer.clientWidth;
      height = canvas.height = footer.clientHeight;
      initBubbles(); // Re-distribute bubbles on resize
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = footer.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    footer.addEventListener("mousemove", handleMouseMove);
    footer.addEventListener("mouseleave", handleMouseLeave);

    let bubbles: Bubble[] = [];
    const bubbleCount = Math.min(Math.floor((width * height) / 8000), 120);

    const createBubble = (): Bubble => {
      const radius = Math.random() * 2.5 + 1; // VERY SMALL: 1px to 3.5px
      return {
        x: Math.random() * width,
        y: Math.random() * height, // Randomly placed everywhere inside container
        radius,
        baseRadius: radius,
        vx: (Math.random() - 0.5) * 0.25, // Very slow horizontal drift
        vy: (Math.random() - 0.5) * 0.25, // Very slow vertical drift (No longer going just up)
        ox: 0,
        oy: 0,
        opacity: Math.random() * 0.15 + 0.05, // VERY LIGHT: 5% to 20% opacity max
        wobbleSpeed: Math.random() * 0.02 + 0.01,
        wobbleAngle: Math.random() * Math.PI * 2,
      };
    };

    const initBubbles = () => {
      bubbles = [];
      for (let i = 0; i < bubbleCount; i++) {
        bubbles.push(createBubble());
      }
    };

    initBubbles();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      bubbles.forEach((b) => {
        // 1. Natural floating in place (Sine + Cosine wobble)
        b.wobbleAngle += b.wobbleSpeed;
        const wobbleX = Math.sin(b.wobbleAngle) * 0.15;
        const wobbleY = Math.cos(b.wobbleAngle) * 0.15;

        b.x += b.vx + wobbleX + b.ox;
        b.y += b.vy + wobbleY + b.oy;

        // Friction to recover from mouse push
        b.ox *= 0.9;
        b.oy *= 0.9;

        // 2. Mouse Hover Interaction (Repulsion)
        const dx = b.x - mouse.x;
        const dy = b.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          b.ox += Math.cos(angle) * force * 1.5;
          b.oy += Math.sin(angle) * force * 1.5;
        }

        // 3. Gentle Boundary Bounce (Keeps them inside the footer!)
        if (b.x <= 0 || b.x >= width) b.vx *= -1;
        if (b.y <= 0 || b.y >= height) b.vy *= -1;

        // 4. Draw Nano Bubble
        ctx.save();
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);

        const grad = ctx.createRadialGradient(
          b.x - b.radius * 0.3,
          b.y - b.radius * 0.3,
          b.radius * 0.1,
          b.x,
          b.y,
          b.radius
        );
        grad.addColorStop(0, `rgba(255, 255, 255, ${b.opacity * 1.2})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${b.opacity * 0.3})`);

        ctx.fillStyle = grad;
        ctx.fill();

        ctx.strokeStyle = `rgba(255, 255, 255, ${b.opacity * 0.8})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      footer.removeEventListener("mousemove", handleMouseMove);
      footer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section ref={footerRef} className="footer-section">
      <canvas ref={canvasRef} className="footer-bubbles-canvas" />

      {/* --- Baki pura code apka same hai --- */}
     <div className="w-layout-vflex footer-top">
  <div className="padding_global">
    <div className="w-layout-vflex container">
      <div className="w-layout-vflex flex-block-24">
        <div className="w-layout-vflex flex-block-25">
          <h2 className="title--l">
            Experience the Future of Pure Hydration.
          </h2>

          <div className="text--l">
            Discover cleaner, fresher, and oxygen-rich water powered by advanced Nano Bubble Technology.
          </div>
        </div>

        <div className="w-layout-vflex steps-btns">
          <a
            data-modal-open=""
            data-wf--button--variant="primary-m"
            href="/book-a-meeting"
            className="button w-inline-block"
          >
            <div>Explore Water</div>
          </a>

          <a
            data-modal-open=""
            data-wf--button--variant="tertiary-m-white"
            href="/book-a-meeting"
            className="button w-variant-6101740f-88aa-0a0a-23a7-024ce8ee2b35 w-inline-block"
          >
            <div>Contact Us</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="w-layout-vflex footer-bottom">
        <div className="padding_global">
          <div className="w-layout-vflex container">
            <div className="footer_container-grid">
              <div
                id="w-node-dfeb8a6f-3d27-8a65-53e0-41b223156485-23156472"
                className="w-layout-vflex footer-logo_wrapp"
              >
                <a
                  href="/"
                  aria-current="page"
                  className="footer_logo w-inline-block w--current">
                  <img
                    width="128"
                    height="37"
                    alt="RYVR logo"
                    src={logo}
                    loading="eager"
                    className="logo_img"
                  />
                </a>
                <div className="text--s is--green--200">
                  © 2026 RYVR.ai. All rights reserved
                  <br />
                </div>
              </div>
              <div className="w-layout-vflex footer_column-links">
                <div className="w-layout-vflex footer_links-list">
                  <a href="/how-it-works" className="text--link is--white">
                    How It Works
                  </a>
                  <a href="/pricing" className="text--link is--white">
                    Pricing
                  </a>
                  <a href="/about" className="text--link is--white">
                    About RYVR
                  </a>
                  <a href="/blog" className="text--link is--white">
                    Blog
                  </a>
                </div>
                <div
                  id="w-node-dfeb8a6f-3d27-8a65-53e0-41b223156495-23156472"
                  className="w-layout-vflex footer_links-wrapp"
                >
                  <div className="w-layout-vflex footer_links-list">
                    <a href="/privacy-policy" className="text--link is--white">
                      Privacy Policy
                    </a>
                    <a href="/terms-of-service" className="text--link is--white">
                      Terms of Services
                    </a>
                    <a
                      href="https://RYVR.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text--link is--white"
                    >
                      Security
                    </a>
                  </div>
                </div>
              </div>
<div
  id="w-node-dfeb8a6f-3d27-8a65-53e0-41b22315649d-23156472"
  className="w-layout-vflex footer_sn-wrapp"
>
  <div className="footer_sn-list">

    {/* LinkedIn */}
    <a
      aria-label="LinkedIn"
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="footer_sn-link w-inline-block"
    >
      <div className="footer_sn-icon">
        <FaLinkedinIn />
      </div>
    </a>

    {/* YouTube */}
    <a
      aria-label="YouTube"
      href="https://www.youtube.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="footer_sn-link w-inline-block"
    >
      <div className="footer_sn-icon">
        <FaYoutube />
      </div>
    </a>

    {/* Instagram */}
    <a
      aria-label="Instagram"
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="footer_sn-link w-inline-block"
    >
      <div className="footer_sn-icon">
        <FaInstagram />
      </div>
    </a>

  </div>

  <a
    href="https://apatrixitsolutions.com"
    target="_blank"
    rel="noopener noreferrer"
    className="footer_link-agency w-inline-block"
  >
    <div className="text--s is--medium">Website designed by</div>
    <b>APATRIX IT SOLUTIONS</b>
  </a>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}