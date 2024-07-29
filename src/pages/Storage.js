import React from 'react'
import Layout from '../components/Layout'
import About_banner from "../images/contactbg.jpg";

const Storage = () => {
  return (
    <Layout title={"Eazymov-Services-Storage"}>

<div
        className="container-fluid "
        style={{ position: "absolute" , zIndex: "0", top: "0", left: "0"}}
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
                  style={{ padding: "180px", flex: "wrap" , top:'20%'}}
                >
                  <div>
                    <h1 style={{ textAlign: "justify", fontSize: "2vw" }}>
                      Storage
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
                      <li>Storage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>

     <div className="container p-3">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            
          </div>
        </div>
        <div className="row" style={{ marginTop: "300px"}}>
       
          <div className="col-lg-7 col-md-12 col-sm-12" >
            <img src="../img/services-item-2.jpg" alt="overland" style={{width:'100%'}} />
            <div>
              <h3 style={{ textAlign: "justify", fontSize: "1.5vw" , paddingTop:'20px'}}>
              Storage
            </h3>
            <hr style={{ backgroundColor: "#0B60A9", height: "2px" ,width:'10%',}}/>
            </div>
            <p style={{ textAlign: "justify", fontSize: "12px" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedap euydoeiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
            <p style={{ textAlign: "justify", fontSize: "12px" }}> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.</p>
            <p style={{ textAlign: "justify", fontSize: "12px" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedap euydoeiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

            <div className='d-flex justify-content-between'>
  <div className='d-flex shadow white p-2' style={{width: '200px'}}>
    <div>
      <i className="fas fa-ship" style={{color: '#0B60A9'}}></i>
    </div>
    <div style={{paddingLeft: '10px'}}>
      <h6>Sea Delivery</h6>
      <p style={{fontSize: '12px'}}>Lorem ipsum dolor sit amet, consec adip tesque tinciunt rutrum sapien, sed diam.</p>
    </div>
  </div>
  <div className='d-flex shadow white p-2' style={{width: '200px'}}>
    <div>
      <i className="fas fa-box-open" style={{color: '#0B60A9'}}></i>
    </div>
    <div style={{paddingLeft: '10px'}}>
      <h6>Packaged Goods</h6>
      <p style={{fontSize: '12px'}}>Lorem ipsum dolor sit amet, consec adip tesque tinciunt rutrum sapien, sed diam.</p>
    </div>
  </div>
  <div className='d-flex shadow white p-2' style={{width: '200px'}}>
    <div>
      <i className="fas fa-warehouse" style={{color: '#0B60A9'}}></i>
    </div>
    <div style={{paddingLeft: '10px'}}>
      <h6>Warehousing</h6>
      <p style={{fontSize: '12px'}}>Lorem ipsum dolor sit amet, consec adip tesque tinciunt rutrum sapien, sed diam.</p>
    </div>
  </div>
            </div>

           </div>


          <div className='col-lg-5 col-md-12 col-sm-12'>
            <div className='d-flex justify-content-center'>
              <div>
                 <div>
                   <h5>Other Services</h5>
                   <p><a href="OceanNetwork" style={{textDecoration:'none', color:'black', fontSize:'14px'}}>Ocean Network</a> <hr style={{ backgroundColor: "#eee", height: "2px" }}/></p>
                   <p><a href="Overland" style={{textDecoration:'none', color:'black', fontSize:'14px'}}>Overland Network</a> <hr style={{ backgroundColor: "#eee", height: "2px" }}/></p>
                   <p><a href="Cargo" style={{textDecoration:'none', color:'black', fontSize:'14px'}}>Cargo</a> <hr style={{ backgroundColor: "#eee", height: "2px" }}/></p>
                   <p><a href="Storage" style={{textDecoration:'none', color:'black', fontSize:'14px'}}>Storage</a> <hr style={{ backgroundColor: "#eee", height: "2px" }}/></p>
                   <p><a href="airfreight" style={{textDecoration:'none', color:'black', fontSize:'14px'}}>Air Fright</a> <hr style={{ backgroundColor: "#eee", height: "2px" }}/></p>
                   <p><a href="warehousing" style={{textDecoration:'none', color:'black', fontSize:'14px'}}>WareHouse</a> <hr style={{ backgroundColor: "#eee", height: "2px" }}/></p>
                 </div>
                 <div className='pdf' style={{background:'#08487e', color:'white', padding:'10px', marginTop:'20px'}}>
                    <h5>PDF DOWNLOAD</h5>
                    <p> <a href="path/to/your.pdf" download class="pdf-download" style={{color:'white', fontSize:'14px',textDecoration:'none'}}><i class="fas fa-file-pdf"></i>Annual Brochure 2023</a></p>
                    <hr style={{ backgroundColor: "#eee" }}/>
                    <p> <a href="path/to/your.pdf" download class="pdf-download" style={{color:'white', fontSize:'14px',textDecoration:'none'}}><i class="fas fa-file-pdf"></i>Annual Brochure 2023 / EN</a></p>
                    <hr style={{ backgroundColor: "#eee" }}/>
                    <p> <a href="path/to/your.pdf" download class="pdf-download" style={{color:'white', fontSize:'14px',textDecoration:'none'}}><i class="fas fa-file-pdf"></i>Annual Brochure Services</a></p>
                    <hr style={{ backgroundColor: "#eee" }}/>
                 </div>
              </div>
            </div>
          </div>
        </div>
     </div>


     <div className='container'>
      <div className='row'>
        <div className='col-lg-12 text-center p-5'>
          <div>
            <h1 className='text-center'>Are you ready to work with us?</h1>
             <div className='p-5'>
               <button style={{ color:'white',background:'#08487e', border:'none', padding:'10px', width:'200px'}}>Contact Us Now</button>
             </div>
          
          </div>

        </div>

      </div>

     </div>
    </Layout>
  )
}

export default Storage