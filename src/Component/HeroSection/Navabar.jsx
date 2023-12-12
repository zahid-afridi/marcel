import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = ({ logo }) => {
  const [isNavScroll, setIsNavScroll] = useState(false);

  const handleScroll = () => {
    const bodyScroll = window.scrollY;
    setIsNavScroll(bodyScroll > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownHover = (event) => {
    const dropdownMenu = event.currentTarget.querySelector(".dropdown-menu");
    dropdownMenu.classList.add("show");
  };

  const handleDropdownLeave = (event) => {
    const dropdownMenu = event.currentTarget.querySelector(".dropdown-menu");
    dropdownMenu.classList.remove("show");
  };

  const handleDropdownItemHover = (event) => {
    const dropdownSide = event.currentTarget.querySelector(".dropdown-side");
    dropdownSide.classList.add("show");
  };

  const handleDropdownItemLeave = (event) => {
    const dropdownSide = event.currentTarget.querySelector(".dropdown-side");
    dropdownSide.classList.remove("show");
  };

  const handleNavItemClick = (event) => {
    const unavItem = event.currentTarget.parentElement.parentElement;
    const dropdownMenu = unavItem.querySelector(".dropdown-menu");
    const dropdownItems = dropdownMenu.querySelectorAll(".dropdown-item");
    dropdownItems.forEach((item) =>
      item.querySelector(".dropdown-side").classList.remove("active")
    );
    dropdownMenu.classList.add("drop-active");
    unavItem.classList.add("unav-active");
  };

  const handleGoBackClick = () => {
    const navbarUnav = document.querySelector(".navbar-unav");
    navbarUnav.classList.remove("gosub");
    const dropdownMenus = navbarUnav.querySelectorAll(".dropdown-menu");
    dropdownMenus.forEach((menu) => menu.classList.remove("drop-active"));
    navbarUnav.classList.remove("unav-active");
    const slideMenus = navbarUnav.querySelectorAll(
      ".dropdown-item .slide-menu"
    );
    slideMenus.forEach((menu) => menu.classList.remove("active"));
    const dropdownSides = navbarUnav.querySelectorAll(".dropdown-side");
    dropdownSides.forEach((side) => side.classList.remove("show"));
  };

  const handleSlideMenuClick = (event) => {
    const slideMenu = event.currentTarget;
    slideMenu.classList.toggle("active");
    const dropdownSide =
      slideMenu.parentElement.querySelector(".dropdown-side");
    dropdownSide.classList.toggle("show");
  };

  const handleMenuEnter = () => {
    const navSide = document.querySelector(".nav-side");
    const overlayNav = document.querySelector(".nav-left-fixed .overlay-nav");
    navSide.classList.add("show");
    overlayNav.classList.add("show");
  };

  const handleOverlayNavEnter = () => {
    const navSide = document.querySelector(".nav-side");
    const overlayNav = document.querySelector(".nav-left-fixed .overlay-nav");
    navSide.classList.remove("show");
    overlayNav.classList.remove("show");
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${isNavScroll ? "nav-scroll" : ""}`}
      >
        <div className="container-xxl">
          <Link className="navbar-brand" to="/">
            <div className="logo">
              <div className="logo-light">
                <img
                  src={logo}
                  className="img-sm-fluid"
                  style={{ zIndex: "999" }}
                  alt=""
                />
              </div>
            </div>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li
                className="nav-item dropdown"
                onMouseEnter={handleDropdownHover}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  aria-expanded="false"
                >
                  Home
                </Link>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleDropdownHover}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  to="##"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="##0">
                      About <i className="fas fa-angle-right icon-arrow"></i>
                    </Link>
                    <ul className="dropdown-side">
                      <li>
                        <Link className="dropdown-item" to="#pg-about-us.html">
                          About Us 1
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#pg-about-us2.html">
                          About Us 2
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-item">
                    <Link to="##0">
                      Services <i className="fas fa-angle-right icon-arrow"></i>
                    </Link>
                    <ul className="dropdown-side">
                      <li>
                        <Link className="dropdown-item" to="#pg-services.html">
                          Services 1
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#pg-services2.html">
                          Services 2
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#pg-our-team.html">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#pg-contact.html">
                      Get In Touch
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#pg-mission.html">
                      Our Mission
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#404.html">
                      Error 404
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#coming-soon.html">
                      Coming Soon
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleDropdownHover}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  to="/portfolio"
                  role="button"
                  aria-expanded="false"
                >
                  Portfolio
                </Link>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="##0">
                      Grid <i className="fas fa-angle-right icon-arrow"></i>
                    </Link>
                    <ul className="dropdown-side">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#portfolio-grid-2col.html"
                        >
                          Grid 2 Columns
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#portfolio-grid-3col.html"
                        >
                          Grid 3 Columns
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#portfolio-grid-4col.html"
                        >
                          Grid 4 Columns
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-item">
                    <Link to="##0">
                      Masonry <i className="fas fa-angle-right icon-arrow"></i>
                    </Link>
                    <ul className="dropdown-side">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#portfolio-masonry-classic.html"
                        >
                          Masonry Classic
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#portfolio-masonry-shadow.html"
                        >
                          Masonry Shadow
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#portfolio-masonry-overlay.html"
                        >
                          Masonry Overlay
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#portfolio-masonry-big-space.html"
                        >
                          Masonry Wide Space
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#portfolio-masonry-caption-cursor.html"
                        >
                          Masonry Cursor Caption
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#portfolio-layout-hover-effect.html"
                    >
                      Hover Effect
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#portfolio-layout-metro.html"
                    >
                      Layout Metro
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#portfolio-layout-packery.html"
                    >
                      Layout Packery
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#project-details.html">
                      Project Details
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleDropdownHover}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  to="##"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blogs
                </Link>
                <ul className="dropdown-menu show-left">
                  <li className="dropdown-item">
                    <Link to="##0">
                      Blog Grid{" "}
                      <i className="fas fa-angle-right icon-arrow"></i>
                    </Link>
                    <ul className="dropdown-side">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#blog-grid-2col.html"
                        >
                          Grid 2 Columns + Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#blog-grid-3col.html"
                        >
                          Grid 3 Columns
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#blog-grid-4col.html"
                        >
                          Grid 4 Columns
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-item">
                    <Link to="##0">
                      Blog Masonry{" "}
                      <i className="fas fa-angle-right icon-arrow"></i>
                    </Link>
                    <ul className="dropdown-side">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#blog-masonry-2col.html"
                        >
                          Masonry 2 Columns + Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#blog-masonry-3col.html"
                        >
                          Masonry 3 Columns
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#blog-masonry-4col.html"
                        >
                          Masonry 4 Columns
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#blog-classic.html">
                      Blog Calssic
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#blog-list.html">
                      Blog List
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#blog-post.html">
                      Post Details
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="nav-info-right d-flex align-items-center">
              <div className="social">
                <ul className="rest">
                  <li>
                    <Link to="##0">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="##0">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="##0">
                      <i className="fab fa-dribbble"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
