import React, { useEffect } from "react";
import initAOS from "../../Animation";

const Portfolio = () => {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div>
      <div className="container-fluid pt-5 pb-3" id="portfolio">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              Gallery
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              My Portfolio
            </h1>
          </div>

          <div className="row portfolio-container" data-aos="fade-up">
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div className="position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid rounded w-100"
                  src="img/portfolio-1.jpg"
                  alt=""
                />
                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                    <i
                      className="fa fa-plus text-white"
                      style={{ fontSize: "60px" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div className="position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid rounded w-100"
                  src="img/portfolio-2.jpg"
                  alt=""
                />
                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-2.jpg" data-lightbox="portfolio">
                    <i
                      className="fa fa-plus text-white"
                      style={{ fontSize: "60px" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
              <div className="position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid rounded w-100"
                  src="img/portfolio-3.jpg"
                  alt=""
                />
                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-3.jpg" data-lightbox="portfolio">
                    <i
                      className="fa fa-plus text-white"
                      style={{ fontSize: "60px" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div className="position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid rounded w-100"
                  src="img/portfolio-4.jpg"
                  alt=""
                />
                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-4.jpg" data-lightbox="portfolio">
                    <i
                      className="fa fa-plus text-white"
                      style={{ fontSize: "60px" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div className="position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid rounded w-100"
                  src="img/portfolio-5.jpg"
                  alt=""
                />
                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-5.jpg" data-lightbox="portfolio">
                    <i
                      className="fa fa-plus text-white"
                      style={{ fontSize: "60px" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
              <div className="position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid rounded w-100"
                  src="img/portfolio-6.jpg"
                  alt=""
                />
                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-6.jpg" data-lightbox="portfolio">
                    <i
                      className="fa fa-plus text-white"
                      style={{ fontSize: "60px" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
