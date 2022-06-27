import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <Container maxWidth="lg">
          <p style={{ margin: 0 }}>contact</p>
          <Link to="/">to home</Link>
        </Container>
      </section>
    );
  }
}

export { Contact };
