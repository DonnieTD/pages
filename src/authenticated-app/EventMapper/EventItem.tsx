import React from "react";
import { BookmarkCheck } from "@styled-icons/bootstrap/BookmarkCheck";

export const EventItem: React.FC<{
  url: string;
  text: string;
  bookmarked: boolean;
  onClick: any;
}> = ({ url, text, bookmarked, onClick }) => {
  return (
    <div className="eventContainer" onClick={onClick}>
      <div>
        <img src={url} alt="avatar" className="actorAvatar" />
      </div>
      <div>
        <p className="eventDescription">{text}</p>
      </div>
      <div>
        <BookmarkCheck
          style={{
            color: bookmarked ? "gold" : "white",
          }}
        />
      </div>
    </div>
  );
};
