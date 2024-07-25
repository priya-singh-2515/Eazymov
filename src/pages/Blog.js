import React from 'react'
import About_banner from "../images/contactbg.jpg";
import Layout from '../components/Layout';

const Blog = () => {
  return (
    <>
     <Layout title={"Eazymov-Blog"}>
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
                     Blog
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
                      <li>Blog</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   </div>
   
     </Layout>
    </>
  )
}

export default Blog