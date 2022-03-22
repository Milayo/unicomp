import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { ThemeProvider } from "styled-components";


import { GlobalStyles } from "./Globalstyles";

import "./App.css";
import theme from "./theme";
import SigninPage from "./pages/signin-page/signin-page";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<SigninPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
