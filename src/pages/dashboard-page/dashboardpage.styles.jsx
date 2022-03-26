import styled from "styled-components";

export const DashboardContainer = styled.div`
  background-color: #f1f1f2;
  padding: 5rem;
  width: 90vw;
  height: 92vh;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    width: 80vw;
    flex-direction: column;
  }
  @media only screen and (max-width: 600px) {
    width: 95vw;
    margin: 0 1.5rem;
  }
`;