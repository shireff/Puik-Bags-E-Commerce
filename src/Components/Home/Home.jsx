import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backgroundimg1 from "../../img/banner_11_1.jpg";
import backgroundimg2 from "../../img/banner_11_2.jpg";
import backgroundimg3 from "../../img/banner_11_3.jpg";
import Homee from "./Home.module.css";
import section1 from "../../img/17.jpg";
import section2 from "../../img/20_fa5958b8-bdb0-4b0a-aded-f5b540871f9f.jpg";
import section3 from "../../img/22-1_4ce7e311-7ca7-4286-a5c5-186eae677cbd.jpg";
import section4 from "../../img/23_3093a5d8-21b4-4a8f-ad2e-05802b0cd56e.jpg";
import section5 from "../../img/8_0e4ef92b-b8e2-4985-b2ee-825dce928ecd.jpg";
import section6 from "../../img/img_11_1.jpg";
import section7 from "../../img/8_71cf706f-3aa5-495f-a4c6-dd07849cab44.jpg";
import section8 from "../../img/img_11_2.jpg";
import section9 from "../../img/img_11_3.jpg";

import axios from "axios";
export default function Home() {
  let [product, setProduct] = useState([]);
  let [product1, setProduct1] = useState([]);
  async function getApi() {
    let api = await axios.get("shop.json");
    let { data } = api;
    setProduct(data.kid);
  }
  async function getApi1() {
    let api = await axios.get("shop.json");
    let { data } = api;
    setProduct1(data.men);
  }
  useEffect(() => {
    getApi();
    getApi1();
  }, []);
  return (
    <>
      <section className={Homee.home}>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={backgroundimg1} className="d-block w-100" alt="..." />
              <div className={`carousel-caption ${Homee.text}`}>
                <span> Hot Deal Off The Day </span>

                <h1> Leather Backpack </h1>
                <p>
                  Our robust Reporter Backpack is sure to become an
                  indispensable part <br />
                  of your accessories repertoire.
                </p>
                <Link className={`btn ${Homee.btnmain}`} to="shop">
                  {" "}
                  Discover Now
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src={backgroundimg2} className="d-block w-100" alt="..." />
              <div className={`carousel-caption ${Homee.text}`}>
                <span> Top Sale Of The Month </span>

                <h1> Cute Bookbags </h1>
                <p>
                  Top Bags to take "Back To School" that won't remind you of
                  your <br />
                  high school Backpack.
                </p>
                <Link className={`btn ${Homee.btnmain}`} to="shop">
                  {" "}
                  Discover Now
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src={backgroundimg3} className="d-block w-100" alt="..." />
              <div className={`carousel-caption ${Homee.text}`}>
                <span> Featured Products </span>

                <h1> Reporter Backpack </h1>
                <p>
                  Our robust Reporter Backpack is sure to become an
                  indispensable part <br />
                  of your accessories repertoire.
                </p>
                <Link className={`btn ${Homee.btnmain}`} to="shop">
                  {" "}
                  Discover Now
                </Link>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className={`p-50 ${Homee.featbags}`}>
        <div className="container-fluid">
          <div className="row g-5 justify-content-center ">
            <div className={`card text-center  ${Homee.carrd}`}>
              <div className={Homee.cardImg}>
                <img src={section1} alt="" />
              </div>
              <div className="card-body">
                <span>8 Products</span>
                <h5>
                  <Link className={Homee.alink} to="shop">
                    Vintage leather bag
                  </Link>
                </h5>
                <p>
                  <Link className={Homee.alink2} to="shop">
                    Discover Now
                  </Link>
                </p>
              </div>
            </div>
            <div className={`card text-center  ${Homee.carrd}`}>
              <div className={Homee.cardImg}>
                <img src={section2} alt="" />
              </div>
              <div className="card-body">
                <span>8 Products</span>
                <h5>
                  <Link className={Homee.alink} to="shop">
                    Vintage leather bag
                  </Link>
                </h5>
                <p>
                  <Link className={Homee.alink2} to="shop">
                    Discover Now
                  </Link>
                </p>
              </div>
            </div>
            <div className={`card text-center  ${Homee.carrd}`}>
              <div className={Homee.cardImg}>
                <img src={section3} alt="" />
              </div>
              <div className="card-body">
                <span>8 Products</span>
                <h5>
                  <Link className={Homee.alink} to="shop">
                    Vintage leather bag
                  </Link>
                </h5>
                <p>
                  <Link className={Homee.alink2} to="shop">
                    Discover Now
                  </Link>
                </p>
              </div>
            </div>
            <div className={`card text-center  ${Homee.carrd}`}>
              <div className={Homee.cardImg}>
                <img src={section4} alt="" />
              </div>
              <div className="card-body">
                <span>8 Products</span>
                <h5>
                  <Link className={Homee.alink} to="shop">
                    Vintage leather bag
                  </Link>
                </h5>
                <p>
                  <Link className={Homee.alink2} to="shop">
                    Discover Now
                  </Link>
                </p>
              </div>
            </div>
            <div className={`card text-center  ${Homee.carrd}`}>
              <div className={Homee.cardImg}>
                <img src={section5} alt="" />
              </div>
              <div className="card-body">
                <span>8 Products</span>
                <h5>
                  <Link className={Homee.alink} to="shop">
                    Vintage leather bag
                  </Link>
                </h5>
                <p>
                  <Link className={Homee.alink2} to="shop">
                    Discover Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={` bg-light p-70 ${Homee.highlights}`}>
        <div className="container">
          <div className={`text-center mb-2 ${Homee.headText}`}>
            <span>EXPLORE THE LOOKBOOK</span>
            <h2>THIS WEEK'S HIGHLIGHTS</h2>
            <p>
              Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
              primis eget maecenas.
            </p>
          </div>
          <div className="row">
            {product.map((sProduct, ind) => (
              <div key={ind} className="col-lg-3">
                <div className={Homee.cardimg}>
                  <div className={Homee.overlay}>
                    <img src={sProduct.img_url2} alt="" />
                    <div className={Homee.icon}>
                      <button className={Homee.btn}>
                        <i className="fa-regular fa-heart"></i>
                      </button>
                      <button className={Homee.btn}>
                        <i className="fa-solid fa-layer-group"></i>
                      </button>
                      <button className={Homee.btn}>
                        <i className="fa-solid fa-eye"></i>
                      </button>
                    </div>
                    <div className={Homee.icon2}>
                      <button className={Homee.btn}>add to card</button>
                    </div>
                  </div>
                  <img src={sProduct.img_url} alt=".." />
                </div>
                <div className="card-body">
                  <h3>{sProduct.title}</h3>
                  <p className={Homee.star}>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    (No reviews)
                  </p>
                  <p className={Homee.sale}>${sProduct.price}.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <img src={section6} alt="" />
      </section>
      <section className={` bg-light p-70 ${Homee.highlights}`}>
        <div className="container">
          <div className={`text-center mb-2 ${Homee.headText}`}>
            <span>EXPLORE THE LOOKBOOK</span>
            <h2>TRENDING PRODUCTS</h2>
            <p>
              Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
              primis eget maecenas.
            </p>
          </div>
          <div className="row">
            {product1.map((sProduct, ind) => (
              <div key={ind} className="col-lg-3">
                <div className={Homee.cardimg}>
                  <div className={Homee.overlay}>
                    <img src={sProduct.img_url2} alt="" />
                    <div className={Homee.icon}>
                      <button className={Homee.btn}>
                        <i className="fa-regular fa-heart"></i>
                      </button>
                      <button className={Homee.btn}>
                        <i className="fa-solid fa-layer-group"></i>
                      </button>
                      <button className={Homee.btn}>
                        <i className="fa-solid fa-eye"></i>
                      </button>
                    </div>
                    <div className={Homee.icon2}>
                      <button className={Homee.btn}>add to card</button>
                    </div>
                  </div>
                  <img src={sProduct.img_url} alt=".." />
                </div>
                <div className="card-body">
                  <h3>{sProduct.title}</h3>
                  <p className={Homee.star}>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    (No reviews)
                  </p>
                  <p className={Homee.sale}>${sProduct.price}.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={`bg-light p-70 ${Homee.blog}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <img src={section7} alt="" />
                <div className={`card-body ${Homee.cardd}`}>
                  <button className={`btn btn-warning mb-3  ${Homee.btnn}`}>
                    Shopping
                  </button>
                  <h4>
                    Bringing LED lighting Into Your Home Shouldn't be
                    Complicated.
                  </h4>
                  <h6>
                    ALO Support <span>Aug, 04 2023</span>
                  </h6>
                  <p>
                    iPad Pro is the fastest device of its kind. It’s designed to
                    take full advantage of next‑level performance and custom...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <img src={section7} alt="" />
                <div className={`card-body ${Homee.cardd}`}>
                  <button className={`btn btn-warning mb-3  ${Homee.btnn}`}>
                    Shopping
                  </button>
                  <h4>
                    Bringing LED lighting Into Your Home Shouldn't be
                    Complicated.
                  </h4>
                  <h6>
                    ALO Support <span>Aug, 04 2023</span>
                  </h6>
                  <p>
                    iPad Pro is the fastest device of its kind. It’s designed to
                    take full advantage of next‑level performance and custom...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <img src={section7} alt="" />
                <div className={`card-body ${Homee.cardd}`}>
                  <button className={`btn btn-warning mb-3  ${Homee.btnn}`}>
                    Shopping
                  </button>
                  <h4>
                    Bringing LED lighting Into Your Home Shouldn't be
                    Complicated.
                  </h4>
                  <h6>
                    ALO Support <span>Aug, 04 2023</span>
                  </h6>
                  <p>
                    iPad Pro is the fastest device of its kind. It’s designed to
                    take full advantage of next‑level performance and custom...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${Homee.imagg} text-center `}>
        <div className="row g-0  ">
          <div className="col-lg-6">
            <div className={` ${Homee.leftImg}`}>
              <img src={section8} alt="" />
              <div className={Homee.imgText}>
                <h5>
                  IN STORES & ONLINE NOW CHRISTMAS SALE BARGAINS TO BE HAD!
                </h5>
                <Link>Discover Now</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={Homee.rightImg}>
              <img src={section9} alt="" />
              <div className={Homee.imgText}>
                <h5>S/S 21 LOOKBOOK PUIK YOUR STYLISH TRAVEL COMPANION</h5>
                <Link>Discover Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
