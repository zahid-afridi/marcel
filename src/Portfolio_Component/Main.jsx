import React from "react";
import Img1 from '../assets/myimg/protfoilio/img2.jpg'
import Img2 from '../assets/myimg/protfoilio/img1.jpg'
import Img3 from '../assets/myimg/protfoilio/img3.jpg'
import Img5 from '../assets/myimg/protfoilio/img5.jpg'
import Img4 from '../assets/myimg/protfoilio/img4.jpg'
import Img6 from '../assets/myimg/protfoilio/img6.jpg'
import Img7 from '../assets/myimg/protfoilio/img7.jpg'
import Img8 from '../assets/myimg/protfoilio/img8.jpg'
export default function Main() {
  return (
    <>
      <div className="container " style={{marginTop:'55px',marginBottom:'53px'}}>
        <h1 className="fs-1 text-center text-white" style={{ fontFamily: "'Syne', sans-serif",fontWeight:'400' }}>Unleashing Imagination,Creafting Innvation: <br></br>
        Your Ideas,<span className="main-color">Our Expertise.</span></h1>
      </div>

       {/* images start */}
         <div className="container  ">
          <div className="row ">
            <div className="col-md-4 col-lg-4 col-12 col-sm-12">
                    <div className="row">
                      <div className="col-md-12 col-lg-12 col-12 col-sm-12">
                          <div>
                                     <img src={Img1} className="img-fluid" alt="" />
                          </div>
                      </div>
                      <div className="col-md-12 col-lg-12 col-12 col-sm-12 " style={{paddingTop:'18px'}}>
                       <div>
                         <img src={Img2} className="img-fluid "  alt="" />
                       </div>
                      </div>
                     
                    </div>
            </div>
            <div className="col-md-8 col-lg-8 col-12 col-sm-12">
              <img src={Img3} className="img-fluid w-full" alt=""  />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-8 col-lg-8 col-12 col-sm-12">
              <div>
                <img src={Img4} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-12 col-sm-12">
              <div>
                <img src={Img5} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
              <img src={Img6} className="img-fluid" alt="" />
            </div>
              <div className="col-12 col-lg-12 col-md-12 col-sm-12 p-3">
              <img src={Img7} className="img-fluid" alt="" />
            </div>
             <div className="col-12 col-lg-12 col-md-12 col-sm-12 p-3">
              <img src={Img8} className="img-fluid" alt="" />
            </div>
          </div>
           
         </div>
       {/* images end */}
    </>
  );
}
