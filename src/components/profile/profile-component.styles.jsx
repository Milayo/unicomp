import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: #fff;
  height: 70vh;
  width: 30vw;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 800px) {
    width: 70vw;
    height: 45vh;
    margin-bottom: 2rem;
  }

  .edit-btn {
    align-self: flex-end;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  align-items: center;
  text-align: center;

  font-family: "Montserrat Alternates sans-serif";
  color: teal;

  @media only screen and (max-width: 800px) {
    flex-direction: row;
    height: 40vh;
  }

  .profile-header {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 1.8rem;
      margin: 1.5rem 0;
      font-weight: 700;
    }
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  justify-content: center;
  ul {
    list-style: none;
    font-size: 1.3rem;

    .value {
      text-align: left;
      margin-left: 1rem;
    }

    .title {
      text-align: right;
      margin-right: 1rem;
      font-weight: 700;
    }
  }
`;