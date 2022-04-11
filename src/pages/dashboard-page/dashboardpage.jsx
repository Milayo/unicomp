import React from 'react'
import CourseList from '../../components/courselist/courselist';
import Layout from '../../components/layout/layout-component';
import ProfileComponent from '../../components/profile/profile-component';
import { DashboardContainer } from './dashboardpage.styles';

const DashboardPage = ({currentUser}) => {
  return (
    <Layout currentUser={currentUser}>
      <DashboardContainer>
        <ProfileComponent currentUser={currentUser} />
        <CourseList />
      </DashboardContainer>
    </Layout>
  );
}

export default DashboardPage;