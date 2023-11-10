import React, { useState, useEffect } from "react";

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
          <a className="navbar-brand" href="#0">
            <div className="logo">
              <div className="logo-light">
                <img src={logo} style={{ zIndex: "999" }} alt="" />
              </div>
            </div>
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li
                className="nav-item dropdown"
                onMouseEnter={handleDropdownHover}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <a href="#0">
                      Showcase <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a className="dropdown-item" href="showcase-full.html">
                          Fullscreen Slider
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="showcase-interactive-center.html"
                        >
                          Interactive Links
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="showcase-interactive-center-horizontal.html"
                        >
                          Interactive Links 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="showcase-parallax.html"
                        >
                          Parallax Slider
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="showcase-column-horizontal.html"
                        >
                          Columns Horizontal
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="home-main.html">
                      Home Main
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="home-creative.html">
                      Creative Studio
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="home-modern.html">
                      Modern Agency
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="home-business.html">
                      Business Corporate
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="home-arch.html">
                      Architecture
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="home-freelancer.html">
                      Freelancer
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="home-agency.html">
                      Digital Agency
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="home-fullpage-scroll.html"
                    >
                      One Page Scrolling
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="home-portfolio-grid.html"
                    >
                      Creative Agency
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="home-portfolio-minimal.html"
                    >
                      Minimal Portfolio
                    </a>
                  </li>
                </ul>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleDropdownHover}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <a href="#0">
                      About <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a className="dropdown-item" href="pg-about-us.html">
                          About Us 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="pg-about-us2.html">
                          About Us 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-item">
                    <a href="#0">
                      Services <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a className="dropdown-item" href="pg-services.html">
                          Services 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="pg-services2.html">
                          Services 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pg-our-team.html">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pg-contact.html">
                      Get In Touch
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pg-mission.html">
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="404.html">
                      Error 404
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="coming-soon.html">
                      Coming Soon
                    </a>
                  </li>
                </ul>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleDropdownHover}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Portfolio
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <a href="#0">
                      Grid <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a
                          className="dropdown-item"
                          href="portfolio-grid-2col.html"
                        >
                          Grid 2 Columns
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="portfolio-grid-3col.html"
                        >
                          Grid 3 Columns
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="portfolio-grid-4col.html"
                        >
                          Grid 4 Columns
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-item">
                    <a href="#0">
                      Masonry <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a
                          className="dropdown-item"
                          href="portfolio-masonry-classic.html"
                        >
                          Masonry Classic
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="portfolio-masonry-shadow.html"
                        >
                          Masonry Shadow
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="portfolio-masonry-overlay.html"
                        >
                          Masonry Overlay
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="portfolio-masonry-big-space.html"
                        >
                          Masonry Wide Space
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="portfolio-masonry-caption-cursor.html"
                        >
                          Masonry Cursor Caption
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="portfolio-layout-hover-effect.html"
                    >
                      Hover Effect
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="portfolio-layout-metro.html"
                    >
                      Layout Metro
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="portfolio-layout-packery.html"
                    >
                      Layout Packery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="project-details.html">
                      Project Details
                    </a>
                  </li>
                </ul>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleDropdownHover}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blogs
                </a>
                <ul className="dropdown-menu show-left">
                  <li className="dropdown-item">
                    <a href="#0">
                      Blog Grid{" "}
                      <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a className="dropdown-item" href="blog-grid-2col.html">
                          Grid 2 Columns + Sidebar
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="blog-grid-3col.html">
                          Grid 3 Columns
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="blog-grid-4col.html">
                          Grid 4 Columns
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-item">
                    <a href="#0">
                      Blog Masonry{" "}
                      <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a
                          className="dropdown-item"
                          href="blog-masonry-2col.html"
                        >
                          Masonry 2 Columns + Sidebar
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="blog-masonry-3col.html"
                        >
                          Masonry 3 Columns
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="blog-masonry-4col.html"
                        >
                          Masonry 4 Columns
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-classic.html">
                      Blog Calssic
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-list.html">
                      Blog List
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-post.html">
                      Post Details
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="pg-contact2.html">
                  Contact
                </a>
              </li>
            </ul>
            <div className="nav-info-right d-flex align-items-center">
              <div className="social">
                <ul className="rest">
                  <li>
                    <a href="#0">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-dribbble"></i>
                    </a>
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
