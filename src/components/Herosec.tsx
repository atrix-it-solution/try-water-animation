import React from 'react';
import "../index.css"
// import"../../public/js/webflow.schunk.3feec0d7f0731ae2.js"

const Herosec: React.FC = () => {
  return (
    <section className="section hero_section">
      <div className="padding_global is--static">
        <div className="w-layout-vflex container">
          <div className="hero_container-new">
            <div className="w-layout-vflex hero_component-new">
              <div className="hero_content-new">
                <div data-wf--section-chips--variant="base" className="section_chips">
                  <img
                    loading="lazy"
                    src="images/6a2ade093d4ed3f8ed40f59a_b02bd53e80ae3ff609dc26af780b742d_Icon.svg"
                    alt=""
                    className="icon_chips"
                  />
                  <div>AI Assistants for Sales Reps</div>
                </div>
                <h1 className="title--xl">
                  Close deals.
                  <br />
                  <span className="text--grad">Zig handles the rest.</span>
                </h1>
                <div className="w-layout-vflex hero__description-new">
                  <p className="text--l">
                    Your own team of AI assistants — take out one per workflow. They research,
                    outreach, prep, follow up, and log. You approve and close.
                    <br />
                  </p>
                </div>
              </div>
              <div className="w-layout-vflex hero_buttons-wrapp">
                <a
                  data-modal-open=""
                  data-wf--button--variant="primary-m"
                  href="/book-a-meeting"
                  className="button w-inline-block"
                >
                  <div>Start Now</div>
                </a>
                <a
                  data-modal-open=""
                  data-wf--button--variant="tertiary-m"
                  href="/book-a-meeting"
                  className="button w-variant-8ab93cf4-d629-81e6-e7fb-0245c8a1d5ff w-inline-block"
                >
                  <div>Book a demo for a Team</div>
                </a>
              </div>
            </div>
            <div className="hero-animation_wrapp">
              <div
                className="hero_lottie _1280"
                data-w-id="e22a8e64-76c5-ec90-dab3-4caedf46f890"
                data-animation-type="lottie"
                data-src="https://cdn.prod.website-files.com/692db0eaf3c473ac91a06392/6a33e33f6042414d2340012a_93df246aa189ea66a4abed5d901e8533_Homepage%20Hero%20%E2%80%94%20Motion_2500.lottie"
                data-loop="1"
                data-direction="1"
                data-autoplay="1"
                data-is-ix2-target="0"
                data-renderer="canvas"
                data-default-duration="0"
                data-duration="8"
                data-loading="lazy"
              ></div>
              <div
                className="hero_lottie desktop"
                data-w-id="e22a8e64-76c5-ec90-dab3-4caedf46f891"
                data-animation-type="lottie"
                data-src="https://cdn.prod.website-files.com/692db0eaf3c473ac91a06392/6a4271bb54dbd7a2df1642e3_aeed43bf3b730e548c909a40b9344278_Homepage%20Hero%20%E2%80%94%20Motion_1280.lottie"
                data-loop="1"
                data-direction="1"
                data-autoplay="1"
                data-is-ix2-target="0"
                data-renderer="canvas"
                data-default-duration="0"
                data-duration="8"
                data-loading="lazy"
              ></div>
              <div
                className="hero_lottie tablet"
                data-w-id="e22a8e64-76c5-ec90-dab3-4caedf46f892"
                data-animation-type="lottie"
                data-src="https://cdn.prod.website-files.com/692db0eaf3c473ac91a06392/6a426cad8ba4eb299e327813_8ffbf03408276c0100d2c18bc7ce9912_Homepage%20Hero%20%E2%80%94%20Motion_820%20%281%29.lottie"
                data-loop="1"
                data-direction="1"
                data-autoplay="1"
                data-is-ix2-target="0"
                data-renderer="canvas"
                data-default-duration="0"
                data-duration="8"
                data-loading="lazy"
              ></div>
              <div
                className="hero_lottie mobile"
                data-w-id="e22a8e64-76c5-ec90-dab3-4caedf46f893"
                data-animation-type="lottie"
                data-src="https://cdn.prod.website-files.com/692db0eaf3c473ac91a06392/6a426cadc63f603a8b1699a7_e85e91fad1396a64c046d353727b94ea_Homepage%20Hero%20%E2%80%94%20Motion_420.lottie"
                data-loop="1"
                data-direction="1"
                data-autoplay="1"
                data-is-ix2-target="0"
                data-renderer="canvas"
                data-default-duration="0"
                data-duration="8"
                data-loading="lazy"
              ></div>
              <div className="hero-animation_grad"></div>
              <div className="hero-animation_grad is--right"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosec;