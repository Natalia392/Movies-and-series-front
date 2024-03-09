import React, { useState } from 'react'
import { useMediaList } from '../../../services/movieService'
import SeriesCard from '../../commonComponents/Card/SeriesCard';
import MovieCard from '../../commonComponents/Card/MovieCard';

const Home = () => {

  const [mediaType, setMediaType] = useState('movies');
  const { mediaList, loading } = useMediaList(mediaType);

  const handleSwitchMedia = (type) => {
    setMediaType(type);
  };

  return (
    <div>
      <h1>Popular {mediaType === 'movies' ? 'Movies' : 'Series'} </h1>
      <button type='button' onClick={() => handleSwitchMedia('movies')}>Movies</button>
      <button type='button' onClick={() => handleSwitchMedia('series')}>Series</button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='media-list'>
          {mediaList.map(item => (
            mediaType === 'movies' ? (
              <MovieCard key={item.id} movie={item} />
            ) : (
              <SeriesCard key={item.id} series={item} />
            )
            
          ))}
        </div>
      )}
    </div>
  );
};

export default Home