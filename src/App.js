import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useMoralis } from "react-moralis";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Globalstyles";

import "./App.css";
import theme from "./theme";
import { onAuthStateChanged } from "firebase/auth";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase.utils.js";
import SigninPage from "./pages/signin-page/signin-page";
import SignupPage from "./pages/signup-page/signup-page";
import DashboardPage from "./pages/dashboard-page/dashboardpage";
import AcademicsPage from "./pages/academics-page/academics-page";
import CourseRegPage from "./pages/coursereg/coursereg-page";
import PaymentPage from "./pages/payment-page/payment-page";
import CheckoutPage from "./pages/checkout-page/checkout-page";
import MetamaskPayment from "./components/metamask-payment/metamaskpayment";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const { isAuthenticated, user } = useMoralis();

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
      console.log(currentUser);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Routes>
          <Route
            path="/"
            element={
              currentUser ? (
                <Navigate replace to="/dashboard" />
              ) : (
                <SigninPage />
              )
            }
          />

          <Route
            path="register"
            element={
              currentUser ? (
                <Navigate replace to="/dashboard" />
              ) : (
                <SignupPage />
              )
            }
          />
          <Route path="dashboard" element={<DashboardPage currentUser={currentUser}/>} />
          <Route path="academics" element={<AcademicsPage />} />
          <Route path="registration" element={<CourseRegPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="payment/checkout" element={<CheckoutPage />} />
          <Route
            path="/cryptopayment"
            element={
              <MetamaskPayment user={user} isAuthenticated={isAuthenticated} />
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
