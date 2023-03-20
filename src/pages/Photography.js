import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

class Photography extends React.Component {
  render() {
    return (
      <section id="photography">
        <Container maxWidth="lg">
          <p style={{ margin: 0 }}>photography</p>
          <Link to="/">to home</Link>
        </Container>
      </section>
    );
  }
}

export { Photography };
