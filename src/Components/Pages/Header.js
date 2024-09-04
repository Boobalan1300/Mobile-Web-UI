import React from "react";

import "./style.css";
import "./grid.css";
import iphone from "../images/iphone-screen-with-shadow.png";
import playstore from "../images/playstore.png";
import appstore from "../images/appstore.png";
import applight from "../images/applight-wave.svg";

const HeaderComponent = () => {
  return (
    <>
      <div className="">
        <div className="header-bg make-absolute">
          <div className="container margin-container">
            <div className="header-left col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
              <div className="box-left">
                <div>
                  <h3 className="title-Poppins">Elevate Your Mobile Presence</h3>
                  <h6 className="title-para">
                    Deliver a seamless mobile experience to your users.
                  </h6>
                </div>
                <div>
                  <p className="title-content">
                    Our innovative platform ensures that your website is fully optimized for mobile devices, providing fast, intuitive, and visually stunning experiences. Engage your users with a responsive design that adapts to any screen size, ensuring maximum reach and satisfaction.
                  </p>
                </div>
                <div className="left-img">
                  <img src={playstore} alt="Download from Play Store" />{" "}
                  <img src={appstore} alt="Download from App Store" />
                </div>
              </div>
            </div>
            <div className="header-right col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
              <div className="box">
                <img
                  src={iphone}
                  alt="iPhone Displaying App"
                  className="img-fluid"
                />
              </div>
              <img
                src={applight}
                className="applight-absolute"
                alt="Background Light"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
