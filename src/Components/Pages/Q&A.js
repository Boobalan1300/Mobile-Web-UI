




import React from "react";
import "./style.css";
import "./grid.css";
import iphone from "../images/iphone-screen-with-shadow.png";
import playstore from "../images/playstore.png";
import appstore from "../images/appstore.png";
import applight from "../images/applight-wave.svg";

const QuesAnsComponent = () => {
  return (
    <>
      <div className="Ques-ans-container">
        <div className="Ques-ans-details">
          <h3 className="main-title">Frequently Asked Questions</h3>
          <p className="main-content">
            Explore answers to common questions about our mobile website, app
            features, and more. Get the information you need to make the most of
            your experience.
          </p>
        </div>
      </div>

      <div className="ques-ans-margin-lg">
        <div className="container ques-ans-margin">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
            <h4 className="question-font">
              How can I download the mobile app?
            </h4>
            <p className="answer-font">
              You can download our mobile app from the Apple App Store or
              Google Play Store. Simply search for our app name, and follow the
              instructions to install it on your device.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
            <h4 className="question-font">
              Is the mobile website optimized for all devices?
            </h4>
            <p className="answer-font">
              Yes, our mobile website is fully responsive and optimized for
              various devices, including smartphones and tablets, to ensure a
              seamless user experience.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
            <h4 className="question-font">
              Can I access all website features on the mobile version?
            </h4>
            <p className="answer-font">
              Absolutely! Our mobile website offers the same features as our
              desktop version, allowing you to access all content and
              functionalities on the go.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
            <h4 className="question-font">
              How do I update my app to the latest version?
            </h4>
            <p className="answer-font">
              To update your app, visit the App Store or Play Store, search for
              our app, and select "Update." Ensure you're using the latest
              version for the best experience.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
            <h4 className="question-font">
              What should I do if the mobile site isn't loading properly?
            </h4>
            <p className="answer-font">
              If the mobile site isn't loading, try clearing your browser cache
              or switching to a different browser. If the issue persists,
              contact our support team for assistance.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
            <h4 className="question-font">
              How can I provide feedback on the mobile app?
            </h4>
            <p className="answer-font">
              We value your feedback! You can provide feedback through the app
              store or directly within the app under the "Feedback" section. We
              use your input to improve our services continuously.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuesAnsComponent;
