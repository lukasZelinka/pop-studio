import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { Slider } from "./Slider/Slider";

class Home extends React.Component {
  render() {
    return (
      <section id="home">
        <Container maxWidth="lg">
          <Slider />
        </Container>
      </section>
    );
  }
}

export { Home };
