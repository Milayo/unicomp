import styled from "styled-components";

export const AcademicsPageContainer = styled.div`
  background-color: #f1f1f2;
  padding: 6rem 3.5rem;
  width: 90vw;
  height: 92vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 800px) {
    width: 82vw;
  }
  @media only screen and (max-width: 600px) {
    width: 95vw;
    height: 110vh;
  }

  @media only screen and (max-width: 400px) {
    width: 100vw;
  }
`;
