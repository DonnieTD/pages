import { useContext, useState } from "react";
import { Wrapper } from "./styles";
import { Context } from "../context";
import PerfectScrollbar from "react-perfect-scrollbar";
import logosrc from "./logo.png";
import { Redirect } from "react-router";
import { SearchContainer } from "./SearchContainer";
import { useDebouncedFuzzySearch } from "../hooks/useDebouncedFuzzySearch";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { EventMapper } from "./EventMapper";

const AuthenticatedApp = () => {
  const { state, dispatch }: any = useContext(Context);
  const [tab, setTab] = useState("events");
  const [bookmarks, setBookmarks] = useLocalStorage("bookmarks", []);
  const [search, setSearch] = useState("");
  const [bookmarksSearch, bookmarksSetSearch] = useState("");

  const data = useDebouncedFuzzySearch(search, 1000, state?.serverdata?.events);
  const bookmardata = useDebouncedFuzzySearch(bookmarksSearch, 1000, bookmarks);
  if (state.isLoggedIn !== true) return <Redirect to="/login" />;

  return (
    <Wrapper>
      <div className="container">
        <div className="nav">
          <img className="logo" alt="logo" src={logosrc} />
          <span>
            <button
              className="button"
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
            </button>
            <button
              className="button"
              onClick={() =>
                dispatch({
                  type: "LOGOUT",
                })
              }
            >
              Logout
            </button>
          </span>
        </div>
        <PerfectScrollbar className="scrollContainer">
          {tab === "events" ? (
            <>
              <SearchContainer
                title="Events"
                search={search}
                setSearch={setSearch}
              />
              <EventMapper
                bookmarks={bookmarks}
                data={data}
                setBookmarks={setBookmarks}
              />
            </>
          ) : (
            <>
              <SearchContainer
                title="Bookmarks"
                search={bookmarksSearch}
                setSearch={bookmarksSetSearch}
              />
              <EventMapper
                bookmarks={bookmarks}
                data={bookmardata}
                setBookmarks={setBookmarks}
              />
            </>
          )}
        </PerfectScrollbar>
      </div>
    </Wrapper>
  );
};

export default AuthenticatedApp;
