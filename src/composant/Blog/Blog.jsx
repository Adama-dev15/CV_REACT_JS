import React, { useEffect } from "react";
import initAOS from "../../Animation";

const Blog = () => {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div>
      <div className="container-fluid pt-5" id="blog" data-aos="fade-up">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              Blog
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              Latest Blog
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-5">
              <div className="position-relative mb-4">
                <img
                  className="img-fluid rounded w-100"
                  src="img/blog-1.jpg"
                  alt=""
                />
                <div className="blog-date">
                  <h4 className="font-weight-bold mb-n1">01</h4>
                  <small className="text-white text-uppercase">Jan</small>
                </div>
              </div>
              <h5 className="font-weight-medium mb-4">
                Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum
              </h5>
              <a className="btn btn-sm btn-outline-primary py-2" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="position-relative mb-4">
                <img
                  className="img-fluid rounded w-100"
                  src="img/blog-2.jpg"
                  alt=""
                />
                <div className="blog-date">
                  <h4 className="font-weight-bold mb-n1">01</h4>
                  <small className="text-white text-uppercase">Jan</small>
                </div>
              </div>
              <h5 className="font-weight-medium mb-4">
                Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum
              </h5>
              <a className="btn btn-sm btn-outline-primary py-2" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="position-relative mb-4">
                <img
                  className="img-fluid rounded w-100"
                  src="img/blog-3.jpg"
                  alt=""
                />
                <div className="blog-date">
                  <h4 className="font-weight-bold mb-n1">01</h4>
                  <small className="text-white text-uppercase">Jan</small>
                </div>
              </div>
              <h5 className="font-weight-medium mb-4">
                Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum
              </h5>
              <a className="btn btn-sm btn-outline-primary py-2" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
