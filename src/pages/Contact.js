import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "@mui/material";

class Contact extends React.Component {
  render() {
    return (
      <section id="about">
        <Container maxWidth="lg">
          <p style={{ margin: 0 }}>contact section</p>
          <Link to="/">to home</Link>
        </Container>
      </section>
    );
  }
}

export { Contact };
