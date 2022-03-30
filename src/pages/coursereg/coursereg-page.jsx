import React from "react";
import CourseRegSection from "../../components/coursereg/coursereg.jsx";
import Layout from "../../components/layout/layout-component.jsx";
import { CoursePageContainer } from "./coursereg-page.styles.jsx";

const CourseRegPage = () => {
    return (
      <Layout>
        <CoursePageContainer>
          <CourseRegSection />
        </CoursePageContainer>
      </Layout>
    );
};

export default CourseRegPage;
