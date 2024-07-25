import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";

const imgs = [
  {
    img: "../img/services-item-1.jpg",
    h: "Overland Network",
    p: "As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation.",
    button: "Read More",
  },
  {
    img: "../img/services-item-2.jpg",
    h: "Ocean Network",
    p: "As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation.",
    button: "Read More",
  },
  {
    img: "../img/services-item-3.jpg",
    h: "WE DELIVER YOUR GOODS FASTAir Freight",
    p: "As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation.",
    button: "Read More",
  },
  {
    img: "../img/services-item-4.jpg",
    h: "Cargo",
    p: "As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation.",
    button: "Read More",
  },
  {
    img: "../img/services-item-5.jpg",
    h: "Storage",
    p: "As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation.",
    button: "Read More",
  },
  {
    img: "../img/services-item-6.jpg",
    h: "Warehousing",
    p: "As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation.",
    button: "Read More",
  },
];

const OurServices = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 OurServices12">
          <div>
            <h3 style={{ color: "#fff" }}>Our Services</h3>
            <hr
              className="mb-4 mt-0 mx-auto"
              style={{
                width: 100,
                backgroundColor: "#fff",
                height: 2,
                fontWeight: "800",
              }}
            />
          </div>
          <div >
            <Slide>
              {imgs.map(
                (image, index) =>
                  index % 2 === 0 && (
                    <div className="each-slide1" key={index}>
                      <div className="row">
                        <div className="col-6 slide-item1">
                          <img
                            src={imgs[index].img}
                            alt={`slide-${index}`}
                            className="slider-img1"
                          />
                          <div className="overlay1">
                            <h5>{imgs[index].h}</h5>
                            <hr
              className="mb-4 mt-0 mx-auto"
              style={{
                width: 100,
                backgroundColor: "#fff",
                height: 2,
                fontWeight: "800",
              }}
            />
                            <p>{imgs[index].p}</p>
                            <button style={{background:'#0056b3',color:'#fff'}}>{imgs[index].button}</button>
                          </div>
                        </div>
                        {imgs[index + 1] && (
                          <div className="col-6 slide-item1">
                            <img
                              src={imgs[index + 1].img}
                              alt={`slide-${index + 1}`}
                              className="slider-img1"
                            />
                            <div className="overlay1">
                              <h5>{imgs[index + 1].h}</h5>
                              <hr
              className="mb-4 mt-0 mx-auto"
              style={{
                width: 100,
                backgroundColor: "#fff",
                height: 2,
                fontWeight: "800",
              }}
            />
                              <p>{imgs[index + 1].p}</p>
                              <button style={{background:'#0056b3',color:'#fff'}}>{imgs[index + 1].button}</button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )
              )}
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
