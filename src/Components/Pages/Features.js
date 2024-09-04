




import React, { useEffect } from "react";
import "./style.css";
import "./grid.css";
import iphone from "../images/iphone-screen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faBatteryFull,
  faWifi,
  faDollarSign,
  faCheckDouble,
  faHdd,
} from "@fortawesome/free-solid-svg-icons";

const FeaturesComponent = ({ id }) => {
  return (
    <>
      <section id={id}>
        <div className="features-component margin-features-lg-md margin-features-sm">
          <div className="align-items-center container">
            <div className="col-lg-12 col-12">
              <div className="row-title row-margin">
                <h1 className="main-title">Key Features</h1>
                <p className="main-content">
                  Explore the standout features that make our app exceptional. 
                  Designed to enhance your mobile experience.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="d-flex flex-1">
                <div className="box">
                  <FontAwesomeIcon icon={faBolt} className="feature-icon" />
                  <div className="">
                    <h4 className="name-font">Lightning Fast</h4>
                    <p className="info">
                      Experience blazing fast performance, ensuring smooth 
                      and responsive interactions every time.
                    </p>
                  </div>
                </div>
                <div className="box flex-1">
                  <FontAwesomeIcon
                    icon={faBatteryFull}
                    className="feature-icon"
                  />
                  <div>
                    <h4 className="name-font">Energy Efficient</h4>
                    <p className="info">
                      Designed to consume minimal power, extending your 
                      battery life for longer usage.
                    </p>
                  </div>
                </div>
                <div className="box">
                  <FontAwesomeIcon icon={faWifi} className="feature-icon" />
                  <div>
                    <h4 className="name-font">Seamless Connectivity</h4>
                    <p className="info">
                      Stay connected with robust Wi-Fi compatibility, ensuring 
                      uninterrupted access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="box feature-image">
                <img src={iphone} alt="iPhone showing app interface" />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="d-flex flex-2">
                <div className="box">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    className="feature-icon"
                  />
                  <div>
                    <h4 className="name-font">Affordable</h4>
                    <p className="info">
                      Get premium features at an affordable price, giving 
                      you the best value for your money.
                    </p>
                  </div>
                </div>

                <div className="box">
                  <FontAwesomeIcon
                    icon={faCheckDouble}
                    className="feature-icon"
                  />
                  <div>
                    <h4 className="name-font">Reliable Updates</h4>
                    <p className="info">
                      Stay ahead with regular updates that bring new features 
                      and improvements.
                    </p>
                  </div>
                </div>

                <div className="box">
                  <FontAwesomeIcon icon={faHdd} className="feature-icon" />
                  <div>
                    <h4 className="name-font">Unlimited Storage</h4>
                    <p className="info">
                      Enjoy unlimited storage options, allowing you to keep all your 
                      important data in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "130px" }}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesComponent;
