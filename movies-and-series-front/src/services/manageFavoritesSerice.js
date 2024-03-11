import { getRequestOptions } from "./authService";

export const addFavoriteMovie = async(userId, movieId) => {
  try {
    const requestBody = {
      userId: userId,
      movieId: movieId
    };

    const response = await fetch("http://localhost:8080/api/favorites/add", getRequestOptions("POST", requestBody));

    if(response.status !== 200 && response.status !== 201) {
      throw new Error(`Failed to add movie to favorites with status code ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;

  } catch (error) {
    console.error(error.message);
    throw error.message;
  }

};

// here goes the get all favorites and the remove favorites