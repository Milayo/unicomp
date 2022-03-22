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
`;

export const SigninPageContainer = styled.div`
  margin: 3rem 5rem 3rem 5rem;
  display: flex;
`;

export const SigninPageText = styled.h4`
  @import url("${(props) => props.theme.font.fontSource}");

  font-size: 2.5rem;
  color: white;
  font-family: ${(props) => props.theme.font.fontFamily2};
`;

export const ImageContainer = styled.div`
  margin-bottom: 2rem;
  img {
    height: 12rem;
  }
`;
