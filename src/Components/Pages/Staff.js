


import React from "react";
import "./style.css";
import "./grid.css";

import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLifeRing } from "@fortawesome/free-solid-svg-icons";

const StaffComponent = () => {
  return (
    <>
      <div className="margin-user-lg-md">
        <div className="container">
          <div className="col-lg-12 col-12">
            <div className="row-title">
              <h1 className="main-title">Meet Our Team</h1>
              <p className="main-content">
                Our dedicated team is passionate about delivering the best
                solutions for our clients. Get to know the people who make it all
                happen.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="box col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
            <img src={user1} className="user-img" alt="Nitu Singh" />
            <div>
              <h4 className="main-sub-title main-sub-title-user line-height">Nitu Singh</h4>
              <p className="main-sub-content">Chief Marketing Officer</p>
            </div>
          </div>
          <div className="box col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
            <img src={user2} className="user-img" alt="Yogesh Singh" />
            <div>
              <h4 className="main-sub-title  main-sub-title-user line-height">Yogesh Singh</h4>
              <p className="main-sub-content">Chief Executive Officer & Founder</p>
            </div>
          </div>
          <div className="box col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
            <img src={user3} className="user-img" alt="Nisha Sharma" />
            <div>
              <h4 className="main-sub-title main-sub-title-user line-height">Nisha Sharma</h4>
              <p className="main-sub-content">Lead Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffComponent;
