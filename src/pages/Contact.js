import React from "react";
import About_banner from "../images/contactbg.jpg";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <>
   
   <Layout title={"Eazymov-Contact"}>


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
                    Contact Us
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
                      <li>Contact Us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div>
              <div
                className="mt-5"
                style={{
                  backgroundColor: "#0B60A9",
                  color: "white",
                  padding: "20px",
                }}
              >
                <h5>OUR OFFICE ADDRESS</h5>
                <p>Shop No. 20, R.K.Tower, Sector 3, Faridabad 121004</p>
                <p>Phone: +91 7070705528</p>
                <p>Email: info@eazymov.com </p>
              </div>
              <div
                className="mt-5"
                style={{
                  backgroundColor: "#0B60A9",
                  color: "white",
                  padding: "20px",
                }}
              >
                <h5>OUR OFFICE HOURS</h5>
                <p>Monday: 08.00 - 16.00</p>
                <p>Tuesday: 08.00 - 16.00</p>
                <p>Wednesday: 08.00 - 16.00</p>
                <p>Thursday: 08.00 - 16.00</p>
                <p>Friday: 08.00 - 16.00</p>
                <p>Saturday: 08.00 - 16.00</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12 ">
            <div className=" mt-5">
              <form className="mt-5 ">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                {/* <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div> */}
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid mt-4">
        <div className="row">
          <div>
          <div style={{ height: "400px", width: "100%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88899.38781237564!2d77.26311712620159!3d28.41442842495909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb817de6573b%3A0x7f2bb063a262f1af!2sWelcome%203%20Star%20Communication!5e0!3m2!1sen!2sus!4v1721305639030!5m2!1sen!2sus"
          style={{ height: "100%", width: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </div>
          </div>

        </div>

      </div>

    </Layout>
    </>
  );
};

export default Contact;
