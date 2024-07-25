import React from 'react'

const Footer = () => {
  return (
    <div>
  <div className="container-fluid mt-2 ">
    <footer className="text-center text-lg-start text-white" style={{backgroundColor: '#1c2331'}}>
      <section className="d-flex justify-content-between p-4" style={{backgroundColor: '#6351ce'}}>
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href className="text-white me-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href className="text-white me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href className="text-white me-4">
            <i className="fab fa-google" />
          </a>
          <a href className="text-white me-4">
            <i className="fab fa-instagram" />
          </a>
          <a href className="text-white me-4">
            <i className="fab fa-linkedin" />
          </a>
          <a href className="text-white me-4">
            <i className="fab fa-github" />
          </a>
        </div>
      </section>
      <section className>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h5> <img src="img/eazymov logo-1.png" alt="Logo" className="img-fluid" style={{width:'150px',}}/></h5>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
              <p>
              Etiam facilisis eu nisi scelerisque fabus. Proin semper suscipit magna, nec pediet lacus semper.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">RECENT POST</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
              <p>
                <a href="#!" className="text-white">MDBootstrap</a>
              </p>
              <p>
                <a href="#!" className="text-white">MDWordPress</a>
              </p>
              <p>
                <a href="#!" className="text-white">BrandFlow</a>
              </p>
              <p>
                <a href="#!" className="text-white">Bootstrap Angular</a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
              <p>
                <a href="#!" className="text-white">Home</a>
              </p>
              <p>
                <a href="#!" className="text-white">About</a>
              </p>
              <p>
                <a href="#!" className="text-white">Services</a>
              </p>
              <p>
                <a href="#!" className="text-white">Blog</a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
              <p><i className="fas fa-home mr-3" /> Shop No. 20, R.K.Tower, Sector 3, Faridabad 121004</p>
              <p><i className="fas fa-envelope mr-3" /> info@eazymov.com
              </p>
              <p><i className="fas fa-phone mr-3" /> +91 707070-5528
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © 2024 Copyright :
        <a className="text-white" href="https://info@eazymov.com/">  Eazymov.com
        </a>
      </div>
    </footer>
  </div>
</div>

  )
}

export default Footer