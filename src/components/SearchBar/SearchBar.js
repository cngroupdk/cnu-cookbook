import React from 'react';

const SearchBar = ({ text, onSearchChange }) => (
  <div className="form-group">
    <label htmlFor="find">Hledat</label>
    <input
      type="text"
      id="find"
      className="form-control"
      value={text}
      onChange={onSearchChange}
    />
  </div>
);

export default SearchBar;
