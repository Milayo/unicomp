import styled from "styled-components";

export const HeaderRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 1rem 1rem;
`
export const ImageContainer = styled.div`
  .header-logo {
    height: 5rem;
    width: 5rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 25vw;
  height: 8vh;
  padding: 1rem;
`;

export const LogoText = styled.h4`
  font-size: 1.2rem;
  font-family: "Montserrat Alternates sans-serif";
  font-weight: 700;
  color: teal;
  margin-left: .8rem;
  
`;

export const ColoredSection = styled.div`
  background-color: rgb(144, 173, 173);
  width: 55vw;
  height: 8vh;
`;

export const NotificationContainer = styled.div`
  background-color: rgb(26, 83, 83);
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5vw;

  .bell-icon {
    fill: white;
  }
`;

export const WelcomeContainer = styled.div`
  background-color: teal;
  color: white;
  width: 20vw;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
      font-size: 1.3rem;
      margin: 0 2rem;
  }
  .logout-icon {
    fill: white;
  }
`;