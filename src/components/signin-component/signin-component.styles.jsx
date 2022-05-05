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

    height: 50rem;
  }

  @media only screen and (max-width: 800px) {
    background: none;
  }

  .signin-form {
    background-color: #fff;
    padding: 4rem;
    width: 40vw;
    height: 35rem;
    border-radius: 2rem;

    @media only screen and (max-width: 1200px) {
      height: 40rem;
      width: 70vw;
    }

    @media only screen and (max-width: 800px) {
      width: 90vw;
      
    }
  }
`;
