import React from "react";
import { Avatar, Button, useMediaQuery } from "@chakra-ui/react";
import { ProfileContainer, ProfileContent, ProfileSection } from "./profile-component.styles";

const ProfileComponent = ({currentUser}) => {
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  console.log(currentUser)
  const { email, name, matricno } = currentUser;
  return (
    <ProfileContainer>
      <Button colorScheme="teal" className="edit-btn">
        EDIT
      </Button>
      <ProfileSection>
        <div className="profile-header">
          <Avatar
            name={name}
            size={isLessThan800 ? "lg" : "2xl"}
          />
          <h3>{name}</h3>
        </div>

        <ProfileContent>
          <ul>
            <li className="title">Matriculation No </li>
            <li className="title">Level</li>
            <li className="title">Department</li>
            <li className="title">Faculty</li>
            <li className="title">Student Email</li>
            <li className="title">Phone</li>
          </ul>
          <ul>
            <li className="value">{matricno}</li>
            <li className="value">300 Level</li>
            <li className="value">Computer Sciences</li>
            <li className="value">Sciences</li>
            <li className="value">{email}</li>
            <li className="value">123 123 122 1233</li>
          </ul>
        </ProfileContent>
      </ProfileSection>
    </ProfileContainer>
  );
};

export default ProfileComponent;
