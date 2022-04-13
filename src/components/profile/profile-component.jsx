import React, { useState } from "react";

import { Avatar, Button, useMediaQuery } from "@chakra-ui/react";
import {
  Modal,
  Input,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Select,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ProfileContainer,
  ProfileContent,
  ProfileSection,
} from "./profile-component.styles";
import { Database } from "../firebase/firebase.utils";

const ProfileComponent = ({ currentUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  const { email, name, matricno, dept, level, id } = currentUser;


  const [input, setInput] = useState({
    name,
    email,
    matricno,
    dept,
    level,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('clicked')
    try {
      await Database.collection('users').doc(id).update({
       ...input
     })
    } catch (error) {
      console.log(error)
   }
    
   
  };
  return (
    <ProfileContainer>
      <Button colorScheme="teal" className="edit-btn" onClick={onOpen}>
        EDIT
      </Button>
      <Modal
        size="xl"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="scale"
      >
        <ModalOverlay />
        <ModalContent p="2rem">
          <ModalHeader>Edit User Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input
              variant="outline"
              placeholder="Name"
              mb={5}
              size="lg"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
            <Input
              variant="outline"
              placeholder="Email"
              mb={5}
              size="lg"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
            <Input
              variant="outline"
              placeholder="Matric No"
              mb={5}
              size="lg"
              name="matricno"
              value={input.matricno}
              onChange={handleChange}
            />

            <Select
              mb={5}
              placeholder="Select Department"
              size="lg"
              id="dept"
              name="dept"
              value={input.dept}
              onChange={handleChange}
            >
              <option value="Comp Science and Engr">
                Comp Science and Engr
              </option>
              <option value="Comp Science and Econs">
                Comp Science and Econs
              </option>
              <option value="Comp Science and Web Dev">
                Comp Science and Web Dev
              </option>
              <option value="Comp Science and Data">
                Comp Science and Data
              </option>
              <option value="Comp Science and Physics">
                Comp Science and Physics
              </option>
              <option value="Comp Science and Maths">
                Comp Science and Maths
              </option>
            </Select>
            <Select
              placeholder="Select Level"
              size="lg"
              id="level"
              name="level"
              value={input.level}
              onChange={handleChange}
            >
              <option value="100 Level">100 Level</option>
              <option value="200 Level">200 Level</option>
              <option value="300 Level">300 Level</option>
              <option value="400 Level">400 Level</option>
              <option value="500 Level">500 Level</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
              SAVE
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ProfileSection>
        <div className="profile-header">
          <Avatar name={name} size={isLessThan800 ? "lg" : "2xl"} />
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
            <li className="value">{level}</li>
            <li className="value">{dept}</li>
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
