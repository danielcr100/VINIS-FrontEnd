import React from "react";

class Video extends React.Component {
  render() {
    return (
      <div className="video">
        <div className="container w-75 bgcol-poppy mt-4">
          <div
            className=""
            style={{ padding: "56.25% 0 0 0", position: "relative" }}
          >
            {/* <iframe
              src="https://player.vimeo.com/video/174578293?autoplay=1&color=ff9933"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe> */}
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
    );
  }
}
export default Video;
