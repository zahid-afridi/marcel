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
                <Link className="nav-link dropdown-toggle" to="/about">
                  About Us
                </Link>
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
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleDropdownHover}
                onMouseLeave={handleDropdownLeave}
              ></li>

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
