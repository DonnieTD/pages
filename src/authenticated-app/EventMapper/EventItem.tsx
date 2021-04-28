import React from "react";
import { BookmarkCheck } from "@styled-icons/bootstrap/BookmarkCheck";
import styled from "styled-components";

export const EventItem: React.FC<{
  url: string;
  text: string;
  bookmarked: boolean;
  onClick: any;
}> = ({ url, text, bookmarked, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <div>
        <img src={url} alt="avatar" className="actorAvatar" />
      </div>
      <div>
        <EventDescription>{text}</EventDescription>
      </div>
      <div>
        <BookmarkCheck
          style={{
            color: bookmarked ? "gold" : "white",
          }}
        />
      </div>
    </Wrapper>
  );
};

const EventDescription = styled.div`
  letter-spacing: 4px;
  font-size: 2.5vh;
  font-weight: bold;
`;
const Wrapper = styled.div`
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
`;
