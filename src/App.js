import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { ThemeProvider } from "styled-components";


import { GlobalStyles } from "./Globalstyles";

import "./App.css";
import theme from "./theme";
import SigninPage from "./pages/signin-page/signin-page";
import SignupPage from "./pages/signup-page/signup-page";
import DashboardPage from "./pages/dashboard-page/dashboardpage";
import AcademicsPage from "./pages/academics-page/academics-page";
import CourseRegPage from "./pages/coursereg/coursereg-page";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="register" element={<SignupPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="academics" element={<AcademicsPage />} />
          <Route path="registration" element={<CourseRegPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
