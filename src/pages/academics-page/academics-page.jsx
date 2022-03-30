import React from 'react';

import Layout from '../../components/layout/layout-component';
import TimetableSection from '../../components/timetable-section/timetableSection';

import { AcademicsPageContainer } from "./academics-page.styles.jsx";

const AcademicsPage = () => {
    return (
      <Layout>
        <AcademicsPageContainer>
          <TimetableSection />
        </AcademicsPageContainer>
      </Layout>
    );
}

export default AcademicsPage;