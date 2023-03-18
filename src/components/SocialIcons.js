import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

class SocialIcons extends React.Component {
  render() {
    return (
      <Box sx={{ width: "10vw", display: { xs: "none", md: "block" } }}>
        <div className="wrapper">
          <a href="https://www.instagram.com/pop.studio/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://vimeo.com/popstudio">
            <i class="fa-brands fa-vimeo-v"></i>
          </a>
          <a href="https://www.facebook.com/popstudiopage">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
        </div>
      </Box>
    );
  }
}

export { SocialIcons };
