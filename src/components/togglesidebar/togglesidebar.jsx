import React from 'react';
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { ReactComponent as LogOut } from "../../assets/icons/exit_to_app.svg";

import { ToggleSidebarContainer, LogOutContainer } from './togglesidebar.styles';

const ToggleSidebar = ({ setIsOpen}) => {
   
    return (
      <ToggleSidebarContainer>
        <CloseIcon className="close-icon" onClick={() => setIsOpen(false)}/>
        <Avatar name="Baseola Tioluwani" size="2xl">
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
        <h3>Welcome, Badejo.</h3>
        <LogOutContainer>
          <LogOut className="logout-icon" />
        </LogOutContainer>
      </ToggleSidebarContainer>
    );
}

export default ToggleSidebar;