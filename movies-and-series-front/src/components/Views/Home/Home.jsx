import React, { useEffect, useState } from 'react'
import './HomeStyles.css';
import { useMediaList } from '../../../services/movieService';
import { fetchGenres } from '../../../services/genreService';
import SeriesCard from '../../commonComponents/Card/SeriesCard';
import MovieCard from '../../commonComponents/Card/MovieCard';
import Navigation from '../../commonComponents/Navigation/Navigation';

const Home = () => {

  const [mediaType, setMediaType] = useState('movies');
  const { mediaList, loading } = useMediaList(mediaType);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres().then(data => {
      setGenres(data);
    });
  }, []);

  const handleSwitchMedia = (type) => {
    setMediaType(type);
  };

  return (
    <div className='home-container'>
      <div className='navigation'>
        <h2>Explore {mediaType === 'movies' ? 'Movies' : 'Series'} </h2>
        <Navigation handleSwitchMedia={handleSwitchMedia} />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='media-list'>
          {mediaList.map(item => (
            mediaType === 'movies' ? (
              <MovieCard key={item.id} movie={item} genres={genres} />
            ) : (
              <SeriesCard key={item.id} series={item} genres={genres} />
            )

          ))}
        </div>
      )}
    </div>
  );
};

export default Home