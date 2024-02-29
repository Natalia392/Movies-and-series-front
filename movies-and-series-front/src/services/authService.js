export function getRequestOptions(method, bodyData) {
  let requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method === "GET") {
    // In case is not a GET request, the content type header is not needed
    delete requestOptions.headers["Content-Type"];
  } else {
    // For other request methods like POST, PUT, etc.
    requestOptions.body = JSON.stringify(bodyData);
  }

  return requestOptions;
}

//-------- POST /login ------ Login ------
export const loginUser = async (email, password) => {
  try {
    const requestBody = {
      email: email,
      password: password
    };

    const response = await fetch("https://intense-peak-28151-a26a6d29b3a6.herokuapp.com/api/v1/login", getRequestOptions("POST", requestBody));

    if (response.status !== 201) {
      throw new Error(`Failed to login user with status code: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("User successfully logged in:", responseData);
    return responseData;

  } catch (error) {
    console.error(error.message);
    throw error.message;
  }
};