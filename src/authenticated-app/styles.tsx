import styled from "styled-components";

export const Wrapper = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    font-family: Arial;
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 8vh;
      background: #222a31;

      .logo {
        height: 70%;
        margin-left: 0.5vw;
      }
    }
    .scrollContainer {
      height: 92vh;
    }

    .searchContainer {
      height: 10vh;
      display: flex;
      position: sticky;
      top: 0;
      background: white;
      justify-content: center;
      align-items: center;
      input {
        height: 8vh;
        width: 95%;
        border-radius: 10px;
        box-sizing: border-box;
        font-size: 1.2em;
        padding: 0 1vw;
        :focus {
          outline: none;
          box-shadow: 0 0 2px black;
        }
      }
    }
    .eventContainer {
      display: grid;
      grid-template-columns: 1fr 10fr 1fr;
      border-radius: 10px;
      color: #222a31;
      align-items: center;
      width: 95%;
      margin: 3.5vh auto;
      text-align: center;
      :hover {
        box-shadow: 0 0 2px black;
        cursor: pointer;
      }

      > :nth-child(1) {
        height: 100%;
        background: #222a31;
        border-radius: 10px 0px 0px 10px;
        align-items: center;
        justify-content: center;
        display: flex;
        > img {
          width: 60%;
          vertical-align: middle;
          border-radius: 50%;
        }
      }
      > :nth-child(2) {
        height: 100%;
        border: solid 1px #222a31;
        box-sizing: border-box;
        border-radius: 0px 0px 0px 0px;
        display: flex;
        word-break: break-word;
        align-items: center;
        justify-content: center;
        height: 15vh;
      }
      > :nth-child(3) {
        background: #222a31;
        height: 100%;
        border-radius: 0px 10px 10px 0px;
        align-items: center;
        justify-content: center;
        display: flex;
        & svg {
          width: 50%;
          color: white;
        }
      }
    }
    .eventDescription {
      letter-spacing: 4px;
      font-size: 2.5vh;
      font-weight: bold;
    }
    .button {
      all: unset;
      width: 100px;
      height: 35px;
      color: #fff;
      padding: 0 1vw;
      text-align: center;
      margin-right: 0.5vw;
      border-radius: 3px;
      border: 1px solid rgba(15, 127, 175, 0.75);
      &:hover {
        background-color: #fff;
        color: #222a31;
        cursor: pointer;
      }
    }
  }
`;
