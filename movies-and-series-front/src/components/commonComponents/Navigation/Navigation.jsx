import React, { useState } from 'react';
import './NavigationStyles.css';
import { useNavigate } from 'react-router';

const Navigation = ({ handleSwitchMedia, handleSearch }) => {
  const navigate = useNavigate()
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

  const goToFavorites = () => {
      navigate('/favorites'); // Redirigir al usuario a la página de favoritos
  };

  return (
    <nav className='nav-bar'>
      <div className='btn-container'>
        <button className='nav-btn' type='button' onClick={goToFavorites}>
          My Favorites
        </button>
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