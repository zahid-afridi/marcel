import React from "react";

import Brand2 from "../assets/img/brands/02.png";
import Brand3 from "../assets/img/brands/03.png";
import Brand4 from "../assets/img/brands/04.png";
import Brand5 from "../assets/img/brands/05.png";
import Brand6 from "../assets/img/brands/06.png";
import Brand7 from "../assets/img/brands/07.png";

export default function ClientBrans() {
  return (
    <>
      <section className="clients section-padding bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6 valign text-center">
              <div className="full-width">
                <h6 className="sub-title mb-0 wow" data-splitting>
                  Our Clients
                </h6>
              </div>
            </div>
            <div className="col-md-3 col-6 brands">
              <div className="item wow fadeIn" data-wow-delay=".6s">
                <div className="img">
                  <img src={Brand2} alt="" />
                </div>
                <a href="#0" className="link" data-splitting>
                  www.Cinzel.com
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6 brands">
              <div className="item wow fadeIn" data-wow-delay=".8s">
                <div className="img">
                  <img src={Brand3} alt="" />
                </div>
                <a href="#0" className="link" data-splitting>
                  www.Cinzel.com
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6 brands">
              <div className="item wow fadeIn" data-wow-delay=".3s">
                <div className="img">
                  <img src={Brand4} alt="" />
                </div>
                <a href="#0" className="link" data-splitting>
                  www.Cinzel.com
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6 brands">
              <div className="item wow fadeIn" data-wow-delay=".4s">
                <div className="img">
                  <img src={Brand5} alt="" />
                </div>
                <a href="#0" className="link" data-splitting>
                  www.Cinzel.com
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6 brands">
              <div className="item wow fadeIn" data-wow-delay=".7s">
                <div className="img">
                  <img src={Brand6} alt="" />
                </div>
                <a href="#0" className="link" data-splitting>
                  www.Cinzel.com
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6 brands">
              <div className="item wow fadeIn" data-wow-delay=".5s">
                <div className="img">
                  <img src={Brand7} alt="" />
                </div>
                <a href="#0" className="link" data-splitting>
                  www.Cinzel.com
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6 valign text-center">
              <div className="full-width">
                <h6 className="sub-title main-color mb-0 wow" data-splitting>
                  <a href="pg-contact2.html">Become a Client</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
