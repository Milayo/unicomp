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
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        /></div>
      )}
    </>
  );
};

export default CourseRegPage;

