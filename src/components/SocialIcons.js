import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

class SocialIcons extends React.Component {
  render() {
    return (
      <Box sx={{ width: "10vw", display: { xs: "none", md: "block" } }}>
        <div class="wrapper">
          <a href="https://www.facebook.com/popstudiopage">
            <i class="fa-brands fa-3x fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/viktorcicko/">
            <i class="fa-brands fa-3x fa-instagram-square"></i>
          </a>
          <a href="https://vimeo.com/popstudio">
            <i class="fa-brands fa-3x fa-vimeo-square"></i>
          </a>
        </div>
      </Box>
    );
  }
}

export { SocialIcons };
