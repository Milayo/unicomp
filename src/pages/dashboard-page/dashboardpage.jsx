import React from "react";
import { Spinner } from "@chakra-ui/react";
import CourseList from "../../components/courselist/courselist";
import Layout from "../../components/layout/layout-component";
import ProfileComponent from "../../components/profile/profile-component";
import { DashboardContainer } from "./dashboardpage.styles";

const DashboardPage = ({ currentUser, loading, setCurrentUser }) => {
  console.log(currentUser);
  return (
    <>
      {currentUser ? (
        <Layout currentUser={currentUser} setCurrentUser={setCurrentUser}>
          <DashboardContainer>
            <ProfileComponent currentUser={currentUser} />
            <CourseList />
          </DashboardContainer>
        </Layout>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      )}
    </>
  );
};

export default DashboardPage;
