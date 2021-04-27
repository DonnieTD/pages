import React from "react";

export const SearchContainer: React.FC<{
  search: string;
  title: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}> = React.memo(({ search, setSearch, title }) => {
  return (
    <div className="searchContainer">
      <input
        type="text"
        value={search}
        placeholder={`Search ${title}`}
        onChange={({ target }) => setSearch(target.value)}
      />
    </div>
  );
});
