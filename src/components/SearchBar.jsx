import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchCity.trim()) {
      onSearch(searchCity.trim());
    }
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search for a city..."
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      />
      <button type="submit" className="search-btn">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;