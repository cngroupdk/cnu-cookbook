import React from 'react';

const SearchBar = ({ text, onChange }) =>
  <div className="form-group">
    <input
      type="text"
      className="form-control"
      placeholder="Search..."
      id="searchInput"
      value={text}
      onChange={onChange}
    />
  </div>;

export default SearchBar;
