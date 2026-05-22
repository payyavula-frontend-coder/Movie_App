import React from "react";

function SearchBar({ setSearch, onSearch }) {
  return (
    <input
      type="text"
      // value={search}
      placeholder="Search movies..."
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onSearch(e.target.value);
        }
      }}
    />
  );
}

export default SearchBar;