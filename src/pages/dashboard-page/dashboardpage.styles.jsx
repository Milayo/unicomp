import styled from "styled-components";

export const DashboardContainer = styled.div`
  background-color: #f1f1f2;
  width: 90vw;
  height: 89vh;

  @media only screen and (max-width: 800px) {
    width: 80vw;
  }
  @media only screen and (max-width: 600px) {
    width: 95vw;
    margin: 0 1.5rem;
  }
`;