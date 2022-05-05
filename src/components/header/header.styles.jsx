import styled from "styled-components";

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
height: 7rem;
  @media only screen and (max-width: 600px) {
    height: 5rem;
  }
`;
export const ImageContainer = styled.div`
  .header-logo {
    height: 3.5rem;
    width: 5rem;

    @media only screen and (max-width: 600px) {
      height: 3rem;
    }
    @media only screen and (max-width: 400px) {
      height: 2.8rem;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 25vw;
  height: 7rem;
  padding: 1rem;
  @media only screen and (max-width: 1200px) {
    width: 60vw;
  }
  @media only screen and (max-width: 800px) {
    width: 65vw;
  }
  @media only screen and (max-width: 600px) {
    width: 20vw;
    justify-content: center;
  }

  @media only screen and (max-width: 400px) {
    width: 15vw;
  }
`;

export const LogoText = styled.h4`
  font-size: 1.2rem;
  font-family: "Montserrat Alternates sans-serif";
  font-weight: 700;
  color: teal;
  margin-left: .5rem;

  @media only screen and (max-width: 1200px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const ColoredSection = styled.div`
  background-color: rgb(144, 173, 173);
  width: 55vw;
  height: 7rem;

  @media only screen and (max-width: 1200px) {
 display: none;
  }
 

`;

export const HeaderTitle = styled.h2`
  display: none;

  @media only screen and (max-width: 600px) {
    display: flex;
    background-color: #fff;
    font-size: 2rem;
    font-weight: 700;
    color: rgb(26, 83, 83);
    justify-content: center;
    width: 40vw;
  }

  @media only screen and (max-width: 400px) {
    font-size: 1.7rem;
    width: 35vw;
  }
`;

export const NotificationContainer = styled.div`
  background-color: rgb(26, 83, 83);
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5vw;

  @media only screen and (max-width: 1200px) {
    width: 10vw;
  }
  @media only screen and (max-width: 800px) {
    width: 8vw;
  }

  @media only screen and (max-width: 600px) {
    background-color: #fff;
    width: 10vw;
  }

  .bell-icon {
    fill: white;

    @media only screen and (max-width: 600px) {
      fill: rgb(26, 83, 83);

    }
  }
`;

export const WelcomeContainer = styled.div`
  background-color: teal;
  color: white;
  fill: white;
  width: 20vw;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1200px) {
    width: 30vw;
  }
  @media only screen and (max-width: 800px) {
    width: 40vw;
  }

  @media only screen and (max-width: 600px) {
    background-color: white;
    display: none;
  }

  h3 {
    font-size: 1.3rem;
    margin: 0 2rem;
    @media only screen and (max-width: 800px) {
      margin: 0 2rem;
    }
  }
  .logout-icon {
  }
`;

export const SidebarIcon = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    color: rgb(26, 83, 83);
    font-size: 3rem;
    display: flex;
    width: 20vw;
    justify-content: center;
  }

  @media only screen and (max-width: 400px) {
    width: 25vw;
  }
`;