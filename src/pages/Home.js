import React from "react";
// import { Link } from "react-router-dom";
import { Container } from "@mui/material";

class Home extends React.Component {
  render() {
    return (
      <section id="home">
        <Container maxWidth="lg">
          <section className="videoSection">
            {/* <video muted autoPlay loop>
              <source src="danielka.mp4" type="video/mp4" />
            </video> */}
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/760313223?h=508d87db54"
              width="100%"
              height="100%"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </section>
        </Container>
      </section>
    );
  }
}

export { Home };
