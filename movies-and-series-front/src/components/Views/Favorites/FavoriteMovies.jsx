import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../../services/userContext';
import { getUserFavoritesMovies } from '../../../services/manageFavoritesSerice';
import MovieCard from '../../commonComponents/Card/MovieCard';

const FavoriteMovies = () => {
  const { userId } = useContext(UserContext);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const fetchUserFavorites = async () => {
      try {
        const userFavorites = await getUserFavoritesMovies(userId);
        console.log(userFavorites, userId);
        setFavoriteMovies(userFavorites);
      } catch (error) {
        console.error('Error fetching user favorites:', error);
      }
    };

    fetchUserFavorites();

  }, []);

  return (
    <div className="favorite-movies">
      <h2>Your Favorite Movies</h2>
      <p>Iba a utilizar el id para luego mostrar las películas, pero no alcancé a pensar bien cómo</p>
      <ul className="movies-list">
        {favoriteMovies.map(item => (
          <li key={item.id} className="movie-item">
            Movie id: {item.movieId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteMovies;
