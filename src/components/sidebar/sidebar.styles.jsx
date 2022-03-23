import styled from "styled-components";

export const SidebarContainer = styled.div`
width: 10vw;
height: 89vh;
color: teal;
fill: teal;
display: flex;
flex-direction: column;
align-items: center;

span{
    font-size: 1.5rem;
  
}
`
export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 15vh;
  width: 10vw;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgb(26, 83, 83);
    color: white;
    fill: white;
  }
`;