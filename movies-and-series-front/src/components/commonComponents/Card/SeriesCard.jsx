import React from 'react'
import './CardStyles.css';

function SeriesCard({ series, genres }) {
  const imgURL = "https://image.tmdb.org/t/p/w500";

  const getGenres = () => {
    const foundGenres = series.genre_ids
      .map(genreId => genres.find(genre => genre.id === genreId))
      .filter(genre => genre)
      .map(genre => genre.name);

    if (foundGenres.length === 0) {
      return 'not available';
    }

    return foundGenres.join(', ');
  };

  return (
    <div className="media-card" id={series.id}>
      <figure className='poster-fig'>
        <img src={`${imgURL + series.poster_path}`} alt={series.name} />
      </figure>
      <div className='bottom-div'>
        <div className='media-info'>
          <h2 className='media-title'>{series.name}</h2>
          <p className='calification'>Calification: {series.vote_average}</p>
          <div className='genres-container'>
            <p className='genres-list'>Genres: {getGenres()}</p>
          </div>
        </div>
        <div className='like-div'>
          <button className='like-btn' type='button'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default SeriesCard