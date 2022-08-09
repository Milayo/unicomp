import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 100vw;
  background-color: #f1f1f2;
  height: 65rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media only screen and (max-width: 800px) {
    background: none;
  }

  .signup-form {
    background-color: #fff;
    padding: 2rem;
    border-radius: 2rem;
    width: 50vw;
    height: 55rem;

    @media only screen and (max-width: 800px) {
      width: 80vw;
      height: 55rem;
    }
  }
`;
