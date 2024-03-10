import React, { useState } from 'react';
import './NavigationStyles.css';

const Navigation = ({ handleSwitchMedia, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMediaType, setSelectedMediaType] = useState('movies');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    handleSearch(searchTerm);
  };

  const handleButtonClick = (mediaType) => {
    setSearchTerm(''); // Limpiar el valor del input al cambiar de tipo de medios
    handleSwitchMedia(mediaType);
    setSelectedMediaType(mediaType);
    handleSubmit();
  };

  return (
    <nav className='nav-bar'>
      <div className='btn-container'>
      <button className='nav-btn' type='button' onClick={() => handleButtonClick('movies')}>
          Movies
          {selectedMediaType === 'movies' && <div className='indicator'></div>}
        </button>
        <button className='nav-btn' type='button' onClick={() => handleButtonClick('series')}>
          Series
          {selectedMediaType === 'series' && <div className='indicator'></div>}
        </button>
      </div>
      <div className='search-container'>
        <input type="text" placeholder={`Search ${selectedMediaType} by name...`} value={searchTerm} onChange={handleChange} />
        <button className='search-btn' type='button'
          onClick={() => {
            handleSubmit();
            // handleSwitchMedia('movies');
          }}>Search</button>
      </div>
    </nav>
  );
};

export default Navigation;