import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

class Magazine extends React.Component {
  render() {
    return (
      <section id="home">
        <Container maxWidth="lg">
          <p style={{ margin: 0 }}>home</p>
          <Link to="/about">to about</Link>
        </Container>
      </section>
    );
  }
}

export { Magazine };
