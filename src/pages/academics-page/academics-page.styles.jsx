import styled from "styled-components";

export const AcademicsPageContainer = styled.div`
  background-color: #f1f1f2;
  width: 90vw;
  height: 58rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    width: 82vw;
  }
  @media only screen and (max-width: 600px) {
    width: 100vw;
    align-items: flex-start;
    padding: 5rem 0;
    height: 50rem;
  }

  @media only screen and (max-width: 400px) {
  }
`;
