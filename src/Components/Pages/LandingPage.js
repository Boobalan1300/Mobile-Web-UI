









import React from "react";
import NavBarComponent from "./NavBar";
import "./style.css";
import "./grid.css";
import HeaderComponent from "./Header";
import AboutComponent from "./About";
import WatchNowComponent from "./WatchNow";
import FeaturesComponent from "./Features";
import StaffComponent from "./Staff";
import TestimonalsComponent from "./Testimonals";
import QuesAnsComponent from "./Q&A";
import ContactComponent from "./Contact";
import FooterComponent from "./Footer";

const LandingPageComponent = () => {
  return (
    <>
      <NavBarComponent />
      <div id="home"><HeaderComponent /></div>
      <div id=""><WatchNowComponent /></div>
      <div id="team"><StaffComponent /></div>
      <div id="testimonials"><TestimonalsComponent /></div>
      <div id="faq"><QuesAnsComponent /></div>
      <div id="contact"><ContactComponent /></div>
      <FooterComponent />
    </>
  );
};

export default LandingPageComponent;
