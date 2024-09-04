

import React, { useState } from "react";
import logo_black from "../images/logo-black.png";
import "./style.css";
import "./grid.css";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import left from "../images/arrow-left.png";
import right from "../images/arrow-right.png";

const TestimonalsComponent = () => {
  const datas = [
    {
      img: user1,
      name: "Arun",
      work: "Senior Designer",
      paragraph:
        "Working here has been a game-changer for my career. The creativity and collaboration are unmatched.",
    },
    {
      img: user2,
      name: "Joe",
      work: "Lead Developer",
      paragraph:
        "This company empowers you to innovate and grow. I’ve learned more here than anywhere else.",
    },
    {
      img: user3,
      name: "Hendry",
      work: "Content Strategist",
      paragraph:
        "The team spirit and support here have helped me excel in my role. It’s a great place to be.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const user = datas[currentIndex];

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + datas.length) % datas.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % datas.length);
  };

  return (
    <>
      <div className="">
        <div className="entire-bg">
          <div className="title-testimonal">
            <div className="testimonal-detail">
              <h3 className="main-title-white">Testimonials</h3>
              <p className="main-content-white">
                Hear from our team members about their experiences working with
                us. We are proud of our supportive and dynamic work environment.
              </p>
            </div>
          </div>

          <div className="all-user">
            <img src={left} onClick={handlePrev} className="btn-margin" alt="Previous" />
            <div className="user-detail">
              <div className="data">
                <img
                  src={user.img}
                  alt={user.name}
                  className="testimonal-img"
                />
                <div className="">
                  <h4 className="name-font-testimonal line-height-name">
                    {user.name}
                  </h4>
                  <h6 className="name-font line-height-testimonal">
                    {user.work}
                  </h6>
                  <p className="para-margin">{user.paragraph}</p>
                </div>
              </div>
            </div>
            <img src={right} onClick={handleNext} className="btn-margin" alt="Next" />
          </div>

          <div className="btn-flex">
            <img
              src={left}
              onClick={handlePrev}
              className="btn-margin btn-show"
              alt="Previous"
            />
            <img
              src={right}
              onClick={handleNext}
              className="btn-margin btn-show"
              alt="Next"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonalsComponent;
