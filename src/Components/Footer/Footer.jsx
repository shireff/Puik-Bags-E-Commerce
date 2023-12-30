import React from "react";
import { Link } from "react-router-dom";
import Style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={` p-70 ${Style}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h3>LOOKING FOR PUIK?</h3>
              <p>Got Question? Call us 24/7</p>
              <h4>0123 456 789</h4>
              <p>268 St, South New York/NY 98944, United States</p>
              <p>Customersupport@example.com</p>
              <p>aloshopify@alothemes.com</p>
            </div>
            <div className="col-lg-2">
              <h3>INFORMATION</h3>
              <ul>
                <li>
                  <Link className={Style.fLink}>About Us</Link>
                </li>
                <li>
                  <Link className={Style.fLink}>Customer Service</Link>
                </li>
                <li>
                  <Link className={Style.fLink}>Blog</Link>
                </li>
                <li>
                  <Link className={Style.fLink}>Page 404</Link>
                </li>
                <li>
                  <Link className={Style.fLink}>Sizing Guide</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h3>OUR SERVICE</h3>
              <ul>
                <li>
                  <Link className={Style.fLink}>Shipping Policy</Link>
                </li>
                <li>
                  <Link className={Style.fLink}>Help & Contact Us</Link>
                </li>
                <li>
                  <Link className={Style.fLink}>Returns & Refunds</Link>
                </li>
                <li>
                  <Link className={Style.fLink}>Online Stores</Link>
                </li>
                <li>
                  <Link className={Style.fLink}>Payment Method</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h3>PAYMENT & SHIPPING</h3>
              <ul>
                <li>
                  <Link className={Style.fLink}>Terms Of Use</Link>
                </li>
                <li>
                  <Link className={Style.fLink}>Payment Methods</Link>
                </li>
                <li>
                  <Link className={Style.fLink}>Shipping Guide</Link>
                </li>
                <li>
                  <Link className={Style.fLink}>Locations We Ship To</Link>
                </li>
                <li>
                  <Link className={Style.fLink}>Estimated Delivery Time</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h3>FOLLOW US</h3>
              <ul>
                <li>
                  <Link className={Style.fLink}>Facebook</Link>
                </li>
                <li>
                  <Link className={Style.fLink}>Twitter</Link>
                </li>
                <li>
                  <Link className={Style.fLink}>Instagram</Link>
                </li>
                <li>
                  <Link className={Style.fLink}>Pinterest</Link>
                </li>
                <li>
                  <Link className={Style.fLink}>Youtube</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
