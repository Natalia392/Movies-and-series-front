import React from 'react';
import './NavigationStyles.css';

const Navigation = ({ handleSwitchMedia }) => {
  return (
    <nav className='nav-bar'>
      <div className='btn-container'>
        <button className='nav-btn' type='button' onClick={() => handleSwitchMedia('movies')}>Movies</button>
        <button className='nav-btn' type='button' onClick={() => handleSwitchMedia('series')}>Series</button>
      </div>
      <div className='search-container'>
        <input type="text" placeholder='Search by name...' />
        <button className='search-btn' type='button'>Search</button>
      </div>
    </nav>
  );
};

export default Navigation;