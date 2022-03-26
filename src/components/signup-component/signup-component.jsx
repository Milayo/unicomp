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
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignUpContainer } from "./signup.styles";

const SignupComponent = ({ display }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [isLessThan400] = useMediaQuery("(max-width: 400px)");
  return (
    <SignUpContainer>
      <Formik
        initialValues={{ email: "", password: "", name: "", matricno: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Username is Required";
          } else if (!values.lastName) {
            errors.lastName = "Required";
          } else if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          } else if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 6) {
            errors.password = "Password should exceed 6 characters";
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
        {({ values, handleChange, isSubmitting }) => (
          <Form
            style={{
              backgroundColor: "#fff",
              padding: "5rem",
              borderRadius: "2rem",
            }}
            className="signup-form"
          >
            <FormControl isRequired>
              <FormLabel htmlFor="email" fontSize="3xl">
                Email address
              </FormLabel>
              <Input
                id="email"
                type="email"
                size="lg"
                fontSize="2xl"
                onChange={handleChange}
                value={values.email}
              />
            </FormControl>
            <ErrorMessage name="email" component="div" />
            <FormControl mt={5} mb={5} isRequired>
              <FormLabel htmlFor="matricno" fontSize="3xl">
                Matric Number
              </FormLabel>
              <Input
                id="matricno"
                type="alphanumeric"
                size="lg"
                fontSize="2xl"
                onChange={handleChange}
                value={values.matricno}
              />
            </FormControl>
            <ErrorMessage name="matricno" component="div" />
            <FormControl mt={5} mb={5} isRequired>
              <FormLabel htmlFor="name" fontSize="3xl">
                Name
              </FormLabel>
              <Input
                id="name"
                type="text"
                htmlSize={50}
                width="auto"
                fontSize="2xl"
                onChange={handleChange}
                value={values.name}
              />
            </FormControl>
            <ErrorMessage name="name" component="div" />
            <FormControl mt={5} mb={5} isRequired>
              <FormLabel
                htmlFor="password"
                size="lg"
                fontSize={isLessThan400 ? "2x1" : "3xl"}
                value={values.password}
              >
                Password
              </FormLabel>
              <InputGroup size="md">
                <Input
                  pr="13rem"
                  type={show ? "text" : "password"}
                  size="lg"
                  onChange={handleChange}
                />
                <InputRightElement width="4.5rem" mt={1}>
                  <Button h="2.1rem" size="lg" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <ErrorMessage name="password" component="div" />
            <br />
            <Button
              type="submit"
              fontSize={isLessThan400 ? "1x1" : "3xl"}
              colorScheme="teal"
              p={10}
              mt={5}
              size="lg"
              disabled={isSubmitting}
            >
              SIGN UP
            </Button>
            <Text fontSize="2xl" mt={9} align="center">
              Already have an account?
              <Link color="teal.500" href="/">
                {" "}
                SIGN IN
              </Link>
            </Text>
          </Form>
        )}
      </Formik>
    </SignUpContainer>
  );
};

export default SignupComponent;
