import React from 'react' 
import GetMoviesList from '../../../services/movieService'

const Home = () => {

  const { movies } = GetMoviesList();

  return (
    <div>Home
            <h1>Popular Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home