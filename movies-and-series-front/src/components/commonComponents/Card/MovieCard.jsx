// MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  const imgURL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-card">
      <img src={`${imgURL + movie.poster_path}`} alt={movie.name} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
