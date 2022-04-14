import React, { useState } from "react";
import { useNavigate } from "react-router";

import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Modal,
  Avatar,
  AvatarBadge,
  useDisclosure,
  ModalOverlay,
  Button,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
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


const Header = ({ currentUser, setCurrentUser }) => {
  const [isIconOpen, setIconOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  console.log(currentUser);
  const auth = getAuth();
  let navigate = useNavigate();

  const fullName = currentUser.name.split(" ");

  const logout = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
        navigate("/");
        alert("SignOut successful");
      })
      .catch((error) => {
        // An error happened.
      });
  };
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
        <NotificationContainer onClick={onOpen}>
          <NotificationBell className="bell-icon" onClick={onOpen} />
        </NotificationContainer>

        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody fontSize="2x1" pt="8rem" pb="8rem" pr="4rem" pl="4rem">
              <span style={{ fontSize: "1.5rem" }}>
                {" "}
                No Notifications Available{" "}
              </span>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <WelcomeContainer>
          <Avatar name={currentUser.name}>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <h3>Welcome, {fullName[0]} </h3>
          <LogOut className="logout-icon" onClick={logout} />
        </WelcomeContainer>
        <SidebarIcon>
          <HamburgerIcon
            onClick={() => {
              isIconOpen ? setIconOpen(false) : setIconOpen(true);
            }}
          />
        </SidebarIcon>
      </HeaderRow>
      {isIconOpen ? <ToggleSidebar setIconOpen={setIconOpen} currentUser={currentUser} setCurrentUser={setCurrentUser}/> : null}
    </div>
  );
};

export default Header;
