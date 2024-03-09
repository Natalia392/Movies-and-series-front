import React, { useState } from 'react'
import { useMediaList } from '../../../services/movieService'

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
            <li key={item.id}>{item.title}</li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home