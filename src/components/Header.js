import React from 'react';

const Header = () => {
  return (
    <header style={{position:'absolute', width:'100%',zIndex:'1',padding:'50px 120px'}}>
    <div className="top-bar bg-white py-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <img src="img/eazymov logo-1.png" alt="Logo" className="img-fluid" style={{width:'150px',}}/>
          </div>
          <div className="col-md-3">
           <div className='d-flex'>
            <div className='text-center' style={{width: '30px', background: '#0B60A9',color:'#fff'}}>
               <i className="fas fa-clock" ></i>
            </div> 
            <div style={{marginLeft: '10px', fontSize: '12px'}}>
               <span className="d-block">Opening Hours</span>
               <span style={{fontWeight:'bold',fontSize:'14px'}}>Mon - Sat: 09.00 - 17.00</span>
            </div>
           </div>
          </div>
          <div className="col-md-3 ">
            <div className='d-flex '>
              <div className='text-center' style={{width: '30px', background: '#0B60A9',color:'#fff'}}>
                 <i className="fas fa-phone-alt"></i>
              </div>
              <div style={{marginLeft: '10px', fontSize: '12px'}}>
                 <span className="d-block">Call Us</span>
                  <span style={{fontWeight:'bold',fontSize:'14px'}}>+91 707070-5528</span></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className='d-flex'>
              <div className='text-center' style={{width: '30px', background: '#0B60A9',color:'#fff'}}>
                <i className="fas fa-envelope" style={{textAlign:'center'}}></i>
              </div>
              <div style={{marginLeft: '10px', fontSize: '12px'}}> 
                <span className="d-block">Email Us</span>
                <span style={{fontWeight:'bold',fontSize:'14px'}}>info@eazymov.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
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
          <div className="form-inline  my-lg-0" style={{paddingLeft:'400px'}}>
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
              <i className="fas fa-search"></i>
            </button>
            <button className="btn btn-light my-2 my-sm-0 ml-2 text-white"style={{background: "#08487e"}} type="submit">Request a Quote</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
  );
}

export default Header;
