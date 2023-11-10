import React from "react";
import Blog1 from "../assets/img/blog/1.jpg";
import Blog2 from "../assets/img/blog/2.jpg";
import Blog3 from "../assets/img/blog/3.jpg";

export default function Blog() {
  return (
    <>
      <section className="mblog section-padding">
        <div className="container">
          <div className="sec-head mb-80">
            <div className="row">
              <div className="col-lg-7">
                <h3>Latest posts</h3>
              </div>
              <div className="col-lg-5">
                <p
                  style={{
                    fontSize: "15px",
                    color: "gray",
                    fontWeight: "400",
                  }}
                >
                  Our design services start and end with a best-in-class
                  experience strategy that builds brands.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="post-box box-shad md-mb50">
                <div className="img">
                  <img src={Blog1} alt="" />
                  <a href="" className="tag fz-13 fw-600">
                    Design
                  </a>
                </div>
                <div className="cont mt-30">
                  <div className="d-flex align-items-center mb-15">
                    <div className="date">
                      <a href="blog-grid-3col.html">
                        <span className="fz-20">30</span>{" "}
                        <span className="nowrap fz-13">Aug 2021</span>
                      </a>
                    </div>
                    <div className="author fz-13 fw-500 ml-auto">
                      <span>By : Admin</span>
                    </div>
                  </div>
                  <h5 className="fz-20">
                    <a href="blog-post.html">
                      Creative advertising in our life became an info noise
                    </a>
                  </h5>
                  <a
                    href="blog-post.html"
                    className="mt-20 main-color fw-600 fz-13"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="post-box box-shad md-mb50">
                <div className="img">
                  <img src={Blog2} alt="" />
                  <a href="blog-grid-3col.html" className="tag fz-13 fw-600">
                    Design
                  </a>
                </div>
                <div className="cont mt-30">
                  <div className="d-flex align-items-center mb-15">
                    <div className="date">
                      <a href="blog-grid-3col.html">
                        <span className="fz-20">30</span>{" "}
                        <span className="nowrap fz-13">Aug 2021</span>
                      </a>
                    </div>
                    <div className="author fz-13 fw-500 ml-auto">
                      <span>By : Admin</span>
                    </div>
                  </div>
                  <h5 className="fz-20">
                    <a href="blog-post.html">
                      Creative advertising in our life became an info noise
                    </a>
                  </h5>
                  <a
                    href="blog-post.html"
                    className="mt-20 main-color fw-600 fz-13"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="post-box box-shad">
                <div className="img">
                  <img src={Blog3} alt="" />
                  <a href="blog-grid-3col.html" className="tag fz-13 fw-600">
                    Design
                  </a>
                </div>
                <div className="cont mt-30">
                  <div className="d-flex align-items-center mb-15">
                    <div className="date">
                      <a href="blog-grid-3col.html">
                        <span className="fz-20">30</span>{" "}
                        <span className="nowrap fz-13">Aug 2021</span>
                      </a>
                    </div>
                    <div className="author fz-13 fw-500 ml-auto">
                      <span>By : Admin</span>
                    </div>
                  </div>
                  <h5 className="fz-20">
                    <a href="blog-post.html">
                      Creative advertising in our life became an info noise
                    </a>
                  </h5>
                  <a href="" className="mt-20 main-color fw-600 fz-13">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
