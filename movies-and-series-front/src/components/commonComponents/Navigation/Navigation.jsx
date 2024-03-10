import React, { useState } from 'react';
import './NavigationStyles.css';

const Navigation = ({ handleSwitchMedia, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    handleSearch(searchTerm);
  };

  const handleButtonClick = (mediaType) => {
    setSearchTerm(''); // Limpiar el valor del input al cambiar de tipo de medios
    handleSwitchMedia(mediaType);
    handleSubmit();
  };

  return (
    <nav className='nav-bar'>
      <div className='btn-container'>
        <button className='nav-btn' type='button' onClick={() => handleButtonClick('movies')}>Movies</button>
        <button className='nav-btn' type='button' onClick={() => handleButtonClick('series')}>Series</button>
      </div>
      <div className='search-container'>
        <input type="text" placeholder='Search by name...' value={searchTerm} onChange={handleChange} />
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