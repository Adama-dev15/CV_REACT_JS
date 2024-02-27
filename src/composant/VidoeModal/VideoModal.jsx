import React from "react";

const VideoModal = ({ videoSrc }) => {
  return (
    <div
      className="modal fade"
      id="videoModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <div className="embed-responsive embed-responsive-16by9">
              {/* Utilisation de la source vidéo passée en tant que prop */}
              <iframe
                className="embed-responsive-item"
                src={`${videoSrc}?autoplay=1&amp;modestbranding=1&amp;showinfo=0`}
                id="video"
                allowScriptAccess="always"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
