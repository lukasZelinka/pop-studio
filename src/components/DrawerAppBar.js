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
const navItems = ["about", "videos", "photography", "magazine", "contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2, color: "red" }}>
        <i className="fa-solid fa-2x fa-xmark"></i>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link key={item} to={`/${item}`}>
            <ListItem disablePadding>
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
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        backgroundColor: "red",
        height: "5em",
      }}
    >
      <AppBar
        component="nav"
        sx={{
          height: "5em",
          backgroundColor: "#FFF",
          boxShadow: 0,
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
                    marginLeft: "0.3em",
                  }}
                >
                  <i className="fa-solid fa-bars"></i>
                </div>
              </IconButton>
            </div>
            {/* FLEX BIG-SCREEN */}
            <div className="flexContainer2">
              {/* logo */}
              <div className="flex-nav-logo">
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    display: { xs: "none", md: "block" },
                    color: "black",
                  }}
                >
                  <a href="/">
                    <img
                      src="../logo192.png"
                      alt="pop studio logo"
                      width={"50px"}
                    />
                  </a>
                </Typography>
              </div>
              {/* ikony */}
              <div className="flex-nav-icons">
                <SocialIcons />
              </div>
              {/* linky */}
              <div className="flex-nav-links">
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                    marginTop: "1.2em",
                  }}
                >
                  {navItems.map((item) => (
                    <Link key={item} to={`/${item}`}>
                      <Button
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
              <a href="/">
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
