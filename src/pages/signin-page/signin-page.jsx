import { Button, useBoolean } from "@chakra-ui/react";
import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo_school.svg";
import images from "../../assets/images/images";
import SigninComponent from "../../components/signin-component/signin-component";

import {
  SigninPageContainer,
  SignInSection,
  SigninPageText,
  ImageContainer,
} from "./signin-page.styles";
const SigninPage = () => {
  const [display, setDisplay] = useState(false); 
  return (
    <SigninPageContainer>
      <SignInSection display={display}>
        <ImageContainer>
          <Logo className="signin-logo"/>
        </ImageContainer>
        <SigninPageText>
          University of Computer Sciences
          <br />
          School Portal
        </SigninPageText>
        <Button
          colorScheme="teal"
          className="signin-btn"
          onClick={() => setDisplay(true)}
          fontSize="5xl"
          p={12}
          mt={7}
          size="lg"
        >
          SIGN IN
        </Button>
      </SignInSection>
      <SigninComponent display={display} />
    </SigninPageContainer>
  );
};

export default SigninPage;
