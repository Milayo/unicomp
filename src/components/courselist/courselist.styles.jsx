import styled from "styled-components";

export const CourseListContainer = styled.div`
  background-color: #fff;
  height: 70vh;
  width: 45vw;
  border-radius: 1rem;

  @media only screen and (max-width: 800px) {
    width: 70vw;
    height: 40vh;
  }

  @media only screen and (max-width: 600px) {
    width: 70vw;
    height: 30vh;
  }
`;

export const CourseListHeader = styled.div`
  background-color: rgb(26, 83, 83);
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  font-size: 1.5rem;
  text-transform: Uppercase;

  @media only screen and (max-width: 800px) {
    height: 8vh;
  }
`;

export const CourseListContent = styled.div`
  overflow-y: auto;
  height: 60vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-top: 3rem;

  @media only screen and (max-width: 800px) {
   padding-top: 1.5rem;
   height: 20vh;
  }

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: #ccc;
  }

  ul {
    list-style: none;
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: rgb(26, 83, 83);
    font-weight: 500;
    border-bottom: 1px solid grey;
    

    li:last-child {
      margin-bottom: 1.2rem;
    }
  }
`;