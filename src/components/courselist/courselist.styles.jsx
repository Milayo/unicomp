import styled from "styled-components";

export const CourseListContainer = styled.div`
  background-color: #fff;
  height: 46rem;
  width: 44vw;
  border-radius: 1rem;

  @media only screen and (max-width: 800px) {
    width: 73vw;
    height: 30rem;
  }

  @media only screen and (max-width: 600px) {
    width: 91vw;
    height: 42rem;
  }
  @media only screen and (max-width: 400px) {
    width: 95vw;
   
  }
`;

export const CourseListHeader = styled.div`
  background-color: rgb(26, 83, 83);
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 7rem;
  font-size: 1.5rem;
  text-transform: Uppercase;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  @media only screen and (max-width: 800px) {
    height: 5rem;
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 600px) {
    height: 4rem;
  }
`;

export const CourseListContent = styled.div`
  overflow-y: auto;
  height: 39rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 1rem 0 1rem;

  @media only screen and (max-width: 800px) {
    padding-top: 1.5rem;
    height: 25rem;
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
    width: 18vw;
    color: rgb(26, 83, 83);
    font-weight: 500;
    border-bottom: 1px solid grey;
    text-align: left;

    @media only screen and (max-width: 600px) {
      margin-bottom: 1.3rem;
      font-size: 1.2rem;
      width: 30vw;
    }

    .remove-btn {
     display: flex;
     justify-content: flex-end;
     cursor: pointer;
    }

    li:last-child {
      margin-bottom: 1.2rem;

      @media only screen and (max-width: 600px) {
        margin-bottom: 1rem;
      }
    }
  }
`;