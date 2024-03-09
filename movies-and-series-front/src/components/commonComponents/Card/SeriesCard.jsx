import React from 'react'
import './CardStyles.css';

function SeriesCard({ series }) {
  const imgURL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="media-card" id={series.id}>
      <figure className='poster-fig'>
        <img src={`${imgURL + series.poster_path}`} alt={series.name} />
      </figure>
      <h2 className='media-title'>{series.name}</h2>
      {/* <p className='media-description'>{series.overview}</p> */}
      <p className='calification'>Calification: {series.vote_average}</p>
      <div className='genres-container'>
        <p className='genres-list'></p>
      </div>
    </div>
  )
}

export default SeriesCard