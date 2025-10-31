import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search user by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
