import React from 'react';
import CheckoutComponent from '../../components/checkout/checkout.jsx';
import { CheckoutPageContainer } from "./checkout-page.styles.jsx";

const CheckoutPage = () => {
  return (
      <CheckoutPageContainer>
      <CheckoutComponent/>  
    </CheckoutPageContainer>
  )
}

export default CheckoutPage;