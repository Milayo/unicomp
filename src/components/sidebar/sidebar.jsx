import React from 'react';
import { useLocation} from "react-router-dom";
import { IconContainer, SidebarContainer } from './sidebar.styles';

import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { ReactComponent as ResourceIcon } from "../../assets/icons/library_books.svg";
import { ReactComponent as AcademicsIccon } from "../../assets/icons/school.svg";
import { ReactComponent as FinanceIcon } from "../../assets/icons/credit-card.svg";

const SidebarComponent = () => {
  let location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);
  return (
    <SidebarContainer>
      <IconContainer to="/dashboard" active={pathname === "/dashboard"}>
        <DashboardIcon className="sidebar-icon" />
        <span>Dashboard</span>
      </IconContainer>
      <IconContainer to="/academics" active={pathname === "/academics"}>
        <AcademicsIccon className="sidebar-icon" />
        <span>Academics</span>
      </IconContainer>
      <IconContainer to="/registration" active={pathname === "/registration"}>
        <ResourceIcon className="sidebar-icon" />
        <span>Courses</span>
      </IconContainer>
      <IconContainer to="#">
        <FinanceIcon className="sidebar-icon" />
        <span>Finance</span>
      </IconContainer>
    </SidebarContainer>
  );
}

export default SidebarComponent;