import React from "react";

const WhyChoosetext = [
  {
    head: "Ground Shipping",
    para: "Lorem ipsum dolor sit amet, consec adip tesque tinciunt rutrum sapien, sed diam.",
    img: "./img/choose1.png",
  },
  {
    head: "Air Delivery",
    para: "Lorem ipsum dolor sit amet, consec adip tesque tinciunt rutrum sapien, sed diam.",
    img: "./img/choose2.png",
  },
  {
    head: "Sea Delivery",
    para: "Lorem ipsum dolor sit amet, consec adip tesque tinciunt rutrum sapien, sed diam.",
    img: "./img/choose3.png",
  },
  {
    head: "Forwarding Services",
    para: "Lorem ipsum dolor sit amet, consec adip tesque tinciunt rutrum sapien, sed diam.",
    img: "./img/choose4.png",
  },
  {
    head: "Packaged Goods",
    para: "Lorem ipsum dolor sit amet, consec adip tesque tinciunt rutrum sapien, sed diam.",
    img: "./img/choose5.png",
  },
  {
    head: "Warehousing",
    para: "Lorem ipsum dolor sit amet, consec adip tesque tinciunt rutrum sapien, sed diam.",
    img: "./img/choose6.png",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 p-4">
            <h2 className="text-center">Why Choose Us</h2>
             <hr style={{backgroundColor:'#08487e' ,textAlign:'center', fontWeight:'800',height:'2px',width:'20%',marginLeft:'40%'}}/>
          </div>
        </div>
        <div className="row">
          {WhyChoosetext.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 my-3">
              <div
                className="d-flex gap-3"
                style={{ boxShadow: "3px 3px 10px lightgray" }}
              >
                <div>
                  <img
                    src={item.img}
                    alt=""
                    style={{ width: "100px", height: "90px" }}
                  />
                </div>
                <div>
                  <h4>{item.head}</h4>
                  <p style={{ fontSize: "12px" }}>{item.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
