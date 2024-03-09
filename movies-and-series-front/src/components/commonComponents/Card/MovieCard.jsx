import React from 'react';

const MovieCard = ({ movie, genres }) => {
  const imgURL = "https://image.tmdb.org/t/p/w500";

  const getGenres = () => {
    const foundGenres = movie.genre_ids
      .map(genreId => genres.find(genre => genre.id === genreId))
      .filter(genre => genre)
      .map(genre => genre.name);
  
    if (foundGenres.length === 0) {
      return 'not available';
    }
  
    return foundGenres.join(', ');
  };

  return (
    <div className="media-card">
      <figure className="poster-fig">
        <img src={`${imgURL + movie.poster_path}`} alt={movie.name} />
      </figure>
      <h2 className="media-title">{movie.title}</h2>
      <p className="release-date">Release Date: {movie.release_date}</p>
      <p>Calification: {movie.vote_average}</p>
      <div className="genres-container">
        <p className="genres-list">Genres: {getGenres()}</p>
      </div>
    </div>
  );
};

export default MovieCard;
