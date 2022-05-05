import styled from "styled-components";
import { PaystackButton } from "react-paystack";
import { Button } from "@chakra-ui/react";

export const CheckoutComponentContainer = styled.div`
  background-color: #fff;
  font-size: 1.4rem;
  height: 40rem;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;

  @media only screen and (max-width: 800px) {
    width: 90vw;
  }

  .payment-buttons {
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 400px) {
      flex-direction: column;
    }

    a:hover {
      text-decoration: none;
    }
  }
`;

export const CheckoutButton = styled(PaystackButton)`
  color: white;
  background-color: teal;
  padding: 0.8rem 2rem;
  width: 18vw;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 5rem;
  font-weight: 500;

  @media only screen and (max-width: 800px) {
    width: 30vw;
    padding: 1rem;
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 400px) {
    width: 65vw;
    margin-bottom: 1rem;
  }
`;

export const CryptoButton = styled(Button)`
  color: white !important;
  background-color: teal !important;
  border-radius: 0 !important;
  height: 5rem !important;
  padding: 0.8rem 2rem !important;
  width: 18vw !important;
  font-size: 1.4rem !important;

  @media only screen and (max-width: 800px) {
    width: 30vw !important;
    padding: 1rem !important;
    font-size: 1.2rem !important;
  }

  @media only screen and (max-width: 400px) {
    width: 65vw !important;
  }
`;
