import React from 'react';
import { Button } from '@chakra-ui/react';
import {
  CourseListContainer,
  CourseListHeader,
  CourseListContent,
} from "./courselist.styles";

const CourseList = () => {
  return (
    <CourseListContainer>
      <CourseListHeader>
        <h3>Semester Courses</h3>
        <Button variant="outline" colorScheme="white">
          EDIT
        </Button>
      </CourseListHeader>
      <CourseListContent>
        <ul>
          <li>Course Code: CLI310</li>
          <li>Course Title: Introduction to Solidity</li>
          <li>Course Units: 4</li>
        </ul>
        <ul>
          <li>Course Code: CLI310</li>
          <li>Course Title: Introduction to Solidity</li>
          <li>Course Units: 4</li>
        </ul>
        <ul>
          <li>Course Code: CLI310</li>
          <li>Course Title: Introduction to Solidity</li>
          <li>Course Units: 4</li>
        </ul>
        <ul>
          <li>Course Code: CLI310</li>
          <li>Course Title: Introduction to Solidity</li>
          <li>Course Units: 4</li>
        </ul>
        <ul>
          <li>Course Code: CLI310</li>
          <li>Course Title: Introduction to Solidity</li>
          <li>Course Units: 4</li>
        </ul>
        <ul>
          <li>Course Code: CLI310</li>
          <li>Course Title: Introduction to Solidity</li>
          <li>Course Units: 4</li>
        </ul>
        <ul>
          <li>Course Code: CLI310</li>
          <li>Course Title: Introduction to Solidity</li>
          <li>Course Units: 4</li>
        </ul>
        <ul>
          <li>Course Code: CLI310</li>
          <li>Course Title: Introduction to Solidity</li>
          <li>Course Units: 4</li>
        </ul>
        <ul>
          <li>Course Code: CLI310</li>
          <li>Course Title: Introduction to Solidity</li>
          <li>Course Units: 4</li>
        </ul>
        <ul>
          <li>Course Code: CLI310</li>
          <li>Course Title: Introduction to Solidity</li>
          <li>Course Units: 4</li>
        </ul>
      </CourseListContent>
    </CourseListContainer>
  );
}

export default CourseList;