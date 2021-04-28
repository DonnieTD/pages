import React from "react";
import styled from "styled-components";
import logosrc from "./logo.png";

export const Nav: React.FC<{ dispatch: any; setTab: any; tab: any }> = ({
  dispatch,
  setTab,
  tab,
}) => {
  return (
    <Wrapper>
      <img className="logo" alt="logo" src={logosrc} />
      <span>
        <StyledButton
          onClick={() => {
            let temp = tab;
            if (tab === "events") {
              temp = "bookmarks";
            } else {
              temp = "events";
            }
            setTab(temp);
          }}
        >
          {tab === "events" ? "Bookmarks" : "Events"}
        </StyledButton>
        <StyledButton
          onClick={() =>
            dispatch({
              type: "LOGOUT",
            })
          }
        >
          Logout
        </StyledButton>
      </span>
    </Wrapper>
  );
};

export const StyledButton = styled.button`
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
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8vh;
  background: #222a31;

  .logo {
    height: 70%;
    margin-left: 0.5vw;
  }
`;
