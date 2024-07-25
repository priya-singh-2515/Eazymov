import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "/img/img1.jpg",
    htag: "Transformtive Donation For Main Philanthropy",
    button: "Read More",
    p:"Etiamt vehicula elit.Vivauedaus rutrum mi ut aliquam In hac habitasse platore dictum will Integer sagittis neque in porta semes.",
    span: "National Brain Research Centre",
  },
  {
    url: "/img/img2.jpg",
    p:"Etiamt vehicula elit.Vivauedaus rutrum mi ut aliquam In hac habitasse platore dictum will Integer sagittis neque in porta semes.",
    button: "Read More",
    htag: "Corporate Meeting Turns Into a Photo Shooting",
  },
  {
    url: "/img/img3.jpg",
    p:"Etiamt vehicula elit.Vivauedaus rutrum mi ut aliquam In hac habitasse platore dictum will Integer sagittis neque in porta semes.",
    button: "Read More",
    htag: "Corporate Meeting Turns Into a Photo Shooting",
  },
  {
    url: "/img/img1.jpg",
    htag: "Transformtive Donation For Main Philanthropy",
    button: "Read More",
    p:"Etiamt vehicula elit.Vivauedaus rutrum mi ut aliquam In hac habitasse platore dictum will Integer sagittis neque in porta semes.",
    span: "National Brain Research Centre",
  },
  {
    url: "/img/img3.jpg",
    p:"Etiamt vehicula elit.Vivauedaus rutrum mi ut aliquam In hac habitasse platore dictum will Integer sagittis neque in porta semes.",
    button: "Read More",
    htag: "Corporate Meeting Turns Into a Photo Shooting",
  },
];

const Slideshow = (props) => {
  const [showItem, setShowItem] = useState(null);
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
    <div style={{ backgroundColor: "#f6f6f6", padding: "20px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="topedu">{props.clg}</h1>
            <hr />
          </div>
        </div>
        <div className="slide-container">
          <Slide
            slidesToShow={slidesToShow}
            defaultIndex={0}
            transitionDuration={500}
          >
            {slideImages.map((slideImage) => (
              <div
                key={slideImage.url}
                className={`col-lg-${12 / slidesToShow} expuni mb-4`}
              >
                <div className="card">
                  <img
                    src={slideImage.url}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h4 className="card-title htagcard">{slideImage.htag}</h4>
                    <p
                      className="card-text"
                      style={{
                        fontSize: "13px",

                        textAlign: "justify",
                      }}
                    >
                      <span
                        // style={{ color: "#0B60A9", fontWeight: "bold" }}
                      >
                        {slideImage.htag}{" "}
                      </span>
                      {slideImage.p}
                    </p>
                    {showItem === slideImage.id && (
                      <span>{slideImage.hidden}</span>
                    )}
                  </div>
                  <div className="card-body">
                    <button className="crdbtn">{slideImage.button}</button>
                  </div>
                </div>
              </div>
            ))}
          </Slide>
        </div>
        {/* <div className="row">
          <div className="col-12 text-center">
            <button className="viewall">VIEW ALL COLLEGES</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Slideshow;
