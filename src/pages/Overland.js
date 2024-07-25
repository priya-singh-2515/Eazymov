import React from 'react'
import Layout from '../components/Layout';
import About_banner from "../images/contactbg.jpg";
const Overland = () => {
  return (
    <>
     <Layout title={"Eazymov-Overland Network"}>


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
                      Overland Network
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
                      You Are Here :</li>
                      <>/</>
                      <li style={{ color: "#0B60A9" }}>Home</li>
                      <>/</>
                      <li style={{ color: "#0B60A9" }}>Services</li>
                      <>/</>
                      <li>Overland Network</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>

     <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3 style={{ textAlign: "justify", fontSize: "1.5vw" }}>
              Overland Network
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <h4 style={{ textAlign: "justify", fontSize: "1.5vw" }}>
              Overland Network
            </h4>
            <hr style={{ backgroundColor: "#0B60A9", height: "2px" ,width:'10%',marginLeft:'5%'}}/>
            <img src="../img/services-item-2.jpg" alt="overland"/>
            <p style={{ textAlign: "justify", fontSize: "12px" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedap euydoeiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
            <p style={{ textAlign: "justify", fontSize: "12px" }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.</p>
            <p style={{ textAlign: "justify", fontSize: "12px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedap euydoeiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className='d-flex justify-content-center'>
              <div>
                
              </div>

            </div>
  
          </div>
        </div>
     </div>


     </Layout>
    </>
  )
}

export default Overland