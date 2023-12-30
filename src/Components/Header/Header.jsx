import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo11_145x@2x.png";
import Style from "./Header.module.css";
export default function Header() {
  return (
    <>
      <header className={`${Style.header} ${Style}`}>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link active  ${Style.linkk}`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${Style.linkk}`} to="shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${Style.linkk}`} to="about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${Style.linkk}`} to="contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${Style.linkk}`} to="register">
                    Register
                  </Link>
                </li>
              </ul>

              <div className={Style.headerIcons}>
                <ul className="d-flex">
                  <li>
                    <Link className={Style.linkk} to="login">
                      <i className="fa-regular fa-user"></i>
                      Login
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </li>
                  <li>
                    <Link to="cart">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
