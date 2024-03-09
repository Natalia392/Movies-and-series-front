import React from 'react'

function SeriesCard({ series }) {
  const imgURL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="series-card" id={series.id}>
      imagen, nombre, género, fecha de lanzamiento y calificación
      <img src={`${imgURL + series.poster_path}`} alt={series.name} />
      <h2>{series.name}</h2>
      <p>{series.overview}</p>
      <p>calificación: {series.vote_average}</p>
      {/* <p>First Air Date: {series.firstAirDate}</p> */}
    </div>
  )
}

export default SeriesCard