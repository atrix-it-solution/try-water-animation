import React from "react";
// import "./HeroAnimation.css";

const HeroAnimation: React.FC = () => {
  return (
    <div className="hero-dev">
      {/* Left Side: Static Text Context */}
      <div className="hero-container">
        <div className="hero-left">
          <div className="section_chips is--blue">
            <span className="icon_chips_wave">🫧</span>
            <div>Nano Bubble Water</div>
          </div>


        <h1>
          Smarter Water.<br />
          <span className="text-green">Better Hydration.</span>
        </h1>

        <p>
          Powered by advanced nano bubble technology for cleaner, fresher, and
          naturally oxygen-rich water.
        </p>

        <div className="btn-group">
          <button className="btn-primary">Explore Water</button>
          <button className="btn-secondary">Contact Us</button>
        </div>
      </div>

      {/* Right Side: Animated Section */}
      <div className="hero-right">
        <div className="animation-wrapper">
          {/* Background Full Circle positioned on the RIGHT */}
          <div className="bg-curve"></div>

          {/* PHASE 1 & 2 */}
          <div className="ac-group">
            <div className="ac-card card-4">
              <div className="ac-line"></div>
              <div className="ac-content">
                <div className="icon-box icon-video">💧</div>
                <div className="text-box">
                  <h4>Nano Bubbles Activated</h4>
                  <p>Billions of nano bubbles infused into every drop</p>
                </div>
                <div className="status-icon">✓</div>
              </div>
            </div>

            <div className="ac-card card-3">
              <div className="ac-line"></div>
              <div className="ac-content">
                <div className="icon-box icon-mail">🫧</div>
                <div className="text-box">
                  <h4>Oxygen Enriched</h4>
                  <p>Enhanced dissolved oxygen for lasting freshness</p>
                </div>
                <div className="status-icon">✓</div>
              </div>
            </div>

            <div className="ac-card card-2">
              <div className="ac-line"></div>
              <div className="ac-content">
                <div className="icon-box icon-crm">🧪</div>
                <div className="text-box">
                  <h4>Purity Verified</h4>
                  <p>Advanced filtration with nano bubble technology</p>
                </div>
                <div className="status-icon">✓</div>
              </div>
            </div>

            <div className="ac-card card-1">
              <div className="ac-line"></div>
              <div className="ac-content">
                <div className="icon-box icon-cal">🌊</div>
                <div className="text-box">
                  <h4>Ready to Hydrate</h4>
                  <p>Clean, refreshing water for everyday wellness</p>
                </div>
                <div className="status-icon">✓</div>
              </div>
            </div>
          </div>

          {/* PHASE 3 */}
          <div className="ac-group">
            <div className="ac-card center-card">
              <div className="ac-line"></div>
              <div className="ac-content">
                <div className="icon-box icon-zig">N</div>
                <div className="text-box">
                  <h4>Nano Water</h4>
                  <p className="flex-row">
                    <span className="check-text">
                      ✓ Billions of Nano Bubbles
                    </span>
                    <span className="avatars">💧 Pure • Fresh • Clean</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PHASE 4 */}
          <div className="ac-group">
            <div className="ac-card split-top">
              <div className="ac-line"></div>
              <div className="ac-content">
                <div className="icon-box icon-zig">N</div>
                <div className="text-box">
                  <h4>Nano Process</h4>
                  <p className="flex-row">
                    <span className="check-text">✓ Nano Bubbles Infused</span>
                    <span className="avatars">💧 Fresh • Pure</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="ac-card split-bottom">
              <div className="ac-line"></div>
              <div className="ac-content">
                <div className="icon-box icon-user">🥤</div>
                <div className="text-box">
                  <h4>You Experience</h4>
                  <p className="check-text">✓ Cleaner & Better Hydration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HeroAnimation;