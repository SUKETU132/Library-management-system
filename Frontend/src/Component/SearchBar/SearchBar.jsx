import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search the books available in library" />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
