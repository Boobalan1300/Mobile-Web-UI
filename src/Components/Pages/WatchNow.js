import React, { useEffect } from "react";
import "./style.css";
import "./grid.css";
import video from "../images/video-bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLifeRing } from "@fortawesome/free-solid-svg-icons";
import AboutComponent from "./About";
import FeaturesComponent from "./Features";

const WatchNowComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const showBgImg = document.querySelector(".show-bg-img");

      const rect = showBgImg.getBoundingClientRect();
      const threshold_top = 40;
      const bottom = -190;

      if (
        rect.top <= window.innerHeight - threshold_top +100 &&
        rect.bottom >= bottom
      ) {
        showBgImg.classList.add("in-view");
      } else {
        showBgImg.classList.remove("in-view");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="content">
        <AboutComponent id="about" />
      </div>

      <div className="show-bg-img ">
        <div className="bg-img"></div>
      </div>

      <div className="content">
        <FeaturesComponent id="features"/>
      </div>
    </>
  );
};

export default WatchNowComponent;
