import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
    Td,
  Button,
  TableCaption,
  Input,
  Text,
} from "@chakra-ui/react";

const TimetableSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <Table
      variant="striped"
      colorScheme="teal"
      size="lg"
      style={{ width: "65vw" }}
    >
      <TableCaption>
        SEMESTER'S TIMETABLE
        <Button variant="outline" colorScheme="white" ml={5} onClick={() => {
          isEditing ? setIsEditing(false) : setIsEditing(true)
        }}>
          { isEditing ? "SAVE" : "EDIT"}
        </Button>
      </TableCaption>
      <Thead>
        <Tr>
          <Th>Time</Th>
          <Th>Mon</Th>
          <Th>Tues</Th>
          <Th>Wed</Th>
          <Th>Thurs</Th>
          <Th>Fri</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>9AM</Td>
          <Td>{isEditing ? <Input htmlSize={5}/> : <Text></Text>}</Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <Td>10AM</Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <Td>11AM</Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <Td>12PM</Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <Td>1PM</Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <Td>2PM</Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <Td>3PM</Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <Td>4PM</Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <Td>5PM</Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

export default TimetableSection;