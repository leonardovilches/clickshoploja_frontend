import React from "react";
import "./Search.scss";
import { ReactComponent as SearchIcon } from "../../../../assets/search_icon.svg";

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Pesquisar" className="search__input" />
      <SearchIcon className="search__icon" />
    </div>
  );
}

export default Search;
