import React from 'react'

import serviceimg from '../../images/service-img.png'


const Services = () => {
  return (
    <>
    <div className='container-fluid' style={{ backgroundColor:'#f6f6f6',color:'black'}}>
        <div className='row'>
           <div className='d-flex' style={{padding:'100px'}}>
           <div className='col-lg-6 col-md-12 col-sm-12 p-5'>
               <div>
                  <h5>SERVICES CALCULATOR</h5>
                  <hr style={{color:'#f6f6f6', width:'100px'}}/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <img src={serviceimg} alt='serviceimg' style={{width:'100%',height:'60vh'}}/>
               </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 p-5'>
            <form style={{backgroundColor: '#0B60A9', padding: '20px', borderRadius: '5px',color:'#fff',height:'100%',width:'100%'}}>
  <div className="form-group">
    <label htmlFor="name" style={{fontSize:'14px', margin:'0px', padding:'0px'}}>Name</label>
    <input
      type="text"
      className="form-control"
      id="name"
      name="user_name"
      placeholder="Enter your name"
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="email" style={{fontSize:'14px'}}>Email address</label>
    <input
      type="email"
      className="form-control"
      id="email"
      name="user_email"
      placeholder="Enter your email"
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="contact" style={{fontSize:'14px'}}>Contact</label>
    <input
      type="text"
      className="form-control"
      id="contact"
      name="phone"
      placeholder="Enter your contact number"
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="service" style={{fontSize:'14px'}}>Service</label>
    <select
      className="form-control"
      id="service"
      name="service"
      required
    >
      <option value="">Select Service</option>
      <option value="overland">Overland Network</option>
      <option value="network"> Ocean Network</option>
      <option value="Warehousing">Warehousing</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="message" style={{fontSize:'14px'}}>Message</label>
    <textarea
      className="form-control"
      id="message"
      name="message"
      rows="3"
      placeholder="Enter your message"
      required
    ></textarea>
  </div>
<div style={{textAlign:'center', paddingTop:'20px'}}>
<button type="submit" className="btn btn-primary" style={{backgroundColor: '#fff', color:'#242424', borderColor: '#0B60A9'}}>Submit</button>
</div>
</form>
            </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default Services