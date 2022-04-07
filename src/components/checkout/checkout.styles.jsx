import styled from "styled-components";
import { PaystackButton } from "react-paystack";

export const CheckoutComponentContainer = styled.div`
  background-color: #fff;
  font-size: 1.4rem;
  height: 70vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;

  @media only screen and (max-width: 800px) {
      width: 90vw;
  }

`;

export const CheckoutButton = styled(PaystackButton)`
  color: white;
  background-color: teal;
  padding: 0.5rem 2rem;
  width: 10vw;
  justify-content: center;
  display: flex;

  @media only screen and (max-width: 800px) {
    width: 13vw;
    padding: 1rem;
  }
  @media only screen and (max-width: 400px) {
    width: 20vw;
  }
`;
