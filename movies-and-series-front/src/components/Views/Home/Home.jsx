import React, { useEffect, useState } from 'react';
import './HomeStyles.css';
import { searchMedia, useMediaList } from '../../../services/movieService';
import { fetchGenres } from '../../../services/genreService';
import SeriesCard from '../../commonComponents/Card/SeriesCard';
import MovieCard from '../../commonComponents/Card/MovieCard';
import Navigation from '../../commonComponents/Navigation/Navigation';

const Home = () => {
  const [mediaType, setMediaType] = useState('movies');
  const { mediaList: originalMediaList, loading, setMediaList: setOriginalMediaList } = useMediaList(mediaType);
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchGenres().then(data => {
      setGenres(data);
    });
  }, []);

  const handleSwitchMedia = (type) => {
    setMediaType(type);
  };

  const handleSearch = async (term) => {
    setSearchTerm(term);
    try {
      const results = await searchMedia(term);
      if (results) {
        setSearchResults(results); // Almacena los resultados de la búsqueda
      }
    } catch (error) {
      console.error('Error searching media:', error);
    }
  };

  return (
    <div className='home-container'>
      <div className='navigation'>
        <h2>Explore {mediaType === 'movies' ? 'Movies' : 'Series'} </h2>
        <Navigation handleSwitchMedia={handleSwitchMedia} handleSearch={handleSearch} />
      </div>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='media-list'>
          {searchTerm ? ( // Si hay un término de búsqueda, muestra los resultados de la búsqueda
            searchResults.map(item => (
              mediaType === 'movies' ? (
                <MovieCard key={item.id} movie={item} genres={genres} />
              ) : (
                <SeriesCard key={item.id} series={item} genres={genres} />
              )
            ))
          ) : ( // Si no hay un término de búsqueda, muestra la lista de medios original
            originalMediaList.map(item => (
              mediaType === 'movies' ? (
                <MovieCard key={item.id} movie={item} genres={genres} />
              ) : (
                <SeriesCard key={item.id} series={item} genres={genres} />
              )
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
