const apiKey = process.env.REACT_APP_API_KEY;

const fetchGenres = async () => {
  const url = 'https://api.themoviedb.org/3/genre/movie/list';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
};

export { fetchGenres };
