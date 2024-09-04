import React from "react";
import "./style.css";
import "./grid.css";
import iphone from "../images/iphone-screen-with-shadow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMobile,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const ContactComponent = () => {
  return (
    <>
      <div className="entire-contact">
        <div className="Contact-title-container">
          <div className="large-screen-m Ques-ans-details">
          <h3 className="main-title">Contact Us</h3>
            <p className="main-content">
              We value your feedback and inquiries. Whether you have a question
              about our services, need assistance, or just want to drop us a
              note, feel free to reach out. Our team is here to help!
            </p>
          </div>
        </div>

        <div className="container ques-ans-margin">
          <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 col-12">
            <form>
              <div>
                <div className="form-row">
                  <input type="text" placeholder="Name" className="name" />
                  <input type="text" placeholder="Email" className="email" />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="subject"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Message"
                    className="message"
                  />
                </div>
                <div>
                <button type="submit" className="form-btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
            <div className="contact-bg">
              <div className="contact-data ">
                <div className="data-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="data-col info">
                  <p> ADDRESS</p>
                  <p>Tamil Nadu</p>
                </div>
              </div>
              <div className="contact-data">
                <div className="data-icon ">
                  <FontAwesomeIcon icon={faMobile} />
                </div>
                <div className="data-col info">
                  <p>Phone</p>
                  <p>009900990099</p>
                </div>
              </div>

              <div className="contact-data">
                <div className="data-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="data-col info">
                  <p>E-mail</p>
                  <p>info@domain.com</p>
                </div>
              </div>

              <div className="contact-data">
                <div className="data-icon">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="data-col info">
                  <p>Working</p>
                  <p> 7 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;





