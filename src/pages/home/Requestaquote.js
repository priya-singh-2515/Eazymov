import React, { useState } from "react";
import "./Home.css";

const RequestQuoteForm = () => {
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Service:", service);
  };

  return (
    <>
      <div className="requestaquote">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="Requestaquote">
                <form
                  onSubmit={handleSubmit}
                  className="p-4"
                  style={{
                    backgroundColor: "#0056b3",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <label htmlFor="email">Request a Quote</label>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{ width: "300px" }}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                      style={{ width: "200px" }}
                    >
                      <option value="">Services</option>
                      <option value="hosting">Hosting</option>
                      <option value="vps">VPS</option>
                      <option value="dedicated">Dedicated Servers</option>
                      <option value="ssl">SSL</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestQuoteForm;
