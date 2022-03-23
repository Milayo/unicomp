import styled from "styled-components";

export const SignInSection = styled.div`
  width: 40vw;
  height: 90vh;
  background-color: #003b46;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15rem;

  @media only screen and (max-width: 1200px) {
    width: 100vw;
    padding: 1.5rem;
    display: ${({ display }) => (display ? "none" : "flex")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

 

  .signin-btn {
    visibility: hidden;

    @media only screen and (max-width: 1200px) {
      visibility: visible;
      display: ${({ display }) => (display ? "none" : "flex")};
    }
  }
`;

export const SigninPageContainer = styled.div`
  margin: 3rem 5rem 3rem 5rem;
  display: flex;
@media only screen and (max-width: 700px) {
  margin: 0;
}

`;

export const SigninPageText = styled.h4`
  @import url("${(props) => props.theme.font.fontSource}");

  font-size: 2.5rem;
  color: white;
  font-family: ${(props) => props.theme.font.fontFamily2};

  @media only screen and (max-width: 1200px) {
    font-size: 4.5rem;
  }

  @media only screen and (max-width: 500px) {
    font-size: 3rem;
  }
`;

export const ImageContainer = styled.div`
  margin-bottom: 2rem;
  .signin-logo {
    height: 12rem;
    fill: white;
    
    @media only screen and (max-width: 500px) {
      height: 10rem;
    }
  }
`;
