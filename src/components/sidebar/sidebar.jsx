import React from 'react';
import { IconContainer, SidebarContainer } from './sidebar.styles';

import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { ReactComponent as ResourceIcon } from "../../assets/icons/library_books.svg";
import { ReactComponent as AcademicsIccon } from "../../assets/icons/school.svg";
import { ReactComponent as FinanceIcon } from "../../assets/icons/credit-card.svg";

const SidebarComponent = () => {
  return (
    <SidebarContainer>
      <IconContainer>
        <DashboardIcon className="sidebar-icon" />
        <span>Dashboard</span>
      </IconContainer>
      <IconContainer>
        <AcademicsIccon className="sidebar-icon" />
        <span>Academics</span>
      </IconContainer>
      <IconContainer>
        <ResourceIcon className="sidebar-icon" />
        <span>Resources</span>
      </IconContainer>
      <IconContainer>
        <FinanceIcon className="sidebar-icon" />
        <span>Finance</span>
      </IconContainer>
    </SidebarContainer>
  );
}

export default SidebarComponent;