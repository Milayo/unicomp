import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: #fff;
  height: 46rem;
  width: 35vw;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 800px) {
    width: 73vw;
    height: 21rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 600px) {
    width: 92vw;
  }
  @media only screen and (max-width: 400px) {
    width: 95vw;
    height: 40rem;
  }

  .edit-btn {
    align-self: flex-end;
    margin-top: 0.5rem;
    margin-right: 1rem;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40rem;
  align-items: center;
  text-align: center;

  font-family: "Montserrat Alternates sans-serif";
  color: teal;

  @media only screen and (max-width: 800px) {
    flex-direction: row;
  }

  @media only screen and (max-width: 400px) {
    height: 20rem;
    flex-direction: column;
  }

  .profile-header {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 1.8rem;
      margin: 1.5rem 0;
      font-weight: 700;

      @media only screen and (max-width: 800px) {
        font-size: 1.5rem;
      }

      @media only screen and (max-width: 500px) {
        font-size: 1.3rem;
      }

      @media only screen and (max-width: 400px) {
        margin: 0.7rem;
      }
    }
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  justify-content: center;
  ul {
    list-style: none;
    font-size: 1.3rem;

    @media only screen and (max-width: 500px) {
      font-size: 1.1rem;
    }

    .value {
      text-align: left;
      margin-left: 1rem;
      @media only screen and (max-width: 500px) {
        margin-left: 0.5rem;
      }
    }

    .title {
      text-align: right;
      margin-right: 1rem;
      font-weight: 700;
      @media only screen and (max-width: 500px) {
        
        margin-right: 0.5rem;
      }
    }
  }
`;