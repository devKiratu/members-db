import React from "react";

function Search({ onFilter, items }) {
  let timeout;

  const filterItems = (query) => {
    clearTimeout(timeout);
    if (!query) return onFilter(items);

    timeout = setTimeout(() => {
      onFilter(
        items.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 750);
  };

  return (
    <div>
      <form className="search-form">
        <input
          type={"search"}
          placeholder="filter by name"
          onChange={(e) => filterItems(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
