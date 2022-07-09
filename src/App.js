import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Error } from "./components/Error";
import { Videos } from "./components/Videos";
import { Photography } from "./components/Photography";
import { Magazine } from "./components/Magazine";
import DrawerAppBar from "./components/DrawerAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export let theme = createTheme({
  palette: {
    primary: {
      main: "#bada55",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
  typography: {
    // fontFamily: "Comic Sans MS",
    fontFamily: "Work Sans",
  },
  components: {},
});

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <DrawerAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="photography" element={<Photography />} />
            <Route path="videos" element={<Videos />} />
            <Route path="magazine" element={<Magazine />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <footer>footer</footer>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export { App };
