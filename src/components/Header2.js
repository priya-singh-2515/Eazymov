import React from 'react';

const Header2 = () => {
  return (
    <header>
      <div className="top-bar bg-white py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="d-flex justify-content-between w-100">
              <div className="col-md-3">
                <img src="img/eazymov logo-1.png" alt="Logo" className="img-fluid" style={{ width: '150px' }} />
              </div>
              <div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
          <div className="form-inline my-lg-0">
              <button className="btn btn-outline-light my-2 my-sm-0" type="submit" style={{ width:"200px"}}>
                <i className="fas fa-search"></i>
              </button>
              <button className="btn btn-light my-2 my-sm-0 ml-2 text-white" style={{ background: "#08487e" }} type="submit">Request a Quote</button>
            </div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link text-white" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/about">About Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li><a className="dropdown-item" href="/services/overland">Overland Networking</a></li>
                  <li><a className="dropdown-item" href="/services/ocean">Ocean Network</a></li>
                  <li><a className="dropdown-item" href="/services/airfreight">Air Freight</a></li>
                  <li><a className="dropdown-item" href="/services/cargo">Cargo</a></li>
                  <li><a className='dropdown-item' href='/services/storage'> Storage</a></li>
                  <li><a className="dropdown-item" href="/services/warehousing">Warehousing</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/blog">Blog</a></li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/contact">Contact</a></li>
            </ul>
           

            <div style={{ border: '1px solid white', color: 'white', padding: '10px',  width: '300px'}}>
        <div>
          <h5>Opening Hours</h5>
          <p>Mon - Sat 09:00 - 17:00</p>
        </div>
        <div>
          <h5>Call Us</h5>
          <p>+91 707070-5528</p>
        </div>
        <div>
          <h5>Email Us</h5>
          <p>info@eazymov.com</p>
        </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header2;
