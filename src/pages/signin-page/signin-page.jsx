import React from "react";
import images from "../../assets/images/images";
import SigninComponent from "../../components/signin-component/signin-component";

import {
  SigninPageContainer,
  SignInSection,
  SigninPageText,
  ImageContainer,
} from "./signin-page.styles";
const SigninPage = () => {
  return (
    <SigninPageContainer>
      <SignInSection>
          <ImageContainer>
            <img src={images.logo} />
          </ImageContainer>
          <SigninPageText>
            University of Computer Sciences
            <br />
            School Portal
          </SigninPageText>
      </SignInSection>
      <SigninComponent />
    </SigninPageContainer>
  );
};

export default SigninPage;
