import React from "react";
import { useNavigate } from "react-router";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { getAuth, signOut } from "firebase/auth";
import { CloseIcon } from "@chakra-ui/icons";
import { ReactComponent as LogOut } from "../../assets/icons/exit_to_app.svg";

import {
  ToggleSidebarContainer,
  LogOutContainer,
} from "./togglesidebar.styles";

const ToggleSidebar = ({ setIconOpen, currentUser, setCurrentUser }) => {
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
    <ToggleSidebarContainer>
      <CloseIcon className="close-icon" onClick={() => setIconOpen(false)} />
      <Avatar name={currentUser.name} size="2xl">
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
      <h3>Welcome, {fullName[0]}.</h3>
      <LogOutContainer>
        <LogOut className="logout-icon" onClick={logout} />
      </LogOutContainer>
    </ToggleSidebarContainer>
  );
};

export default ToggleSidebar;
