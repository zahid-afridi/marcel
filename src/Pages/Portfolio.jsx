import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Portfolio_Component/Footer";
import HeadImg from "../assets/img/slider/8.jpg";
import Work1 from "../assets/img/works/grid/1.jpg";
import Work2 from "../assets/img/works/grid/2.jpg";
import Work3 from "../assets/img/works/grid/3.jpg";
import Work4 from "../assets/img/works/grid/4.jpg";
import Work5 from "../assets/img/works/grid/5.jpg";
import Work6 from "../assets/img/works/grid/6.jpg";
import "animate.css/animate.min.css";

export default function Portfolio() {
  const [filter, setFilter] = useState("*");

  const projects = [
    { category: "brand", image: Work1, title: "stitchers" },

    { category: "app", image: Work2, title: "Character Design" },
    { category: "web", image: Work3, title: "Character Design" },
    { category: "brand", image: Work4, title: "Character Design" },
    { category: "web", image: Work5, title: "Character Design" },
    { category: "app", image: Work6, title: "Character Design" },
  ];

  const filteredProjects =
    filter === "*"
      ? projects
      : projects.filter((project) => project.category === filter);

  useEffect(() => {
    document.body.style.backgroundColor = "#191b1d";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  return (
    <>
      <main>
        <header
          className="pg-header style2 bg-img parallaxie valign"
          style={{
            backgroundImage: `url(${HeadImg})`,
            backgroundSize: "cover !important",
            backgroundPosition: "center !important",
          }}
          data-overlay-dark="6"
        >
          <div className="container ontop">
            <div className="row">
              <div className="col-12">
                <div className="cont mb-80">
                  <h6 className="sub-title">
                    <Link to="home-main.html">Home</Link>
                    <span className="ml-20 mr-20">/</span>
                    <span className="main-color">Portfolio</span>
                  </h6>
                  <h1 className="fw-700 fz-70">Grid 2 Columns.</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="shadw"></div>
        </header>

        <section className="portfolio section-padding pb-30">
          <div className="container">
            <div className="row">
              <div className="filtering col-12 mb-80 text-center">
                <div className="filter text-white">
                  <span className="text-white">Filter By :</span>
                  {["*", "brand", "app", "web"].map((category) => (
                    <span
                      key={category}
                      onClick={() => handleFilterClick(category)}
                      className={filter === category ? "active" : ""}
                    >
                      {category === "*"
                        ? "All"
                        : category.charAt(0).toUpperCase() + category.slice(1)}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="gallery max-margin grid">
              <div className="row text-white">
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    className={`col-md-6 items ${project.category} mb-100`}
                  >
                    <div className="item-img">
                      <Link
                        to={`/portfolio/${project.title
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className=""
                      >
                        <div className="inner wow animate__animated animate__fadeIn">
                          <img src={project.image} alt="image" />
                        </div>
                      </Link>
                    </div>
                    <div
                      className="info "
                      style={{ marginTop: "-20px", marginBottom: "20px" }}
                    >
                      <span className="sub-title tag opacity-7">
                        <Link to="project-details.html">{project.title}</Link>
                      </span>
                      <h6>
                        <Link to="project-details.html">{project.title}</Link>
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
