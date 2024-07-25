import React from 'react';
import './Home.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const imgs = [
    { img: "https://html.themesawesome.com/logitranshtml/img/slider/slide1.jpg" ,
      h:"PASSENGERS TRANSPORT",
      p:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    },
    { img: "../img/slide2.jpg",
      h:"WE DELIVER YOUR GOODS FAST",
      p:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
     },
];

const Slider = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <div className='slider'>
            <Slide>
              {imgs.map((image, index) => (
                <div className="each-slide" key={index}>
                  <img src={image.img} alt={`slide-${index}`} className='slider-img' />
                  <div className='slide-text'>
                    <h1>{image.h}</h1>
                    <hr
                    style={{
                    width: "50%",
                    backgroundColor: "white",
                    height: 2,
                    fontWeight: "800",
                   }}
                   />
                  <p>{image.p}</p>
                  <button style={{background: "#0B60A9",color:'#fff', border:'none',padding:'5px 10px', marginTop:'10px', borderRadius:'5px'}}>Buy Now</button>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
