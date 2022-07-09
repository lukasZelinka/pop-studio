import React from "react";
import Box from "@mui/material/Box";

class SocialIcons extends React.Component {
  render() {
    return (
      <Box sx={{ width: "10vw", display: { xs: "none", md: "block" } }}>
        <div class="wrapper">
          <i class="fa-brands fa-3x fa-facebook-square"></i>
          <i class="fa-brands fa-3x fa-instagram-square"></i>
          <i class="fa-brands fa-3x fa-vimeo-square"></i>
        </div>
      </Box>
    );
  }
}

export { SocialIcons };
