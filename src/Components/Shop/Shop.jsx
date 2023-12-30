import React from "react";
import { Link, Outlet } from "react-router-dom";
import Style from "./Shop.module.css";
import img from "./../../img/18.jpg";
import img2 from "./../../img/10.jpg";
import img3 from "./../../img/13.jpg";
import img4 from "./../../img/17.jpg";
import img5 from "./../../img/15_0c701408-156c-46db-b8e7-0e2d128e1352.jpg";
import img6 from "./../../img/9-1.jpg";
import "./../CardStyle.css";

export default function Shop() {
  return (
    <>
      <section className={`d-flex align-items-center ${Style.pro}`}>
        <div className="container">
          <div className={`text-center ${Style.proText}`}>
            <h1>Men's leather bag</h1>
            <div className={Style.link2}>
              <Link className={Style.link} to="/">
                Home /
              </Link>
              <span>Men's leather bag</span>
            </div>
          </div>
        </div>
      </section>
      <section className={Style.shop}>
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className={Style.product}>
                <h2>PRODUCT CATEGORIES</h2>
                <Link className={Style.switch} to="/shop/">
                  Kid leather bag (8)
                </Link>
                <Link className={Style.switch} to="men">
                  Men's leather bag (8)
                </Link>
                <Link className={Style.switch} to="modern">
                  Modern leather bag (2)
                </Link>
                <Link className={Style.switch} to="sporty">
                  Sporty backpack (2)
                </Link>
                <Link className={Style.switch} to="vintage">
                  Vintage leather bag (8)
                </Link>
              </div>
              <div className={Style.product}>
                <h2>FILTER BY</h2>
                <button className={Style.btn}>
                  <i className="fa-solid fa-trash-can"></i> remove all
                </button>
                <div className="accordion-item py-2">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <i className="fa-solid fa-minus pe-2"></i> AVAILABILITY
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body py-3">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          In Stock (8)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Out Of Stock (1)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Style.product}>
                <div className="accordion-item py-2">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne2"
                      aria-expanded="true"
                      aria-controls="collapseOne2"
                    >
                      <i className="fa-solid fa-minus pe-2"></i> PRICE
                    </button>
                  </h2>
                  <div
                    id="collapseOne2"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body py-3">
                      <label htmlFor="customRange1" className="form-label">
                        The highest price is{" "}
                        <span className={Style.dolar}>$830.00</span>
                      </label>
                      <input
                        type="range"
                        className="form-range"
                        id="customRange1"
                      ></input>
                      <span>$</span>
                      <input
                        type="number"
                        className={Style.formcontrol1}
                        name="number"
                        id="number"
                        placeholder="From"
                      />
                      <input
                        type="number"
                        className={Style.formcontrol1}
                        name="number"
                        id="number"
                        placeholder="830"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={Style.product}>
                <div className="accordion-item py-2">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne3"
                      aria-expanded="true"
                      aria-controls="collapseOne3"
                    >
                      <i className="fa-solid fa-minus pe-2"></i> COLOR
                    </button>
                  </h2>
                  <div
                    id="collapseOne3"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body py-3">
                      <button className={Style.bttn}>
                        <i className="fa-solid fa-circle"></i>
                      </button>
                      <button className={Style.bttn}>
                        <i className={`fa-solid fa-circle ${Style.icon}`}></i>
                      </button>
                      <button className={Style.bttn}>
                        <i className={`fa-solid fa-circle ${Style.icon2}`}></i>
                      </button>
                      <button className={Style.bttn}>
                        <i className={`fa-solid fa-circle ${Style.icon3}`}></i>
                      </button>
                      <button className={Style.bttn}>
                        <i className={`fa-solid fa-circle ${Style.icon4}`}></i>
                      </button>
                      <button className={Style.bttn}>
                        <i className={`fa-solid fa-circle ${Style.icon5}`}></i>
                      </button>
                      <button className={Style.bttn}>
                        <i className={`fa-solid fa-circle ${Style.icon6}`}></i>
                      </button>
                      <button className={Style.bttn}>
                        <i className={`fa-solid fa-circle ${Style.icon7}`}></i>
                      </button>
                      <button className={Style.bttn}>
                        <i className={`fa-solid fa-circle ${Style.icon8}`}></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Style.product}>
                <div className="accordion-item py-2">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne4"
                      aria-expanded="true"
                      aria-controls="collapseOne4"
                    >
                      <i className="fa-solid fa-minus pe-2"></i> TAGS
                    </button>
                  </h2>
                  <div
                    id="collapseOne4"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body py-3">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Accessories (2)
                        </label>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Clothing (1)
                        </label>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Kids (1)
                        </label>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Men's (6)
                        </label>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Women (1)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Style.product}>
                <div className="accordion-item py-2">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne5"
                      aria-expanded="true"
                      aria-controls="collapseOne5"
                    >
                      <i className="fa-solid fa-minus pe-2"></i> BRAND
                    </button>
                  </h2>
                  <div
                    id="collapseOne5"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body py-3">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Armania (2)
                        </label>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Armania (1)
                        </label>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Puik (3)
                        </label>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Uminex (2)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Style.product}>
                <div className="accordion-item py-2">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne6"
                      aria-expanded="true"
                      aria-controls="collapseOne6"
                    >
                      <i className="fa-solid fa-minus pe-2"></i> FEATURED
                      PRODUCT
                    </button>
                  </h2>
                  <div
                    id="collapseOne6"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body py-3">
                      <div className="product d-flex flex-column">
                        <div className={Style.product2}>
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img src={img} alt="..." />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h4>Logitech G203 Wired 8000 DPI For PC/Mac</h4>
                              <p>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                (No reviews)
                              </p>
                              <p>$69.00</p>
                            </div>
                          </div>
                        </div>
                        <div className={Style.product2}>
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img src={img2} alt="..." />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h4>Logitech G203 Wired 8000 DPI For PC/Mac</h4>
                              <p>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                (No reviews)
                              </p>
                              <p>$69.00</p>
                            </div>
                          </div>
                        </div>
                        <div className={Style.product2}>
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img src={img3} alt="..." />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h4>Logitech G203 Wired 8000 DPI For PC/Mac</h4>
                              <p>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                (No reviews)
                              </p>
                              <p>$69.00</p>
                            </div>
                          </div>
                        </div>
                        <div className={Style.product2}>
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img src={img4} alt="..." />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h4>Logitech G203 Wired 8000 DPI For PC/Mac</h4>
                              <p>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                (No reviews)
                              </p>
                              <p>$69.00</p>
                            </div>
                          </div>
                        </div>
                        <div className={Style.product2}>
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img src={img5} alt="..." />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h4>Logitech G203 Wired 8000 DPI For PC/Mac</h4>
                              <p>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                (No reviews)
                              </p>
                              <p>$69.00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Style.product}>
                <div className={Style.imgShop}>
                  <div className={Style.over}>
                    <Link to="shop" className={Style.switch}>
                      Shop Now
                    </Link>
                  </div>
                  <img src={img6} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-9">
              <div className={Style.filter}>
                <button className="btn">
                  <i className="fa-solid fa-bars"></i>
                </button>
                <button className="btn">
                  <i className="fa-solid fa-braille"></i>
                </button>
                <button className="btn">
                  <i className="fa-solid fa-list-ul"></i>
                </button>
              </div>
              <div className={Style.cards}>
                <div className="row" id="row">
                  <Outlet></Outlet>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
