import React from "react";
import {
  FormControl,
  FormLabel,
  Link,
  Text,
  useMediaQuery,
  InputGroup,
  Input,
  Select,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import { Formik, ErrorMessage } from "formik";
import { SignUpContainer } from "./signup.styles";

const SignupComponent = ({}) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [isLessThan400] = useMediaQuery("(max-width: 400px)");

  return (
    <SignUpContainer>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          matricno: "",
          dept: "",
          level: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Name is Required";
          } else if (!values.email) {
            errors.email = "Email is Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          } else if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 6) {
            errors.password = "Password should exceed 6 characters";
          } else if (!values.dept) {
            errors.dept = "Department is Required";
          } else if (!values.level) {
            errors.level = "Level is Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(async () => {
            const { email, password, name, matricno, dept, level } = values;
            try {
              const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
              );
              
              await createUserProfileDocument(
                user,
                matricno,
                name,
                dept,
                level
              );

              console.log(user);
            } catch (error) {
              console.log(error.message);
              alert(error.message);
            }
            values.email = "";
            values.password = "";
            values.name = "";
            values.matricno = "";
            values.dept = "";
            values.level = "";
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="signup-form">
            <FormControl mt={2} mb={2} isRequired>
              <FormLabel htmlFor="name" fontSize="2xl">
                Name
              </FormLabel>
              <Input
                id="name"
                name="name"
                type="text"
                size="lg"
                fontSize="2xl"
                onChange={handleChange}
                value={values.name}
              />
            </FormControl>
            <ErrorMessage name="name" component="div" />
            <FormControl isRequired>
              <FormLabel htmlFor="email" fontSize="2xl">
                Email address
              </FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                size="lg"
                fontSize="2xl"
                onChange={handleChange}
                value={values.email}
              />
            </FormControl>
            <ErrorMessage name="email" component="div" />
            <FormControl mt={2} mb={2} isRequired>
              <FormLabel htmlFor="matricno" fontSize="2xl">
                Matric Number
              </FormLabel>
              <Input
                id="matricno"
                name="matricno"
                type="alphanumeric"
                size="lg"
                fontSize="2xl"
                onChange={handleChange}
                value={values.matricno}
              />
            </FormControl>
            <ErrorMessage name="matricno" component="div" />

            <FormControl mt={2} mb={2} isRequired>
              <FormLabel htmlFor="dept" fontSize="2xl">
                Department
              </FormLabel>
              <Select
                id="dept"
                name="dept"
                placeholder="Select Department"
                size="lg"
                fontSize="2xl"
                value={values.dept}
                onChange={handleChange}
              >
                <option value="Comp Science and Engr">
                  Comp Science and Engr
                </option>
                <option value="Comp Science and Econs">
                  Comp Science and Econs
                </option>
                <option value="Comp Science and Web Dev">
                  Comp Science and Web Dev
                </option>
                <option value="Comp Science and Data">
                  Comp Science and Data
                </option>
                <option value="Comp Science and Physics">
                  Comp Science and Physics
                </option>
                <option value="Comp Science and Maths">
                  Comp Science and Maths
                </option>
              </Select>
            </FormControl>
            <ErrorMessage name="dept" component="div" />
            <FormControl mt={2} mb={2} isRequired>
              <FormLabel htmlFor="level" fontSize="2xl">
                Level
              </FormLabel>
              <Select
                placeholder="Select Level"
                size="lg"
                fontSize="2xl"
                id="level"
                name="level"
                value={values.level}
                onChange={handleChange}
              >
                <option value="100 Level">100 Level</option>
                <option value="200 Level">200 Level</option>
                <option value="300 Level">300 Level</option>
                <option value="400 Level">400 Level</option>
                <option value="500 Level">500 Level</option>
              </Select>
            </FormControl>
            <ErrorMessage name="level" component="div" />
            <FormControl mt={2} mb={2} isRequired>
              <FormLabel htmlFor="level" fontSize="2xl">
                Password
              </FormLabel>
              <InputGroup size="md">
                <Input
                  id="password"
                  pr="13rem"
                  type={show ? "text" : "password"}
                  size="lg"
                  value={values.password}
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
              fontSize={isLessThan400 ? "1x1" : "2xl"}
              colorScheme="teal"
              p={7}
              mt={4}
              size="lg"
              disabled={isSubmitting}
            >
              SIGN UP
            </Button>
            <Text fontSize="2xl" mt={5} align="center">
              Already have an account?
              <Link color="teal.500" href="/">
                {" "}
                SIGN IN
              </Link>
            </Text>
          </form>
        )}
      </Formik>
    </SignUpContainer>
  );
};

export default SignupComponent;
