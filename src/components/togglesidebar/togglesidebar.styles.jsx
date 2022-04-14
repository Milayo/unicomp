import styled from "styled-components";

export const ToggleSidebarContainer = styled.div`

display: none;
  @media only screen and (max-width: 600px) {
    @keyframes moveInLeft {
      0% {
        transform: translateX(-10rem);
      }
      100% {
        opacity: 1;
        transform: translate(0);
      }
    }

    width: 60vw;
    height: 100vh;
    top: 0;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 16%);
    background-color: #fff;
    position: fixed;
    z-index: 5;
    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      color: rgb(26, 83, 83);
      font-size: 1.9rem;
      margin: 2rem 0 25rem 0;
    }

    .close-icon {
      font-size: 3rem;
      color: rgb(26, 83, 83);
      margin: -6rem 0 10rem 20rem;

      @media only screen and (max-width: 400px) {
        margin: -6rem 0 10rem 13rem;
      }
    }
  }
`;

export const LogOutContainer = styled.div`
  fill: rgb(26, 83, 83);
  transform: scale(1.5);
`;