import React from "react";
import { Link } from "react-router-dom";

class Error extends React.Component {
  render() {
    return (
      <div>
        <p>page not found</p>
        <Link to="/">back home</Link>
      </div>
    );
  }
}

export { Error };
