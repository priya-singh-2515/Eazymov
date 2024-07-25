import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import '../pages/home/Home.css';

const slideImages = [
  {
    url: "/img/team-1.jpg",
    name: "LINDA CAROLINA",
    p: "Director",
  },
  {
    url: "/img/team-2.jpg",
    name: "MATT HARRIS",
    p: "Co Founder",
  },
  {
    url: "/img/team-3.jpg",
    name: "NABILA SAKHIR",
    p: "Financial Accountant",
  },
  {
    url: "/img/team-1.jpg",
    name: "LINDA CAROLINA",
    p: "Director",
  },
  {
    url: "/img/team-2.jpg",
    name: "MATT HARRIS",
    p: "Co Founder",
  },
  {
    url: "/img/team-3.jpg",
    name: "NABILA SAKHIR",
    p: "Financial Accountant",
  },
];

const Leader = (props) => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  return (
    <div className="leader-container">
      <div className="container p-5">
        <div className="row">
          <div className="col-12 text-center">
            <h5> OUR LEADERS</h5>
            <hr style={{ backgroundColor: "#08487e", height: "2px", width: "15%", marginLeft: "42%" }}/>
          </div>
        </div>
        <div className="slide-container">
          <Slide slidesToShow={slidesToShow} defaultIndex={0} transitionDuration={500}>
            {slideImages.map((slideImage, index) => (
              <div key={index} className={`col-lg-${12 / slidesToShow} expuni mb-4`}>
                <div className="card">
                  <img src={slideImage.url} className="card-img-top" alt="img" />
                  <div className="card-body">
                    <h4 className="card-title">{slideImage.name}</h4>
                    <p className="card-text">
                      <span>{slideImage.name} </span>
                          {slideImage.p}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Leader;
