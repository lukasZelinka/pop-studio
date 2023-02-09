import React from "react";
import "./Slider.css";

function Slider() {
  const slider = React.useRef();

  // function videoUrl(xSource) {
  //   slider.current.src = xSource;
  // }

  return (
    <section className="slider">
      <video muted autoPlay loop id="slider" ref={slider}>
        <source src="video1.mp4" type="video/mp4" />
      </video>
      {/* <ul className="navigation">
        <li onClick={() => videoUrl("video1.mp4")}>
          <img src="thumb1.png" alt="sth" />
        </li>
        <li onClick={() => videoUrl("video2.mp4")}>
          <img src="thumb1.png" alt="sth" />
        </li>
        <li onClick={() => videoUrl("video3.mp4")}>
          <img src="thumb1.png" alt="sth" />
        </li>
        <li onClick={() => videoUrl("video4.mp4")}>
          <img src="thumb1.png" alt="sth" />
        </li>
      </ul> */}
    </section>
  );
}

export { Slider };
