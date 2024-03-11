import React, { useEffect, useContext, useState } from 'react'
import UserContext from '../../../services/userContext'
import { getUserFavoritesMovies } from '../../../services/manageFavoritesSerice';
import MovieCard from '../../commonComponents/Card/MovieCard';

const FavoriteMovies = () => {
  const { userId } = useContext(UserContext);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const fetchUserFavorites = async () => {
      try {
        const userFavorites = await getUserFavoritesMovies(userId);
        console.log(userFavorites);
        setFavoriteMovies(userFavorites);
      } catch (error) {
        console.error('Error fetching user favorites:', error);
      }
    };

    fetchUserFavorites();
  }, [userId]);

  return (
      <div className="favorite-movies">
        <h2>Favorite Movies</h2>
        <div className="movies-container">
          {favoriteMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
  )
}

export default FavoriteMovies