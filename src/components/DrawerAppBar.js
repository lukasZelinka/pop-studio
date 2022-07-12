import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { SocialIcons } from "./SocialIcons";
import { theme } from "../App";

// const drawerWidth = 240;
const drawerWidth = "100%";
const navItems = ["home", "about", "videos", "photography", "magazine"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2, color: "red" }}>
        <i class="fa-solid fa-2x fa-xmark"></i>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link to={item === "home" ? "/" : `/${item}`}>
            <ListItem key={item} disablePadding>
              <ListItemButton
                sx={[
                  {
                    color: "#000",
                    textTransform: "uppercase",
                    marginTop: "1em",
                    textAlign: "center",
                    fontWeight: "400",
                    borderRadius: 0,
                    transition: theme.transitions.create(["all", "transform"], {
                      duration: 1000,
                      easing: theme.transitions.easing.sharp,
                    }),
                  },
                  {
                    "&:hover": {
                      color: "#fff",
                      backgroundColor: "#000",
                    },
                  },
                ]}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Box sx={{ marginTop: "2em" }}>
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
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    // <Box sx={{ display: "flex", backgroundColor: "red", height: "5em" }}>
    <Box
      sx={{
        backgroundColor: "red",
        height: "5em",
        // display: "flex",
      }}
    >
      <AppBar
        component="nav"
        sx={{
          height: "5em",
          backgroundColor: "#FFF",
          // backgroundColor: "blue",
          boxShadow: 0,
          borderBottom: 1,
          borderColor: "#bdbdbd",
        }}
      >
        <Container
          maxWidth="lg"
          sx={
            {
              // backgroundColor: "green",
              // marginTop: "0.5em",
            }
          }
        >
          <Toolbar disableGutters>
            <div className="flexContainer">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" }, color: "black" }}
              >
                <div
                  style={{
                    height: "10vh",
                    marginTop: "0.4em",
                    marginLeft: "0.3em",
                  }}
                >
                  <i class="fa-solid fa-bars"></i>
                </div>
              </IconButton>
            </div>
            {/* FLEX BIG-SCREEN */}
            <div className="flexContainer2">
              {/* logo */}
              <div className="nav-center">
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    display: { xs: "none", md: "block" },
                    color: "black",
                    // backgroundColor: "orange",
                    // height: "0px",
                  }}
                >
                  <a href="#home">
                    {/* <div className="k"> */}
                    <img
                      src="../logo192.png"
                      alt="pop studio logo"
                      width={"50px"}
                      // style={"background-color: red"}
                    />
                    {/* </div> */}
                  </a>
                </Typography>
              </div>
              {/* ikony */}
              <div className="nav-center">
                <SocialIcons />
              </div>
              {/* linky */}
              <div className="nav-center main-nav-links">
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                    marginTop: "1.2em",
                  }}
                >
                  {navItems.map((item) => (
                    <Link to={item === "home" ? "/" : `/${item}`}>
                      <Button
                        key={item}
                        sx={[
                          {
                            color: "#000",
                            marginLeft: "1.2em",
                            padding: 0.1,
                            fontWeight: "400",
                            borderRadius: 0,
                            transition: theme.transitions.create(
                              ["all", "transform"],
                              {
                                duration: 1000,
                                easing: theme.transitions.easing.sharp,
                              }
                            ),
                          },
                          {
                            "&:hover": {
                              color: "#fff",
                              backgroundColor: "#000",
                            },
                          },
                        ]}
                      >
                        {item}
                      </Button>
                    </Link>
                  ))}
                </Box>
              </div>
            </div>
            <p className="logoSmallerScreen ">
              {" "}
              <a href="#home">
                <img
                  src="../logo192.png"
                  alt="pop studio logo"
                  width={"50px"}
                />
              </a>
            </p>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
