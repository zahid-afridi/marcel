import React, { useState } from "react";

import Brand2 from "../assets/img/brands/02.png";
import Brand3 from "../assets/img/brands/03.png";
import Brand4 from "../assets/img/brands/04.png";
import Brand5 from "../assets/img/brands/05.png";
import Brand6 from "../assets/img/brands/06.png";
import Brand7 from "../assets/img/brands/07.png";

// img color change
import C1 from "../assets/img/brands/02.png";
import C2 from "../assets/img/brands/05.png";
import C3 from "../assets/img/brands/04.png";
import C4 from "../assets/img/brands/06.png";
import C5 from "../assets/img/brands/07.png";
import C6 from "../assets/img/brands/03.png";
import { Link } from "react-router-dom";

export default function ClientBrands() {
  const [hoveredImg, setHoveredImg] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImg(index);
  };

  const handleMouseLeave = () => {
    setHoveredImg(null);
  };

  const images = [Brand2, Brand3, Brand4, Brand5, Brand6, Brand7];
  const colorImages = [C1, C2, C3, C4, C5, C6];

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
            {images.map((img, index) => (
              <div
                key={index}
                className="col-md-3 col-6 brands"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="item wow fadeIn" data-wow-delay=".6s">
                  <div className="img">
                    <img
                      src={hoveredImg === index ? colorImages[index] : img}
                      alt=""
                    />
                  </div>
                  <Link to="#0" className="link" data-splitting>
                    www.Cinzel.com
                  </Link>
                </div>
              </div>
            ))}
            <div className="col-md-3 col-6 valign text-center">
              <div className="full-width">
                <h6 className="sub-title main-color mb-0 wow" data-splitting>
                  <Link to="">Become a Client</Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
