import React, { useEffect, useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import {
  CourseListContainer,
  CourseListHeader,
  CourseListContent,
} from "./courselist.styles";

const CourseList = () => {
  const [regCourses, setRegCourses] = useState([]);

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
      </CourseListHeader>
      <CourseListContent>
        {regCourses ? (
          regCourses.map((item) => (
            <ul key={item.id}>
              <CloseIcon className="remove-btn"/>
              <li>Course Code: {item.code} </li>
              <li>Course Title: {item.title}</li>
              <li>Course Units: {item.units}</li>
            </ul>
          ))
        ) : (
          <div> No Registered Courses</div>
        )}
      </CourseListContent>
    </CourseListContainer>
  );
};

export default CourseList;
