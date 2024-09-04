


import React from "react";

import "./style.css";
import "./grid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLifeRing, faMobile, faBolt } from "@fortawesome/free-solid-svg-icons";

const AboutComponent = ({ id }) => {
  return (
    <>
      <section id={id}>
        <div className="about-component min-width-mb">
          <div className="margin-container-about">
            <div className="container">
              <div className="col-lg-12 col-12">
                <div className="row-title row-margin">
                  <h1 className="main-title">ABOUT US</h1>
                  <p className="main-content about-margin-lg">
                    We specialize in transforming web experiences into seamless mobile applications. Our team is dedicated to delivering cutting-edge solutions that ensure your content is accessible and optimized for all devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="container about-icons-lg-m">
              <div className="box col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                <FontAwesomeIcon icon={faLifeRing} className="about-icon" />
                <div>
                  <h4 className="main-sub-title">24/7 Support</h4>
                  <p className="main-sub-content ">
                    We're here around the clock to assist you with any issues or questions you may have about your mobile transformation.
                  </p>
                </div>
              </div>
              <div className="box col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                <FontAwesomeIcon icon={faMobile} className="about-icon" />
                <div>
                  <h4 className="main-sub-title">Cross-Platform Compatibility</h4>
                  <p className="main-sub-content">
                    Our solutions ensure your web content performs flawlessly across all mobile platforms, offering a consistent user experience.
                  </p>
                </div>
              </div>
              <div className="box col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                <FontAwesomeIcon icon={faBolt} className="about-icon" />
                <div>
                  <h4 className="main-sub-title">Lightning Fast</h4>
                  <p className="main-sub-content">
                    We optimize for speed, ensuring your mobile app loads quickly and efficiently, keeping users engaged.
                  </p>
                </div>
              </div>

              <div className="box col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                <button className="box-button btn-font ">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="d-lg-md-none">
          {/* Content for smaller screens can be added here if needed */}
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
