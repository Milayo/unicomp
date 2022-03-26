import React from 'react'
import CourseList from '../../components/courselist/courselist';
import Layout from '../../components/layout/layout-component';
import ProfileComponent from '../../components/profile/profile-component';
import { DashboardContainer } from './dashboardpage.styles';

const DashboardPage = () => {
  return (
      <Layout>
      <DashboardContainer>
        <ProfileComponent />
        <CourseList/>
      </DashboardContainer>
    </Layout>
  )
}

export default DashboardPage;