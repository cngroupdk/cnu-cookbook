import React from 'react';

const SearchBar = ({ text, onChange }) =>
  <div className="form-group">
    <label htmlFor="searchInput">Hledat</label>
    <input
      type="text"
      className="form-control"
      id="searchInput"
      value={text}
      onChange={onChange}
    />
  </div>;

export default SearchBar;
