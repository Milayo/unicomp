import React, { useEffect, useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import {
  CourseListContainer,
  CourseListHeader,
  CourseListContent,
} from "./courselist.styles";
import { Button, Text } from "@chakra-ui/react";

const CourseList = () => {
  const [regCourses, setRegCourses] = useState([]);
   const [isEditing, setIsEditing] = useState(false);

  const handleBtn = (itemId) => {
    const newRegCourses = regCourses
      .filter((item) => itemId !== item.id);
    setRegCourses(newRegCourses)
    localStorage.setItem("Course Lists", JSON.stringify(newRegCourses))
  }
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("Course Lists"));
    if (items) {
      setRegCourses(items);
    }
  }, []);
  return (
    <CourseListContainer>
      <CourseListHeader>
        <h3>Semester Courses</h3>
        <Button
          variant="outline"
          onClick={() => {
            isEditing ? setIsEditing(false) : setIsEditing(true);
          }}
          disabled={!regCourses.length}
        >
          {isEditing ? "SAVE" : "EDIT"}
        </Button>
      </CourseListHeader>
      <CourseListContent>
        {regCourses.length ? (
          regCourses.map((item) => (
            <ul key={item.id}>
              {isEditing && (
                <div className="remove-btn">
                  <CloseIcon onClick={() => handleBtn(item.id)} />
                </div>
              )}

              <li>Course Code: {item.code} </li>
              <li>Course Title: {item.title}</li>
              <li>Course Units: {item.units}</li>
            </ul>
          ))
        ) : (
          <Text fontSize="2xl" color="teal">
            {" "}
            No Registered Courses.
          </Text>
        )}
      </CourseListContent>
    </CourseListContainer>
  );
};

export default CourseList;
