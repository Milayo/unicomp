import React from 'react';
import {
  FormControl,
  FormLabel,
  Link,
  Text,
  FormHelperText,
  InputGroup,
  Input,
  InputRightElement,
  Button
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SignInContainer } from './signin-component.styles.jsx';

const SigninComponent = () => {
   const [show, setShow] = React.useState(false);
   const handleClick = () => setShow(!show);
  return (
    <SignInContainer>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required.";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form
            style={{
              backgroundColor: "#fff",
              padding: "5rem",
              borderRadius: "2rem",
              
            }}
          >
            <FormControl isRequired>
              <FormLabel htmlFor="email" fontSize="3xl">
                Email address
              </FormLabel>
              <Input id="email" type="email" size="lg" fontSize="2xl" />
            </FormControl>
            <ErrorMessage name="email" component="div" />
            <FormControl mt={5} mb={5} isRequired>
              <FormLabel htmlFor="password" size="lg" fontSize="2xl">
                Password
              </FormLabel>
              <InputGroup size="md">
                <Input pr="13rem" type={show ? "text" : "password"} size="lg" />
                <InputRightElement width="4.5rem" mt={1}>
                  <Button h="2.1rem" size="lg" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <ErrorMessage name="password" component="div" />
            <Link color="teal.500" href="#" fontSize="2xl">
              Forgot password?
            </Link>
            <br />
            <Button
              type="submit"
              fontSize="2xl"
              colorScheme="teal"
              mt={7}
              size="lg"
              disabled={isSubmitting}
            >
              SIGN IN
            </Button>
            <Button
              colorScheme="teal"
              fontSize="2xl"
              p={4}
              mt={7}
              ml="15rem"
              size="lg"
              disabled={isSubmitting}
            >
              SIGN IN WITH GOOGLE
            </Button>
            <Text fontSize="2xl" mt={9} align="center">
              Don't have an account?
              <Link color="teal.500" href="#">
                {" "}
                Register here.
              </Link>
            </Text>
          </Form>
        )}
      </Formik>
    </SignInContainer>
  );
}

export default SigninComponent;

