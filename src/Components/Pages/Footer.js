import React from "react";

import "./style.css";
import "./grid.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLifeRing } from "@fortawesome/free-solid-svg-icons";

import playstore from "../images/playstore.png";
import appstore from "../images/appstore.png";

const FooterComponent = () => {
  return (
    <>
      <div>
        <div className="footer-bg">
          <div className="footer-content">
            <h4 className="main-title-white">Get Our App Today</h4>
            <p className="main-content-white">
              Experience the convenience of our services on the go. Download our app to access exclusive features, stay updated, and manage your account seamlessly.
            </p>

            <div className="footer-img">
              <img src={playstore} alt="Download from Play Store" />
              <img src={appstore} alt="Download from App Store" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterComponent;
