import React from "react";
import {
  FormControl,
  FormLabel,
  Link,
  Text,
  useMediaQuery,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.utils.js";
import { Formik, ErrorMessage } from "formik";
import { SignInContainer } from "./signin-component.styles.jsx";

const SigninComponent = ({ display }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [isLessThan400] = useMediaQuery("(max-width: 400px)");

  return (
    <SignInContainer display={display}>
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
          } else if (!values.password) {
            errors.password = "Password is required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            const { email, password } = values;

            try {
              await signInWithEmailAndPassword(auth, email, password);
              values.email = "";
              values.password = "";
            } catch (error) {
              console.log(error);
              alert(error);
            }

            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, handleSubmit, handleChange, isSubmitting }) => (
          <form
            onSubmit={handleSubmit}
           
            className="signin-form"
          >
            <FormControl isRequired>
              <FormLabel htmlFor="email" fontSize="2xl">
                Email address
              </FormLabel>
              <Input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                htmlSize={1}
                fontSize={isLessThan400 ? "1x1" : "2xl"}
              />
            </FormControl>
            <ErrorMessage name="email" component="div" />
            <FormControl mt={5} mb={5} isRequired>
              <FormLabel htmlFor="password" fontSize="2xl">
                Password
              </FormLabel>
              <InputGroup size="md">
                <Input
                  pr="13rem"
                  alue={values.password}
                  type={show ? "text" : "password"}
                  id="password"
                  onChange={handleChange}
                />
                <InputRightElement width="5rem">
                  <Button h="2.2rem" size="lg" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <ErrorMessage name="password" component="div" />
            
            <br />
            <Button
              type="submit"
              fontSize={isLessThan400 ? "1x1" : "2xl"}
              colorScheme="teal"
              p={7}
              mt={3}
              size="lg"
              disabled={isSubmitting}
            >
              SIGN IN
            </Button>
            <Text fontSize="2xl" mt={9} align="center">
              Don't have an account?
              <Link color="teal.500" href="/register">
                {" "}
                REGISTER HERE
              </Link>
            </Text>
          </form>
        )}
      </Formik>
    </SignInContainer>
  );
};

export default SigninComponent;
