import React from "react";
import { EventItem } from "./EventItem";

export const EventMapper: React.FC<{
  data: any;
  bookmarks: any;
  setBookmarks: any;
}> = ({ data, bookmarks, setBookmarks }) => {
  return data?.map((x: any) => (
    <EventItem
      key={x.id}
      text={x.text}
      url={x.url}
      onClick={() => {
        if (
          bookmarks &&
          bookmarks.filter((e: any) => e.id === x.id).length > 0
        ) {
          setBookmarks(bookmarks.filter((e: any) => e.id !== x.id));
        } else {
          setBookmarks([...bookmarks, x]);
        }
      }}
      bookmarked={bookmarks.filter((e: any) => e.id === x.id).length > 0}
    />
  ));
};
