import React from "react";
import { Avatar, Button } from "@chakra-ui/react";
import { ProfileContainer, ProfileContent, ProfileSection } from "./profile-component.styles";

const ProfileComponent = () => {
  return (
    <ProfileContainer>
      <Button mt={5} mr={5} colorScheme="teal" className="edit-btn">
        EDIT
      </Button>
      <ProfileSection>
        <div className="profile-header">
          <Avatar name="Badejo Tioluwani" size="2xl" />
          <h3>Badejo Tioluwani Adejare</h3>
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
            <li className="value">CLI/2017/066</li>
            <li className="value">300 Level</li>
            <li className="value">Computer Sciences</li>
            <li className="value">Sciences</li>
            <li className="value">emmmmmmmm@gmail.com</li>
            <li className="value">123 123 122 1233</li>
          </ul>
        </ProfileContent>
      </ProfileSection>
    </ProfileContainer>
  );
};

export default ProfileComponent;
