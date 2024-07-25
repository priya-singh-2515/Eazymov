import React from 'react'
import About_banner from "../images/contactbg.jpg";
import Layout from '../components/Layout';
import Testimonials from './home/Testimonials';
import Leader from './Leader';

const abttext = [
  {
    id: 1,
    img: "./img/abt1.jpg",
    h: "OUR MISSION",
    p: "Lorem ipsum dolor sit amet, consectetursa adipiscing elit. Duis ut lobortis nulla. derisu Veulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia ."
  },
  {
    id: 2,
    img: "./img/abt2.jpg",
    h: "OUR VISION",
    p: "Lorem ipsum dolor sit amet, consectetursa adipiscing elit. Duis ut lobortis nulla. derisu Veulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia ."
  },
  {
    id: 3,
    img: "./img/abt3.jpg",
    h: "EXPANDING GOAL",
    p: "Lorem ipsum dolor sit amet, consectetursa adipiscing elit. Duis ut lobortis nulla. derisu Veulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia ."
  }
];
const About = () => {

  return (
  <>
<Layout title={"Eazymov-About"}>


   <div
        className="container-fluid"
        style={{ position: "relative"}}
      >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div style={{ position: "relative" }}>
              <img
                src={About_banner}
                alt="contact_banner"
                style={{
                  display: "block",
                  width: "100%",
                  height: "50vh",
                  position: "relative",
                  zIndex: "1",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "30vh",
                  // backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: "2",
                }}
              >
                <div
                  className="text-white"
                  style={{ padding: "100px", flex: "wrap" }}
                >
                  <div>
                    <h1 style={{ textAlign: "justify", fontSize: "2vw" }}>
                     About Us
                    </h1>
                  </div>
                  <div>
                    <ul
                      className="d-flex"
                      style={{
                        listStyle: "none",
                        gap: "5px",
                        fontSize: "1vw",
                      }}
                    >
                      <li>
                      You Are Here : About Us</li>
                      <>/</>
                      <li style={{ color: "#0B60A9" }}>Home</li>
                      <>/</>
                      <li>About Us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   </div>

   <div className='container-fluid'>
     <div className='row'>
       <div className='col-lg-6 col-md-12 col-sm-12 '>
          <div className='p-5 about'>
              <h5>COMPANY PROFILE</h5>
              <hr style={{backgroundColor:'#08487e' ,textAlign:'center', fontWeight:'800',height:'2px',width:'20%',}}/>
              <p style={{textAlign:'justify', fontSize:'14px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedap euydoeiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
              <p  style={{textAlign:'justify', fontSize:'14px'}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.</p>
              <p  style={{textAlign:'justify', fontSize:'14px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedap euydoeiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
       </div>
       <div className='col-lg-6 col-md-12 col-sm-12'>

       </div>
     </div>
   </div>


   <div className='container'>
      <div className='row'>
        {abttext.map(item => (
          <div className='col-lg-4 col-md-6 mb-4' key={item.id}>
            <div className='card'>
              <img src={item.img} className='card-img-top' alt={item.h} />
              <div className='card-body'>
                <h4 className='card-title'>{item.h}</h4>
                <p className='card-text'>{item.p}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>





   <Testimonials/>
   <Leader/>

   </Layout>
  </>
  )
}

export default About