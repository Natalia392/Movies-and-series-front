import { useState, useEffect } from 'react';

const apiKey = process.env.REACT_APP_API_KEY;

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    });
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const useMediaList = (mediaType) => {
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoint = mediaType === 'movies' ?
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc' :
      'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';

    fetchData(endpoint).then(data => {
      setMediaList(data);
      setLoading(false);
    });
  }, [mediaType]);

  return { mediaList, loading };
};


// search by name
export const searchMedia = async (movieName) => {
  const baseUrl = 'https://api.themoviedb.org/3/search/movie'; // url base para la búsqueda por nombre
  const query = encodeURIComponent(movieName); // Codificar el nombre de la película para usarlo en la URL

  const endpoint = `${baseUrl}?query=${query}&include_adult=false&language=en-US&page=1`; // url restultante (con las restricciones y condiciones que traigo desde la documentación)

  try {
    const results = await fetchData(endpoint);
    console.log(results);
    return results;
  } catch (error) {
    console.error('Error searching movie:', error);
    return null;
  }
};