import React from "react";
import { Spinner } from "@chakra-ui/react";
import CourseRegSection from "../../components/coursereg/coursereg.jsx";
import Layout from "../../components/layout/layout-component.jsx";
import { CoursePageContainer } from "./coursereg-page.styles.jsx";

const CourseRegPage = ({ currentUser, setCurrentUser}) => {
  return (
    <>
      {currentUser ? (
        <Layout currentUser={currentUser} setCurrentUser={setCurrentUser}>
          <CoursePageContainer>
            <CourseRegSection />
          </CoursePageContainer>
        </Layout>
      ) : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
    </>
  );
};

export default CourseRegPage;

