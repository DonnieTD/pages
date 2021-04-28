import React from "react";
import styled from "styled-components";

export const SearchContainer: React.FC<{
  search: string;
  title: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}> = React.memo(({ search, setSearch, title }) => {
  return (
    <Wrapper>
      <input
        type="text"
        value={search}
        placeholder={`Search ${title}`}
        onChange={({ target }) => setSearch(target.value)}
      />
    </Wrapper>
  );
});

const Wrapper = styled.div`
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
`;
