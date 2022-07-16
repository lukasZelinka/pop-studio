import React from "react";
import "./Slider.css";

class Slider extends React.Component {
  videoUrl(xSource) {
    document.getElementById("slider").src = xSource;
  }

  render() {
    return (
      <section className="slider">
        <video muted autoPlay loop id="slider">
          <source src="video1.mp4" type="video/mp4" />
        </video>
        <ul className="navigation">
          <li onClick={() => this.videoUrl("video1.mp4")}>
            <img src="thumb1.png" alt="sth" />
          </li>
          <li onClick={() => this.videoUrl("video2.mp4")}>
            <img src="thumb1.png" alt="sth" />
          </li>
          <li onClick={() => this.videoUrl("video3.mp4")}>
            <img src="thumb1.png" alt="sth" />
          </li>
          <li onClick={() => this.videoUrl("video4.mp4")}>
            <img src="thumb1.png" alt="sth" />
          </li>
        </ul>
      </section>
    );
  }
}

export { Slider };
