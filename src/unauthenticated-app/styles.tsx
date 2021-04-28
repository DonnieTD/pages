import styled from "styled-components";

export const Wrapper = styled.section`
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial;
    background: #222a31;
    & img {
      width: 70%;
    }
    > div:nth-child(1) {
      background: white;
      border-radius: 3px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* box-shadow: 0 1px 4px 0 white; */
      transition: 0.3s;
      width: 25%;
      height: 35%;
      > h1 {
        font-size: 2rem;
        margin-bottom: 20px;
      }
      > span:nth-child(2) {
        font-size: 1.1rem;
        color: #808080;
        margin-bottom: 70px;
      }
      > span:nth-child(3) {
        margin: 10px 0 20px;
        color: red;
      }
    }
  }
`;

export const LoginContainer = styled.a`
  :hover {
    cursor: pointer;
  }
  text-decoration: none;

  background-color: #222a31;
  width: 150px;
  border-radius: 3px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
