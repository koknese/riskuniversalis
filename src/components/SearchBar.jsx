import React from "react";
import { NavLink } from "react-router-dom";
import { ExternalLink } from "lucide-react";

import "../index.css";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
      <input
        type="search"
        placeholder={"Search by title or category"} 
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
  );
}

export default SearchBar;
