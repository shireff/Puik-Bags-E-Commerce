import React from "react";
import { Link } from "react-router-dom";
import Style from "./Contact.module.css";
import Iframe from "react-iframe";
export default function Contact() {
  return (
    <>
      <section className={`${Style.whome}  py-3`}>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link className={Style.linkk} to="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <div className="p-70">
        <div className="container">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27630.77325138131!2d31.18244099197133!3d30.041256845179596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846cd25871d93%3A0x74a1ef05b4ecdc48!2sAd%20Doqi%2C%20Dokki%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1703850993458!5m2!1sen!2seg"
            width="100%"
            height="550"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Iframe>
        </div>
      </div>
      <section className={` p-50 ${Style.infoo}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>Get In Touch</h3>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="row ">
                <div className="mb-3 col-lg-6 ">
                  <input
                    type="text"
                    className="form-control w-100 "
                    id="exampleFormControlInput1"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-3 col-lg-6 ">
                  <input
                    type="email"
                    className="form-control  "
                    id="exampleFormControlInput1"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control  "
                  id="exampleFormControlInput1"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
                <div className="justify-content-center d-flex ">
                  <button className={`btn ${Style.btnmain}`}>
                    send message
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3>Contact Information</h3>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra per inceptos pretium.
              </p>
              <h6>LOCATION STORE:</h6>
              <p>268 St, South New York/NY 98944, United States.</p>
              <h6>WORK TIME:</h6>
              <p>
                Monday – Friday: 9:00-20:00 <br />
                Saturady: 11:00 – 15:00
              </p>
              <h6>PHONE NUMBER:</h6>
              <p>
                0123 456 789 <br />
                (+100) 666-456-7890
              </p>
              <h6>EMAIL ADDRESS:</h6>
              <p>
                aloshopify@alothemes.com <br />
                aloshopify@alothemes.com
              </p>
              <h6>SOCIAL ACCOUNTS:</h6>
              <i className="fa-brands fa-facebook"></i>{" "}
              <i className="fa-solid fa-xmark"></i>{" "}
              <i className="fa-brands fa-youtube"></i>{" "}
              <i className="fa-brands fa-pinterest"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
