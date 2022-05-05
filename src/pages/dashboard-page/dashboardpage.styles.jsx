import styled from "styled-components";

export const DashboardContainer = styled.div`
  background-color: #f1f1f2;
  padding: 6rem 3.5rem;
  width: 90vw;
  height: 58rem;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    width: 87vw;
    padding: 5rem 2rem;
  }

  @media only screen and (max-width: 800px) {
    width: 82vw;
    flex-direction: column;
    padding: 3rem;
  }
  @media only screen and (max-width: 600px) {
    width: 100vw;
    padding: 2rem;
    height: 63rem;
    justify-content: space-around;
  }

  @media only screen and (max-width: 400px) {
    margin: 0;
    padding: 1rem;
  }
`;