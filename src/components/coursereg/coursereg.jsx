import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Text
} from "@chakra-ui/react";

import { CourseRegContainer } from "./coursereg.styles.jsx";

const Courses = [
  {
    id: 1,
    code: "CIE 105",
    title: "Principles of Programming I",
    units: 3,
  },

  {
    id: 2,
    code: "CIE 106",
    title: "Principles of Programming II ",
    units: 3,
  },

  {
    id: 3,
    code: "SEN 301",
    title: "Introduction to Software Engineering",
    units: 3,
  },

  {
    id: 4,
    code: "CSC 202",
    title: "Data Structures & Algorithms",
    units: 3,
  },
  {
    id: 5,
    code: "CSC 213",
    title: "Discrete Structures",
    units: 3,
  },
  {
    id: 6,
    code: "CSC 214",
    title: "Logic in Computer Science",
    units: 3,
  },
  {
    id: 7,
    code: "CSC 306",
    title: "Object-Oriented Analysis & Design",
    units: 3,
  },
  {
    id: 8,
    code: "CSC 364",
    title: "Design& Analysis of Algorithms",
    units: 3,
  },
  {
    id: 9,
    code: "CSC 384",
    title: "Principles of Database Systems",
    units: 3,
  },
  {
    id: 10,
    code: "SEN 400",
    title: "Software Engineering Professional Ethics",
    units: 3,
  },
  {
    id: 11,
    code: "CSC 407",
    title: "Programming Languages",
    units: 3,
  },
  {
    id: 12,
    code: "CSC 490",
    title: "Senior Design Project",
    units: 3,
  },
  {
    id: 13,
    code: "CSC 434",
    title: "Theory of Computation",
    units: 3,
  },
];

const CourseRegSection = () => {
    const [selectedList, setSelectedList] = useState([]);
    const [total, setTotal] = useState(0);
  const setCheckedItems = (e) => {
      let updatedList = [...selectedList];
      const courseId = e.target.value;
      const findCourse = Courses.find(course => course.id == courseId)
      if (e.target.checked) {
          updatedList = [...selectedList, findCourse]
      } else {
          updatedList.splice(selectedList.indexOf(e.target.value), 1);
      }
      setSelectedList(updatedList);
      console.log(selectedList)
    
    };
    

    useEffect(() => {
        const totalUnits = selectedList.reduce((total, amount) => {
            return total + amount.units;
        }, 0); 
     setTotal(totalUnits)
  }, [selectedList])

  return (
    <CourseRegContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th style={{ fontSize: "1.2rem" }} textAlign="center">
              Course Code
            </Th>
            <Th style={{ fontSize: "1.2rem" }} textAlign="center">
              Course Title
            </Th>
            <Th style={{ fontSize: "1.2rem" }} textAlign="center">
              Course Units
            </Th>
            <Th style={{ fontSize: "1.2rem" }} textAlign="center">
              Select Course
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {Courses.map((course) => (
            <Tr key={course.id}>
              <Td textAlign="center">{course.code}</Td>
              <Td textAlign="center">{course.title}</Td>
              <Td textAlign="center">{course.units}</Td>
              <Td textAlign="center">
                <input type="checkbox" value={course.id} id="rowcheck{user.id}" onChange={setCheckedItems}/>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Text mt={5} fontSize="2xl" textAlign="center">
        Total Registered Units: {total}
      </Text>
    </CourseRegContainer>
  );
};

export default CourseRegSection;
