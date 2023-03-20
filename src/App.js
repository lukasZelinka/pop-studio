import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Error } from "./pages/Error";
import { Videos } from "./pages/Videos";
import { Photography } from "./pages/Photography";
import { Magazine } from "./pages/Magazine";
import { Contact } from "./pages/Contact";
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
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <footer>viktor cicko ,2023</footer>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export { App };
