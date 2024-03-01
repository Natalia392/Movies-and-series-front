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
export const loginUser = async (username, password) => {
  try {
    const requestBody = {
      username: username,
      password: password
    };

    const response = await fetch("http://localhost:8080/api/auth/signin", getRequestOptions("POST", requestBody));

    if (response.status !== 200) {
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

// --------POST /SignUp --------------------
export const signUpUser = async (username, password) => {
  try {
    const requestBody = {
      username: username,
      password: password
    };
    const response = await fetch("http://localhost:8080/api/auth/signup", getRequestOptions("POST", requestBody));

    if (response.status !== 200 && response.status !== 201) {
      throw new Error(`Failed to register user with status code: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;

  } catch(error) {
    console.error(error.message);
    throw error.message;
  }

};