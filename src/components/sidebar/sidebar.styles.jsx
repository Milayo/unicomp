import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 10vw;
  height: 58rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    width: 13vw;
  }

  @media only screen and (max-width: 800px) {
    width: 18vw;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: row;
    z-index: 10;
    position: fixed;
    height: 6rem;
    bottom: 0;
    justify-content: space-around;
    padding: 0 1.5rem;
    background-color: #fff;
    width: 100vw;
  }

  span {
    font-size: 1.3rem;

    @media only screen and (max-width: 600px) {
      font-size: 1.1rem;
    }
  }
`;
export const IconContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 10rem;
  width: 10vw;
  cursor: pointer;
  color: ${({ active }) => (active ? "white" : "teal")};
  fill: ${({ active }) => (active ? "white" : "teal")};
  background-color: ${({ active }) => (active ? "rgb(26, 83, 83)" : "none")};
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    width: 13vw;
  }

  @media only screen and (max-width: 800px) {
    width: 20vw;
  }

  @media only screen and (max-width: 600px) {
    height: 6rem;
    width: 25vw;
  }

  &:hover {
    background-color: rgb(26, 83, 83);
    color: white;
    fill: white;
  }
`;
