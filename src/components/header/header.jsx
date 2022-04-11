import React, { useState } from "react";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { getAuth, signOut } from "firebase/auth";

import { ReactComponent as Logo } from "../../assets/images/logo_school.svg";
import { ReactComponent as NotificationBell } from "../../assets/icons/notifications_on.svg";
import { ReactComponent as LogOut } from "../../assets/icons/exit_to_app.svg";

import {
  SidebarIcon,
  HeaderTitle,
  WelcomeContainer,
  NotificationContainer,
  ImageContainer,
  LogoContainer,
  LogoText,
  HeaderRow,
  ColoredSection,
} from "./header.styles";
import ToggleSidebar from "../togglesidebar/togglesidebar";
import { useNavigate } from "react-router";

const Header = ({currentUser}) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(currentUser)
  const auth = getAuth();
   let navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        alert("SignOut successful");
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <div>
      <HeaderRow>
        <LogoContainer>
          <ImageContainer>
            <Logo className="header-logo" style={{ fill: "teal" }} />
          </ImageContainer>
          <LogoText>UNIVERSITY OF COMPUTER SCIENCES</LogoText>
        </LogoContainer>
        <ColoredSection></ColoredSection>
        <HeaderTitle>Dashboard</HeaderTitle>
        <NotificationContainer>
          <NotificationBell className="bell-icon" />
        </NotificationContainer>
        <WelcomeContainer>
          <Avatar name="bnnm mm">
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <h3>Welcome, Badejo</h3>
          <LogOut className="logout-icon" onClick={logout}/>
        </WelcomeContainer>
        <SidebarIcon>
          <HamburgerIcon
            onClick={() => {
              isOpen ? setIsOpen(false) : setIsOpen(true);
            }}
          />
        </SidebarIcon>
      </HeaderRow>
      {isOpen ? <ToggleSidebar setIsOpen={setIsOpen} /> : null}
    </div>
  );
};

export default Header;
