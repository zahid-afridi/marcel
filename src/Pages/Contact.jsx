import React,{useEffect} from 'react'
import Footer from '../Portfolio_Component/Footer'

export default function Contact() {
    useEffect(() => {
    document.body.style.backgroundColor = "#191b1d";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
   <>
    <main>

        <div className="vline tline"></div>


     

        <header className="pg-header">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-lg-7 col-md-10">
                        <div className="cont mb-80">
                            <h6 className="sub-title main-color">Contact</h6>
                            <h3 className="fw-700 text-white">We Give You Digital Solutions a full-service creative agency.</h3>
                        </div>
                    </div>
                </div>
            </div>
     
        </header>



        <section className="contact">
            <div className="container-xxl">
                     <div className="form section-padding">

                    <div className="row">
                        <div className="col-lg-3">
                            <div>
                                <h3 className="fw-700 mb-50 text-white">Get In Touch.</h3>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <form id="contact-form" method="post" action="contact.php">

                                <div className="messages"></div>
        
                                <div className="controls">
        
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="sm-mb30">
                                                    <input id="form_name" type="text" name="name" placeholder="Your Name"
                                                        required="required"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div>
                                                    <input id="form_email" type="email" name="email" placeholder="Your Email"
                                                        required="required"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="sm-mb30">
                                                    <input id="form_subject" type="text" name="subject" placeholder="Subject"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div>
                                                    <input id="form_phone" type="text" name="phone" placeholder="Phone Number"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div className="form-group">
                                        <textarea id="form_message" name="message" placeholder="Type Your Message" rows="4"
                                            required="required"></textarea>
                                    </div>
        
                                    <button type="submit" className="sub-title mb-0 mt-30"><span>Send
                                            Message</span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="cont-info section-padding bord-thin-bottom">
                    <div className="row">
                        <div className="col-lg-3">
                            <div>
                                <h3 className="fw-700 mb-50 text-white">Contact Info.</h3>
                            </div>
                        </div>
                        <div className="col-lg-9">

                            <div className="row">

                                <div className="col-md-4 sm-mb50">
                                    <div className="mb-20 pb-20 bord-thin-bottom">
                                        <h5 className="fz-20 fw-700 text-white">Barcelona</h5>
                                    </div>

                                    <div className="item mb-15">
                                        <h6 className="fz-18 fw-400 text-white">295 Witting Streets Suite 666, Melbourne, Australia</h6>
                                    </div>

                                    <div className="item">
                                        <h6 className="fw-400"><span className="fw-700 mr-10 text-white">Call US :</span> <span className="main-color">+4.930.705.5448</span></h6>
                                    </div>

                                    <div className="item mt-20">
                                        <p>Assistance hours: Monday – Friday
                                            6 am to 8 pm EST (toll free)</p>
                                    </div>
                                </div>

                                <div className="col-md-4 sm-mb50">
                                    <div className="mb-20 pb-20 bord-thin-bottom">
                                        <h5 className="fz-20 fw-700 text-white">London</h5>
                                    </div>

                                    <div className="item mb-15">
                                        <h6 className="fz-18 fw-400 text-white">295 Witting Streets Suite 666, Melbourne, Australia</h6>
                                    </div>

                                    <div className="item">
                                        <h6 className="fw-400 text-white"><span className="fw-700 mr-10">Call US :</span> <span className="main-color">+4.930.705.5448</span></h6>
                                    </div>

                                    <div className="item mt-20">
                                        <p>Assistance hours: Monday – Friday
                                            6 am to 8 pm EST (toll free)</p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="mb-20 pb-20 bord-thin-bottom">
                                        <h5 className="fz-20 fw-700 text-white">Social Icons</h5>
                                    </div>
                                    <div className="social fz-13">
                                        <a href="#0" className="icon">
                                            <i className="fab fa-facebook-f text-white"></i>
                                        </a>
                                        <a href="#0" className="icon">
                                            <i className="fab fa-twitter text-white"></i>
                                        </a>
                                        <a href="#0" className="icon">
                                            <i className="fab fa-pinterest text-white"></i>
                                        </a>
                                        <a href="#0" className="icon">
                                            <i className="fab fa-behance text-white"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                
            </div>
        </section>

       

    </main>
   <Footer></Footer>
   </>
  )
}
