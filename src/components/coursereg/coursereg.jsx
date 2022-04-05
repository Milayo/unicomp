import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Button,
  useToast,
  useMediaQuery
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
    title: "Introduction to Software Engr",
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
    title: "Discrete Data & Structures",
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
    title: "Object-Oriented & Analysis",
    units: 3,
  },
  {
    id: 8,
    code: "CSC 364",
    title: "Design Analysis Algorithms",
    units: 3,
  },
  {
    id: 9,
    code: "CSC 384",
    title: "Principles of Database",
    units: 3,
  },
  {
    id: 10,
    code: "SEN 400",
    title: "Software Engineering Ethics",
    units: 3,
  },
  {
    id: 11,
    code: "CSC 407",
    title: "Programming Languages III",
    units: 3,
  },
  {
    id: 12,
    code: "CSC 490",
    title: "Senior Design Project",
    units: 6,
  },
  {
    id: 13,
    code: "CSC 434",
    title: "Theory of Computation",
    units: 4,
  },
];

const CourseRegSection = () => {
  const [selectedList, setSelectedList] = useState([]);
  const [total, setTotal] = useState(0);
  const [checkedItem, setCheckedItem] = useState(
    new Array(Courses.length).fill(false)
  );

  const [isLessThan800] = useMediaQuery("(max-width: 800px)");

  const toast = useToast();

  const handleClick = (position) => {
    const updatedCheckedState = checkedItem.map((item, id) =>
      id === position ? !item : item
    );
    setCheckedItem(updatedCheckedState);
    console.log(updatedCheckedState);
  };
  const setCheckedCourses = (e) => {
    let updatedList = [...selectedList];
    const courseId = e.target.value;
    const findCourse = Courses.find((course) => course.id == courseId);
    if (e.target.checked) {
      updatedList = [...selectedList, findCourse];
    } else {
      updatedList.splice(selectedList.indexOf(e.target.value), 1);
    }
    setSelectedList(updatedList);
    console.log(selectedList);
  };

  const handleStorage = () => {
    localStorage.setItem("Course Lists", JSON.stringify(selectedList));
    setSelectedList([]);
    setCheckedItem(new Array(Courses.length + 1).fill(false));
    toast({
      title: "Courses Registered Successfully.",
      description: `You've registered ${total} units.`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  useEffect(() => {
    const totalUnits = selectedList.reduce((total, amount) => {
      return total + amount.units;
    }, 0);
    setTotal(totalUnits);
  }, [selectedList]);

  return (
    <CourseRegContainer>
      <Table
        variant="striped"
        colorScheme="teal"
        size={isLessThan800 ? "sm" : "md"}
      >
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
                <input
                  type="checkbox"
                  value={course.id}
                  id="rowcheck{user.id}"
                  onClick={() => handleClick(course.id)}
                  checked={checkedItem[course.id]}
                  onChange={setCheckedCourses}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text mt={5} fontSize="2xl">
          Total Registered Units: {total}
        </Text>
        <Button
          colorScheme="teal"
          mt={5}
          ml={5}
          fontSize="2x1"
          onClick={handleStorage}
        >
          SUBMIT
        </Button>
      </div>
    </CourseRegContainer>
  );
};

export default CourseRegSection;
