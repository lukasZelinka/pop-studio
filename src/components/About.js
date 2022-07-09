import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "@mui/material";

class About extends React.Component {
  render() {
    return (
      <section id="about">
        <Container maxWidth="lg">
          <p style={{ margin: 0 }}>about</p>
          <Link to="/photography">to photography</Link>
        </Container>
      </section>
    );
  }
}

export { About };
