import styled from "styled-components";

export const DashboardContainer = styled.div`
  background-color: #f1f1f2;
  padding: 6rem 3.5rem;
  width: 90vw;
  height: 92vh;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    width: 82vw;
    flex-direction: column;
    padding: 3rem;
  }
  @media only screen and (max-width: 600px) {
    width: 95vw;
    margin: 0 .8rem;
    padding: 1rem .5rem;
  }

  @media only screen and (max-width: 400px) {
    width: 100vw;
    margin: 0;
    padding: 1rem;
  }
`;