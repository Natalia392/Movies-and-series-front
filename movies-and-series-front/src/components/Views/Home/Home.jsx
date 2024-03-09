import React from 'react'
import GetMoviesList from '../../../services/movieService'

const Home = () => {

  const { movies, loading } = GetMoviesList();

  return (
    <div>
      <h1>Popular Movies</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home