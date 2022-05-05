import styled from "styled-components";

export const CoursePageContainer = styled.div`
  background-color: #f1f1f2;

  width: 90vw;
  height: 58rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    padding-top: 3rem;
  }

  @media only screen and (max-width: 800px) {
    width: 82vw;
    align-items: flex-start;
  }

  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 63rem;
    padding: 1.2rem;
  }
`;
