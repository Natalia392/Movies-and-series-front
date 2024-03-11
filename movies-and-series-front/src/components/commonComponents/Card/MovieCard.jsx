import React, { useContext } from 'react';
import { addFavoriteMovie } from '../../../services/manageFavoritesSerice';
import Swal from 'sweetalert2';
import UserContext from '../../../services/userContext';

const MovieCard = ({ movie, genres }) => {
  const { userId } = useContext(UserContext);
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

  const handleSaveFavoriteMovie = async (event) => {
    const movieId = event.target.id;
    console.log(movieId, userId);
    try {
      await addFavoriteMovie(userId, movieId);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Movie saved successfully!',
        confirmButtonText: 'OK'
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to save movie. Please try again later.',
        confirmButtonText: 'OK'
      });
    }
  }

  return (
    <div className="media-card">
      <figure className="poster-fig">
        <img src={`${imgURL + movie.poster_path}`} alt={movie.name} />
      </figure>
      <div className='bottom-div'>
        <div className='media-info'>
          <h2 className="media-title">{movie.title}</h2>
          <p className="release-date">Release Date: {movie.release_date}</p>
          <p>Calification: {movie.vote_average}</p>
          <div className="genres-container">
            <p className="genres-list">Genres: {getGenres()}</p>
          </div>
        </div>
        <div className='like-div'>
          <button id={movie.id} className='like-btn' onClick={handleSaveFavoriteMovie}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
