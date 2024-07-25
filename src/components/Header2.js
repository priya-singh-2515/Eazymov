import React from 'react';

const Header2 = () => {
  return (
    <header>
      <div className="top-bar bg-white py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className='d-flex justify-content-between'>
            <div className="col-md-3">
              <img src="img/eazymov logo-1.png" alt="Logo" className="img-fluid" style={{width:'150px',}}/>
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
                <span className="navbar-toggler-icon" >menu</span>
                 </button>
            </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link text-white" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/contact">Contact</a>
              </li>
            </ul>
            <div className="form-inline my-lg-0" style={{paddingLeft:'400px'}}>
              <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
                <i className="fas fa-search"></i>
              </button>
              <button className="btn btn-light my-2 my-sm-0 ml-2 text-white" style={{background: "#08487e"}} type="submit">Request a Quote</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header2;
