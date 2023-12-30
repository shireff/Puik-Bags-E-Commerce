import React from "react";
import { Link } from "react-router-dom";
import Style from "./About.module.css"
import section1 from "../../img/img_about.webp";
import section2 from "../../img/vector.svg";
import team1 from "../../img/399735539_6848131081935596_1754944559535312665_n.jpg";
import team2 from "../../img/photo_2023-12-29_22-29-10.jpg";
import team3 from "../../img/145132.jpg";
import team4 from "../../img/photo_2023-12-29_22-21-25.jpg";
export default function About() {
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
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className={`p-70 ${Style.storee}`}>
        <div className="container">
          <div
            className={`text-center justify-content-center row mb-2 ${Style.headText}`}
          >
            <span>WELCOME TO UMINEX</span>
            <h2>OUR PERFECT STORE</h2>
            <p className="w-50 ">
              Over 20 years of experience, we have crafted thousands of
              strategic discovery process that enables us to peel back the
              layers which enable us to understand, connect.
            </p>
          </div>
          <div className={Style.storeeImg}>
            <img src={section1} alt="" />
          </div>
          <div className="row mt-5 ">
            <div className="col-lg-3 text-center ">
              <h3>21K</h3>
              <h5>Products For Sale</h5>
              <p>
                className aptent taciti sociosqu litora torquent per conubia.
              </p>
            </div>{" "}
            <div className="col-lg-3 text-center ">
              <h3>21K</h3>
              <h5>Products For Sale</h5>
              <p>
                className aptent taciti sociosqu litora torquent per conubia.
              </p>
            </div>{" "}
            <div className="col-lg-3 text-center ">
              <h3>21K</h3>
              <h5>Products For Sale</h5>
              <p>
                className aptent taciti sociosqu litora torquent per conubia.
              </p>
            </div>{" "}
            <div className="col-lg-3 text-center ">
              <h3>21K</h3>
              <h5>Products For Sale</h5>
              <p>
                className aptent taciti sociosqu litora torquent per conubia.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`p-50 ${Style.choose}`}>
        <div className="container">
          <div
            className={`text-center justify-content-center row mb-2 ${Style.headText}`}
          >
            <span>WHY CHOOSE US</span>
            <h2>OVER 20 YEARS OF EXPERIENCE</h2>
            <p className="w-50 ">
              className aptent taciti sociosqu ad litora torquent per conubia
              nostra per inceptos vel pretium lectus qua. Nunc id cursus metus
              ididunt ut labore metus episcing.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <img src={section2} alt="" />
              <div className="card-body">
                <h4>1. PERFECT SPACE</h4>
                <p>
                  className aptent taciti sociosqu ad litora torquent per
                  conubia nostra per inceptos vel pretium lectus qua. Nunc id
                  cursus metus ididunt ut labore metus episcing.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <img src={section2} alt="" />
              <div className="card-body">
                <h4>2. SPECIAL PERSON</h4>
                <p>
                  className aptent taciti sociosqu ad litora torquent per
                  conubia nostra per inceptos vel pretium lectus qua. Nunc id
                  cursus metus ididunt ut labore metus episcing.
                </p>
              </div>
            </div>{" "}
            <div className="col-lg-4">
              <img src={section2} alt="" />
              <div className="card-body">
                <h4>3. MODERN OFFICE</h4>
                <p>
                  className aptent taciti sociosqu ad litora torquent per
                  conubia nostra per inceptos vel pretium lectus qua. Nunc id
                  cursus metus ididunt ut labore metus episcing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`p-50 ${Style.colu}`}>
        <div className="container">
          <div
            className={`text-center justify-content-center row mb-2 ${Style.headText}`}
          >
            <span>WELCOME TO UMINEX</span>
            <h2>OUR PERFECT STORE</h2>
            <p className="w-50 ">
              Over 20 years of experience, we have crafted thousands of
              strategic discovery process that enables us to peel back the
              layers which enable us to understand, connect.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Accordion Item #1
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classNamees that we use to style each element.
                      These classNamees control the overall appearance, as well
                      as the showing and hiding via CSS transitions. You can
                      modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Accordion Item #1
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classNamees that we use to style each element.
                      These classNamees control the overall appearance, as well
                      as the showing and hiding via CSS transitions. You can
                      modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`p-50 ${Style.team}`}>
        <div className="container">
          <div
            className={`text-center justify-content-center row mb-2 ${Style.headText}`}
          >
            <span>OUR PERFECT TEAM </span>
            <h2>AMAZING PEOPLE</h2>
            <p className="w-50 ">
              Over 20 years of experience, we have crafted thousands of
              strategic discovery process that enables us to peel back the
              layers which enable us to understand, connect.
            </p>
          </div>
          <div className="row justify-content-center ">
            <div className="col-lg-3">
              <div className="card">
                <img src={team3} className="card-img-top" alt="..." />
                <div className="card-body text-center ">
                  <h5 className="card-title">Mohamed Barakat</h5>
                  <h6 className="card-text">Front End Instractor</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center   ">
            <div className="col-lg-4 ">
              <div className="card">
                <img src={team4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Shreif Nady</h5>
                  <h6 className="card-text">Front-End Developer</h6>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-4">
              <div className="card">
                <img src={team1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Amr Saleh</h5>
                  <h6 className="card-text">Front-End Developer</h6>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-4">
              <div className="card">
                <img src={team2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Yahya Farid</h5>
                  <h6 className="card-text">Front-End Developer</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
