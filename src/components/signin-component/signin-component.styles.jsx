import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 60vw;

  background-color: #f1f1f2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    width: 100vw;
    display: ${({ display }) => (display ? "flex" : "none")};

    height: 90vh;
  }

  @media only screen and (max-width: 700px) {
    width: 90vw;
    background: none;
  }

  .signin-form {
    @media only screen and (max-width: 1200px) {
      height: 50vh;
      line-height: 3rem;
    }

    @media only screen and (max-width: 700px) {
      padding: 0.1rem;
    }
  }
`;
