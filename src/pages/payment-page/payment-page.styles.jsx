import styled from "styled-components";

export const PaymentContainer = styled.div`
  background-color: #f1f1f2;
  width: 90vw;
  height: 58rem;
  font-size: 2rem;
  color: teal;
  padding: 10rem;

  a:hover {
    text-decoration: none;
  }

  .payment-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 800px) {
    width: 82vw;
    padding: 5rem;
  }
  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 63rem;
  }
`;