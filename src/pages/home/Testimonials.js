// import React from 'react';
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
// import './Home.css';

// const imgs = [
//   { img: "../img/partner1.png" },
//   { img: "/img/partner2.png" },
//   { img: "/img/partner3.png" },
//   { img: "/img/partner4.png" },
//   { img: "/img/partner5.png" },
// ];
// const testimonials = [
//   {
//     id: 1,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     name: "John Doe",
//     position: "CEO of Candy's Heaven",
//     image: "https://html.themesawesome.com/logitranshtml/img/content/client-photo-1.png" 
//   },
//   {
//     id: 2,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     name: "Carol Linda",
//     position: "Branch Manager of KLM",
//     image: "https://html.themesawesome.com/logitranshtml/img/content/client-photo-2.png" 
//   },
//   {
//     id: 3,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     name: "John Doe",
//     position: "CEO of Candy's Heaven",
//     image: "https://html.themesawesome.com/logitranshtml/img/content/client-photo-1.png" 
//   },
//   {
//     id: 4,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     name: "Carol Linda",
//     position: "Branch Manager of KLM",
//     image: "https://html.themesawesome.com/logitranshtml/img/content/client-photo-2.png" 
//   }
// ];

// const Testimonial = ({ testimonial }) => (
//    <div className="testimonial">
//     <p>{testimonial.text}</p>
//     <div className="testimonial-author">
//       <img src={testimonial.image} alt={testimonial.name} />
//       <div>
//         <h4>{testimonial.name}</h4>
//         <p>{testimonial.position}</p>
//       </div>
//     </div>
//   </div>
// );

// const Testimonials = () => (
//   <div className="container-fluid">
//     <div className="row">
//       <div className="col-lg-12 col-md-12 col-sm-12">
//         <div className="testimonials">
//           <Slide>
//             {testimonials.map((testimonial) => (
//               <Testimonial key={testimonial.id} testimonial={ testimonial} />
//             ))}
//           </Slide>
         
//         </div>
//         <div className="image-gallery">
//       {imgs.map((image, index) => (
//         <img key={index} src={image.img} alt={`Partner ${index + 1}`} />
//       ))}
//     </div>
//       </div>
//     </div>
//   </div>
// );

// export default Testimonials;










import React from 'react';
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './Home.css';

const imgs = [
  { img: "../img/partner1.png" },
  { img: "/img/partner2.png" },
  { img: "/img/partner3.png" },
  { img: "/img/partner4.png" },
  { img: "/img/partner5.png" },
];
const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "John Doe",
    position: "CEO of Candy's Heaven",
    image: "https://html.themesawesome.com/logitranshtml/img/content/client-photo-1.png"
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "Carol Linda",
    position: "Branch Manager of KLM",
    image: "https://html.themesawesome.com/logitranshtml/img/content/client-photo-2.png"
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "John Doe",
    position: "CEO of Candy's Heaven",
    image: "https://html.themesawesome.com/logitranshtml/img/content/client-photo-1.png"
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "Carol Linda",
    position: "Branch Manager of KLM",
    image: "https://html.themesawesome.com/logitranshtml/img/content/client-photo-2.png"
  }
];


const Testimonials = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="testimonials">
          <Slide>
        {testimonials.map((testimonial, index) => (
          <div className="each-slide" key={testimonial.id}>
            <div className="testimonial-content">
              <img src={testimonial.image} alt={`client-${index}`} className='client-image'/>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h4 className="client-name">{testimonial.name}</h4>
              <p className="client-position">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </Slide>
         
        </div>
        <div className="image-gallery">
      {imgs.map((image, index) => (
        <img key={index} src={image.img} alt={`Partner ${index + 1}`} />
      ))}
    </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
