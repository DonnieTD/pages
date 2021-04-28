import { useContext, useState } from "react";
import { StyledScroll, Wrapper } from "./styles";
import { Context } from "../context";
import { Redirect } from "react-router";
import { SearchContainer } from "./SearchContainer";
import { useDebouncedFuzzySearch } from "../hooks/useDebouncedFuzzySearch";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { EventMapper } from "./EventMapper";
import { Nav } from "./Nav";

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
      <Nav dispatch={dispatch} setTab={setTab} tab={tab} />
      <StyledScroll>
        <SearchContainer
          key={`${tab}/search`}
          title={tab === "events" ? "Events" : "Bookmarks"}
          search={tab === "events" ? search : bookmarksSearch}
          setSearch={tab === "events" ? setSearch : bookmarksSetSearch}
        />
        <EventMapper
          key={`${tab}/eventmapper`}
          bookmarks={bookmarks}
          data={tab === "events" ? data : bookmardata}
          setBookmarks={setBookmarks}
        />
      </StyledScroll>
    </Wrapper>
  );
};

export default AuthenticatedApp;
