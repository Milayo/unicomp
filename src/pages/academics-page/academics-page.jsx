import React from "react";
import { Spinner } from "@chakra-ui/react";
import Layout from "../../components/layout/layout-component";
import TimetableSection from "../../components/timetable-section/timetableSection";

import { AcademicsPageContainer } from "./academics-page.styles.jsx";

const AcademicsPage = ({ currentUser, setCurrentUser}) => {
  return (
    <>
      {currentUser ? (
        <Layout currentUser={currentUser} setCurrentUser={setCurrentUser}>
          <AcademicsPageContainer>
            <TimetableSection />
          </AcademicsPageContainer>
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

export default AcademicsPage;
