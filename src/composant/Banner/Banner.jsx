import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import $ from "jquery";
import VideoModal from "../VidoeModal/VideoModal";
//import VideoModal from "./VideoModal"; // Import du composant VideoModal

const Banner = () => {
  useEffect(() => {
    if ($(".typed-text-output").length === 1) {
      var typed_strings = $(".typed-text").text();
      var typed = new Typed(".typed-text-output", {
        strings: typed_strings.split(", "),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
      });
    }
  }, []);

  const [videoSrc, setVideoSrc] = useState(""); // State pour stocker la source vidéo

  // Fonction pour définir la source vidéo lorsqu'un bouton est cliqué
  const handleVideoButtonClick = (src) => {
    setVideoSrc(src);
  };

  return (
    <div>
      <div
        className="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
        id="home"
        style={{ minHeight: "100vh" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
              <img
                className="img-fluid w-100 rounded-circle shadow-sm"
                src="img/profile.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-7 text-center text-lg-left">
              <h3 className="text-white font-weight-normal mb-3">I'm</h3>
              <h1
                className="display-3 text-uppercase text-primary mb-2"
                style={{ WebkitTextStroke: "2px #ffffff" }}
              >
                Kate Winslet
              </h1>
              <h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>
              <div className="typed-text d-none">
                Web Designer, Web Developer, Front End Developer, Apps Designer,
                Apps Developer
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                {/* Bouton pour déclencher l'ouverture du modal vidéo */}
                <button
                  type="button"
                  className="btn-play"
                  data-toggle="modal"
                  data-target="#videoModal"
                  onClick={() =>
                    handleVideoButtonClick(
                      "https://www.youtube.com/embed/DWRcNpR6Kdc"
                    )
                  }
                >
                  <span></span>
                </button>
                <h5 className="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">
                  Play Video
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intégration du composant VideoModal */}
      <VideoModal videoSrc={videoSrc} />
    </div>
  );
};

export default Banner;
