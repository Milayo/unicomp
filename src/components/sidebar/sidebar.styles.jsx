import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 10vw;
  height: 89vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 800px) {
    width: 20vw;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: row;
    z-index: 1;
    position: fixed;
    height: 10vh;
    bottom: 2rem;
    justify-content: space-around;
    padding: 0 1.5rem;
    background-color: #fff;

    width: 100vw;
  }

  span {
    font-size: 1.5rem;
  }
`;
export const IconContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 15vh;
  width: 10vw;
  color: teal;
  fill: teal;

  display: flex;
  align-items: center;
  justify-content: center;
  
  @media only screen and (max-width: 800px) {
    width: 20vw;
  }

  @media only screen and (max-width: 600px) {
    height: 10vh;
    width: 25vw;
  }

  &:hover,
  :focus {
    cursor: pointer;
    background-color: rgb(26, 83, 83);
    color: white;
    fill: white;
  }
`;
